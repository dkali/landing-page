export default function Company(props: any) {
    return (
        <div class="mb-4">
            <div class="flex flex-row">
                <p class="text-lg">{props.name}</p>
                <p class="text-lg ml-2">/</p>
                <p class="text-lg ml-2 text-gray-500">{props.position}</p>
            </div>
            <p class="text-gray-500 mt-2">
                {props.project}
            </p>
            <p class="text-gray-500 mt-2">
                {props.language}
            </p>
        </div>
    );
}