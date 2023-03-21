<script>
    import SimplePage from "../../components/SimplePage.svelte";

    let submitted = false;
    let submitLoading = false;

    const submitForm = (event) => {
        submitLoading = true;

        const formData = new FormData(event.target);

        let data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        fetch("https://api.radixproject.org/form?name=Waitlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((data) => data.json())
            .then((data) => {
                submitLoading = false;
                if (data.error) {
                    alert(data.message);
                } else {
                    submitted = true;
                }
            });
    };
</script>

<SimplePage>
    <div class="center" slot="title">
        {#if submitted}
            Thanks for your interest in becoming a partner! We've received your request and will be in touch over email
            to confirm your place on the waitlist.
        {:else}
            Ready to apply?<br/>
            Join our partner waitlist<span class="dot">.</span>
        {/if}
    </div>

    <div class="container" slot="content">
        {#if !submitted}
            <form on:submit|preventDefault={submitForm}>
                <p>Email</p>
                <input required type="email" name="Email"/>

                <p>Project Name</p>
                <input required type="text" name="Project Name"/>

                <p>Your Role</p>
                <input required placeholder="What is your role in your project?" type="text" name="Your Role"/>

                <p>Project Summary</p>
                <textarea required placeholder="Please provide a short summary of your project" rows="2"
                          name="Project Summary"></textarea>

                <p>Project Description</p>
                <textarea required placeholder="Please explain your project and why it's needed" rows="10"
                          name="Project Description"></textarea>

                <p>Services</p>
                <textarea required placeholder="What services do you need from Radix and how will you use them?"
                          rows="10"
                          name="Services"></textarea>

                <p>Why Radix?</p>
                <textarea required placeholder="Please explain why Radix is good fit for your project" rows="6"
                          name="Why Radix?"></textarea>

                <p>Adopters</p>
                <textarea required
                          placeholder="Please explain who is currently using your project. Add any links or testimonials of how your project benefits the open source community."
                          rows="6" name="Adopters"></textarea>

                <p>Source Code</p>
                <input required placeholder="Provide a link to your project's source code or VCS organization"
                       type="text"
                       name="Source Code"/>

                <p>Additional Information</p>
                <textarea required placeholder="Is there anything else you'd like to include in your application?"
                          rows="8"
                          name="Additional Information"></textarea>

                {#if submitLoading}
                    <button type="submit" disabled>Submitting...</button>
                {:else}
                    <button type="submit">Submit</button>
                {/if}

                <br>
                <p class="mono center">Looking to volunteer? We want to hear from you! Contact link below.</p>
            </form>
        {/if}
    </div>
</SimplePage>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 15px;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 80%;
    }

    input,
    textarea,
    button {
        font-size: 12pt;
        color: white;
        background-color: black;
        border: 2px #898989 solid;
        padding: 5px;
        border-radius: 5px;
        margin: 5px 0 20px 0;
        font-family: "Inter", sans-serif;
    }

    @media (prefers-color-scheme: light) {
        input,
        textarea,
        button {
            color: black !important;
            background-color: white !important;
        }
    }

    p {
        margin: 0;
    }

    ::placeholder {
        color: #5b5b5b;
        opacity: 1;
    }

    :-ms-input-placeholder {
        color: #5b5b5b;
    }

    ::-ms-input-placeholder {
        color: #5b5b5b;
    }

    .center {
        text-align: center;
    }
</style>
