import { A } from "@solidjs/router";
import Counter from "~/components/Counter";
import Greetings from "~/components/Greetings";
import Contacts from "~/components/Contacts";
import WorkExperience from "~/components/WorkExperience";
import Education from "~/components/Education";

export default function Home() {
  return (
    <main>
      <div class="flex flex-col mb-10">
        <div class="flex flex-row">
          {/* front page */}
          <div class="basis-3/5 bg-blue-600">
            <div class="flex flex-row">
              <div class="basis-1/5" />
              <div class="basis-3/5">
                <Greetings />
                <Contacts />
              </div> 
            </div>
          </div>
        </div>

        <div class="flex flex-row">
            <div class="basis-1/12" />
            <div class="basis-10/12">
              <WorkExperience />
              <Education />
            </div>
        </div>        

      </div>
    </main>
  );
}
