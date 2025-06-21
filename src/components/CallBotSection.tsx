import React from "react";

const CallBotSection: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-light text-gray-900">Call Bot</h1>
    <p className="text-sm text-gray-500">Prateek Sane &nbsp; October 2024</p>
    <div className="mt-6">
      <video
        src="/videos/hodor-demo-v1.mov"
        controls
        className="w-full max-w-2xl rounded-lg shadow-md"
      >
        Sorry, your browser doesn’t support embedded videos.
      </video>
      <br></br>
      <p>
        The bot calls customer service, tries to contest a charge on behalf of
        the user, and when it gets stuck it's able to call in its human and
        connect the calls. Built using Decagram, ChatGPT, and Twilio
      </p>
      <p>
        <a
          href="https://github.com/PrateekSane/AI-Call-Bot"
          className="text-blue-500 hover:text-blue-700"
        >
          Github
        </a>
      </p>
    </div>
  </div>
);

export default CallBotSection;
