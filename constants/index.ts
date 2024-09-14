import { onboardingContentProps } from "@/types/types";

export const onboardingContent: onboardingContentProps[] = [
  {
    id: 1,
    title: "Welcome to Our Insurance Rate Calculator",
    description:
      "This tool is designed to help you calculate insurance rates for your clients. Please follow the steps to get started.",
    image: require("@/assets/lottie/lottie-umbrella.json"),
  },
  {
    id: 2,
    title: "Calculate Insurance Rate",
    description:
      "Once you've entered your client's information, you can calculate their insurance rate. We'll provide you with a detailed breakdown of the premium and the factors that contributed to the calculation.",
    image: require("@/assets/lottie/lottie-motor.json"),
  },
  {
    id: 3,
    title: "Share the Result with Your Client",
    description:
      "Finally, you can share the calculated insurance rate with your client. This will help them understand the premium and make an informed decision about their insurance coverage.",
    image: require("@/assets/lottie/lottie-dollar.json"),
  },
];
