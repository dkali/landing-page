export default function Contacts() {
    return (
        <div>
            <div class="flex flex-row mt-20">
                <div class="basis-1/5">
                    <p class="text-sky-300 leading-loose">Email</p>
                    <p class="text-sky-300 leading-loose">Phone</p>
                    <p class="text-sky-300 leading-loose">Telegram</p>
                    <p class="text-sky-300 leading-loose">Address</p>
                </div>
                <div class="basis-4/5">
                    <p class="text-white leading-loose">secretshelter@gmail.com</p>
                    <p class="text-white leading-loose">+7 920 006 8316</p>
                    <p class="text-white leading-loose">@dkalinnikov</p>
                    <p class="text-white leading-loose">Belgrade, Strumicka 2a</p>
                </div>
            </div>
            
            <div class="flex flex-row mt-20 mb-20">
                <a href="https://www.linkedin.com/in/dmitry-kalinnikov-a75186aa/" target="_blank" class="text-white">Linkedin</a>
                <a href="https://github.com/dkali?tab=repositories" target="_blank" class="text-white ml-7">Github</a>
            </div>
        </div>
    );
}