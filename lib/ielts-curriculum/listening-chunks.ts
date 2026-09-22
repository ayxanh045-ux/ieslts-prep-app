import { ListeningChunk } from "@/types/curriculum";

export const LISTENING_CHUNKS: ListeningChunk[] = [
  {
    id: "listening-1",
    title: "Enquiry: Westwood Sports & Aquatic Complex",
    part: 1,
    source: {
      book: 16,
      test: 1,
      section: 1,
      title: "Community Recreation Centre Membership Form",
    },
    contextDescription:
      "You will hear a telephone conversation between a customer and a receptionist at the Westwood Community Sports and Aquatic Complex regarding membership options.",
    speakerAccent: "British",
    prepTimeSeconds: 25,
    durationSeconds: 58,
    audioUrl: "https://tipsandgist.com/wp-content/uploads/2025/08/Cambridge_IELTS_16_-_Listening_Test_1.mp3",
    audioScript:
      "Good morning, Westwood Community Centre. How may I help you today? \n" +
      "— Hello there! I'm moving to the district next week and I'd like some details about your sports membership packages. \n" +
      "— Certainly! For new residents, our standard annual package is normally £340, but we currently have a promotional spring intake discount reducing it to £285 if you enroll before Friday. \n" +
      "— Oh, that's splendid. Does that include court bookings for badminton? \n" +
      "— Yes, all indoor racquet courts are complimentary during off-peak hours, but after 6:00 PM on weekdays, there is a modest reservation fee of £4.50. You also receive unrestricted access to our heated swimming pool and steam room. \n" +
      "— Perfect. What about locker facilities? \n" +
      "— Padlocks are available to rent for £2, or members may bring their own combination lock. Also, could I take your surname for our pre-registration ledger? \n" +
      "— Yes, it's MacAlister. That's spelt M-A-C-A-L-I-S-T-E-R. And my contact mobile is 07946 882319.",
    questions: [
      {
        id: "l1-q1",
        questionNumber: 1,
        type: "note_completion",
        prompt: "Discounted annual membership fee: £______________",
        correctAnswer: "285",
        acceptableAnswers: ["285", "£285"],
        transcriptTimestamp: "0:22",
        proofQuote:
          "...standard annual package is normally £340, but we currently have a promotional spring intake discount reducing it to £285...",
        distractorTrapExplanation:
          "Distractor Alert! The speaker mentions £340 first, but that is the standard price. The actual discounted offer is £285.",
      },
      {
        id: "l1-q2",
        questionNumber: 2,
        type: "note_completion",
        prompt: "Evening court bookings after 6 PM require a fee of £______________",
        correctAnswer: "4.50",
        acceptableAnswers: ["4.50", "4.5", "£4.50"],
        transcriptTimestamp: "0:36",
        proofQuote:
          "...after 6:00 PM on weekdays, there is a modest reservation fee of £4.50.",
        distractorTrapExplanation:
          "The speaker states courts are complimentary (free) during off-peak hours, but specifies £4.50 for evening bookings.",
      },
      {
        id: "l1-q3",
        questionNumber: 3,
        type: "note_completion",
        prompt: "Customer's surname: ______________",
        correctAnswer: "MacAlister",
        acceptableAnswers: ["MacAlister", "Macalister", "macalister"],
        transcriptTimestamp: "0:49",
        proofQuote: "Yes, it's MacAlister. That's spelt M-A-C-A-L-I-S-T-E-R.",
        distractorTrapExplanation:
          "IELTS Part 1 always tests letter-by-letter spelling. Note the prefix 'Mac' rather than 'Mc'.",
      },
      {
        id: "l1-q4",
        questionNumber: 4,
        type: "note_completion",
        prompt: "Contact mobile number: ______________",
        correctAnswer: "07946 882319",
        acceptableAnswers: ["07946 882319", "07946882319"],
        transcriptTimestamp: "0:54",
        proofQuote: "And my contact mobile is 07946 882319.",
        distractorTrapExplanation:
          "In British English, 'double eight' means 88. Pay close attention to consecutive repeated digits.",
      },
    ],
  },
  {
    id: "listening-2",
    title: "University Tutorial: Renewable Microgrids Project",
    part: 3,
    source: {
      book: 17,
      test: 2,
      section: 3,
      title: "Engineering Field Study Consultation",
    },
    contextDescription:
      "You will hear two engineering students, Liam and Siobhan, discussing their joint research methodology on rural microgrid implementations with their tutor, Dr. Gallagher.",
    speakerAccent: "British",
    prepTimeSeconds: 30,
    durationSeconds: 68,
    audioScript:
      "Dr. Gallagher: Welcome, Liam and Siobhan. Let's look over your preliminary proposal for the remote Hebridean island microgrid project. Liam, what primary obstacle did your site assessment identify? \n" +
      "Liam: Well, initially we anticipated that local islanders would resist wind turbine installations due to visual disturbance. However, our community survey showed that over 80 percent enthusiastically welcomed turbines. The real bottleneck turned out to be the antiquated subsea cabling which can't withstand peak energy surges. \n" +
      "Dr. Gallagher: A classic infrastructure mismatch. And Siobhan, how have you adjusted the battery storage configuration? \n" +
      "Siobhan: We discarded lithium-ion due to extreme maritime salt humidity. Instead, we have settled on sodium-nickel chloride flow batteries because their thermal management operates reliably under sub-zero gale conditions. \n" +
      "Dr. Gallagher: Excellent foresight. For your presentation next Thursday, please ensure you focus primarily on the lifecycle cost comparisons rather than just technical schematics.",
    questions: [
      {
        id: "l2-q1",
        questionNumber: 1,
        type: "multiple_choice",
        prompt:
          "What was the main obstacle identified during the island site assessment?",
        options: [
          "Opposition from residents regarding scenic disruption",
          "Outdated underwater cable capacity for power surges",
          "Excessive installation expenses of wind turbine foundations",
          "Lack of governmental permits for offshore construction",
        ],
        correctAnswer: "Outdated underwater cable capacity for power surges",
        transcriptTimestamp: "0:28",
        proofQuote:
          "The real bottleneck turned out to be the antiquated subsea cabling which can't withstand peak energy surges.",
        distractorTrapExplanation:
          "Liam mentions visual disturbance first ('anticipated that local islanders would resist...'), but negates it immediately ('However, our community survey showed 80% welcomed turbines'). The actual obstacle was the antiquated cabling.",
      },
      {
        id: "l2-q2",
        questionNumber: 2,
        type: "multiple_choice",
        prompt:
          "Why did Siobhan select sodium-nickel chloride batteries over lithium-ion?",
        options: [
          "They are significantly cheaper to transport by ferry",
          "They possess higher energy density per kilogram",
          "They perform reliably in freezing marine conditions",
          "They have a longer operational lifespan",
        ],
        correctAnswer: "They perform reliably in freezing marine conditions",
        transcriptTimestamp: "0:47",
        proofQuote:
          "...their thermal management operates reliably under sub-zero gale conditions.",
        distractorTrapExplanation:
          "'Sub-zero gale conditions' is paraphrased as 'freezing marine conditions'. Lithium-ion was rejected due to 'extreme maritime salt humidity'.",
      },
      {
        id: "l2-q3",
        questionNumber: 3,
        type: "note_completion",
        prompt:
          "Dr. Gallagher advises the students to emphasize ______________ during their upcoming presentation.",
        correctAnswer: "lifecycle cost comparisons",
        acceptableAnswers: [
          "lifecycle cost comparisons",
          "lifecycle costs",
          "cost comparisons",
        ],
        transcriptTimestamp: "0:59",
        proofQuote:
          "For your presentation next Thursday, please ensure you focus primarily on the lifecycle cost comparisons rather than just technical schematics.",
        distractorTrapExplanation:
          "Dr. Gallagher says 'rather than just technical schematics', so schematics is the distractor.",
      },
    ],
  },
];
