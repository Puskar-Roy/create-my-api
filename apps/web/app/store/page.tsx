import React from "react";
import GlobalWrapper from "../../components/common/GlobalWrapper";
import DisplayCard from "../../components/apistore/DisplayCard";

const page = () => {
  return (
    <div className="text-white">
      <div className="flex justify-center items-center w-[90%] mx-auto flex-wrap gap-5">
        <DisplayCard
          title="Node Js Starter Template"
          description="A starter template for Node.js, Express, and MongoDB."
          tags={["Node Js", "Express", "MongoDB", "MongoDB"]}
          primaryLink="https://example.com"
          secondaryLinks={[
            { label: "JavaScript", url: "#" },
            { label: "React", url: "#" },
          ]}
        />
        <DisplayCard
          title="React UI Kit Template"
          description="A collection of UI components built with React and Tailwind."
          tags={["React", "Tailwind", "UI Kit", "MongoDB"]}
          primaryLink="https://example.com"
          secondaryLinks={[
            { label: "Tailwind", url: "#" },
            { label: "UI Design", url: "#" },
          ]}
        />
        <DisplayCard
          title="Full Stack Template UI"
          description="A complete full-stack project setup using MERN stack."
          tags={["MERN", "MongoDB", "React", "Express", "Node.js"]}
          primaryLink="https://example.com"
          secondaryLinks={[
            { label: "GraphQL", url: "#" },
            { label: "TypeScript", url: "#" },
          ]}
        />
        <DisplayCard
          title="AI Chatbot Template "
          description="An AI-powered chatbot built with Python and TensorFlow."
          tags={["AI", "Chatbot", "TensorFlow", "Python", "MongoDB"]}
          primaryLink="https://example.com"
          secondaryLinks={[
            { label: "Machine Learning", url: "#" },
            { label: "Natural Language Processing", url: "#" },
          ]}
        />
        <DisplayCard
          title="Android Weather App Template"
          description="A weather forecasting app for Android using Kotlin."
          tags={["Android", "Kotlin", "Weather API"]}
          primaryLink="https://example.com"
          secondaryLinks={[
            { label: "Mobile Development", url: "#" },
            { label: "Jetpack Compose", url: "#" },
          ]}
        />
        <DisplayCard
          title="Blockchain Wallet Template"
          description="A secure cryptocurrency wallet with blockchain integration."
          tags={["Blockchain", "Crypto", "Ethereum", "Web3"]}
          primaryLink="https://example.com"
          secondaryLinks={[
            { label: "Solidity", url: "#" },
            { label: "Smart Contracts", url: "#" },
          ]}
        />
        <DisplayCard
          title="E-commerce Platform Template"
          description="A scalable e-commerce platform with payment integration."
          tags={["E-commerce", "Next.js", "Stripe", "React"]}
          primaryLink="https://example.com"
          secondaryLinks={[
            { label: "Online Store", url: "#" },
            { label: "Shopify Alternative", url: "#" },
          ]}
        />
        <DisplayCard
          title="Game Development Framework Template"
          description="A powerful framework for developing 2D and 3D games."
          tags={["Game Dev", "Unity", "C#", "Unreal Engine"]}
          primaryLink="https://example.com"
          secondaryLinks={[
            { label: "3D Rendering", url: "#" },
            { label: "Multiplayer", url: "#" },
          ]}
        />
      </div>
    </div>
  );
};

export default page;
