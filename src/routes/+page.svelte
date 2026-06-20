<script>
    import Figlet from "$lib/components/Figlet.svelte";
</script>

<div class="app-center" style="font-size: 24px;">
    <div>
        <a class="noformat" href="javascript:alert('hi')">
            <Figlet text="guille" />
        </a>

        <p>chronically online 16 year old</p>

        <hr />

        <a href="https://github.com/guille7z">github</a> -
        <a
            href="javascript:navigator.clipboard.writeText('@guille7z:orwell.ing');"
            >matrix</a
        >
        -
        <a href="javascript:navigator.clipboard.writeText('guille#9097');"
            >stoat</a
        >
        -
        <a href="mailto:im@guille.zip">email</a>

        <br /><br />

        <a href="/blog">blog</a> -
        <a href="/projects">projects</a>

        <br /><br />

        <!-- blinkies taken from catsarch.com - thanks! -->

        <a href="https://stallman.org/google.html">
            <img
                src="stand-up-to-google-v1.gif"
                style="color: white; font-size: 1rem;"
                alt="Stand up to Google!"
            />
        </a>

        <a href="https://tosdr.org/">
            <img
                src="ihavenotread-v1.gif"
                style="color: white; font-size: 1rem;"
                alt="I have not read"
            />
        </a>

        <img
            src="righttorepair-v1.png"
            style="color: white; font-size: 1rem;"
            alt="I Support Right To Repair"
        />
    </div>
</div>
