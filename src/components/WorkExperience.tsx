import Company from "~/components/Company";

export default function WorkExperience() {
  return (
    <div class="mt-10">
      <p class="font-sans font-bold text-3xl
        underline decoration-blue-600 decoration-8 underline-offset-8">Work Experience</p>
      <div class="grid grid-cols-4 gap-4 mt-10">
        <div>November 2024 - present</div>
        <div class="col-span-3">
          <Company 
            name="SiriusXM"
            position="Principal Software Development Engineer"
            project={<p>Design and development of Type Acceptance test suite using Cucumber test framework on Ruby. Process development and documentation.<br />
            Internal tools development, such as Satellite Module engineering client.<br />
            Team leading, project metrics reporting, technicall meetings.</p>}
            language="Ruby, C#"
          />
        </div>
        <div>January 2023 - November 2024</div>
        <div class="col-span-3">
          <Company 
            name="TLM Software Design"
            position="Principal Software Development Engineer"
            project={<p>Continuation of previous project for SiriusXM. Design and development of Type Acceptance test suite using Cucumber test framework on Ruby. Process development and documentation.<br />
            Internal tools development, such as logs processing tool to help engineers to locate and organize the required logs for failed sceanrios. Web Application development using ASP.NET Blazor framework to help with failures triage process after internal test runs on the reference applications.<br />
            Team leading, project metrics reporting, technicall meetings with the customer.</p>}
            language="Ruby, C#"
          />
        </div>
        <div>January 2017 - December 2022</div>
        <div class="col-span-3">
          <Company 
            name="SWTecNN"
            position="Principal Software Development Engineer"
            project={<p>Continuation of previous project for SiriusXM. Design and development of Type Acceptance test suite using Cucumber test framework.<br />
            Internal tools development, such as data packets decoder to support the entire range of SiriusXM's data services, UI plugins on WPF extending SiriusXM's internal test framework.<br />
            Team leading, project metrics reporting, technicall meetings with the customer.</p>}
            language="Ruby, C#"
          />
        </div>
        <div>January 2015 - December 2016</div>
        <div class="col-span-3">
          <Company 
            name="Harman"
            position="Senior Software Development Engineer"
            project={<p>Sirius XM UI Requirements and Recommendations verification using Ruby's Test::Unit framework. Test suite is targeting OEM Head Units coming to the Sirius XM for certification of UI compliance.<br />
            Internal tools development, such as Data Service packets generators based on SiriusXM propriatery protocols.<br />
            Module behavior and Firmware validation for SiriusXM chipsets using RSpec framework on Ruby.<br />
            Team leading, project metrics reporting, technicall meetings with the customer.</p>}
            language="Ruby, C#"
          />
        </div>
        <div>January 2012 - December 2014</div>
        <div class="col-span-3">
          <Company 
            name="Symphony Teleca"
            position="Software Development Engineer"
            project="Development of Automatic test suite for Satellite Module Services library (SMS). Writing tests to validate SiriusXM data services implementation using Google Test framework and bugfix in SMS library."
            language="Ruby, C"
          />
        </div>
        <div>March 2008 - February 2010</div>
        <div class="col-span-3">
          <Company 
            name="Telma Soft"
            position="Software Engineer"
            project="Firmware develoment for Kyocera mobile phones on BREW and BREWMP platforms. Working as part of the Newtork Apps team developing the Calling, Dialer and Screen Lock applications. Full implementation of UI level of applications and high level control of call processing."
            language="C, C++"
          />
        </div>
      </div>
    </div>
  );
}