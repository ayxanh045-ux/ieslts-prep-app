import { ReadingPassageChunk } from "@/types/curriculum";

export const READING_PASSAGES: ReadingPassageChunk[] = [
  {
    id: "reading-1",
    title: "The Silk Road & Ancient Globalization",
    paragraphLabel: "Passage 1 — Paragraph B",
    source: {
      book: 17,
      test: 1,
      section: 1,
      title: "The Development of the Silk Road",
    },
    difficulty: "Band 7.0-7.5",
    wordCount: 168,
    paragraphText:
      "Contrary to popular belief, the Silk Road was never a single paved highway connecting China directly to Rome. Instead, it comprised an intricate, shifting network of treacherous caravan routes that spanned over six thousand kilometers across rugged mountain ranges and arid deserts. Goods rarely traveled the entire distance in the custody of a single merchant. Instead, commodities were transshipped through dozens of intermediaries in bustling oasis settlements such as Samarkand and Dunhuang. As silk, paper, and porcelain moved westward, glass, silver bullion, and horses flowed eastward. More enduring than the physical merchandise, however, was the profound transmission of philosophical concepts, astronomical knowledge, and religious traditions—most notably the dissemination of Buddhism across Central Asia.",
    questions: [
      {
        id: "r1-q1",
        type: "tfng",
        prompt:
          "Individual merchants customarily transported their merchandise along the entire length of the Silk Road from start to finish.",
        correctAnswer: "FALSE",
        proofQuote:
          "Goods rarely traveled the entire distance in the custody of a single merchant. Instead, commodities were transshipped through dozens of intermediaries in bustling oasis settlements...",
        explanation:
          "The text directly contradicts this claim by stating that goods 'rarely traveled the entire distance in the custody of a single merchant' and were instead passed between intermediaries.",
        cambridgeTip:
          "In True/False/Not Given, FALSE means the passage explicitly says the opposite or contradicts the statement. If there is a direct antonym/counter-assertion, choose FALSE.",
      },
      {
        id: "r1-q2",
        type: "matching_heading",
        prompt: "Choose the most appropriate heading for Paragraph B:",
        options: [
          "The technological innovations that created paved Asian highways",
          "A decentralized network facilitating both commerce and cultural exchange",
          "The military conflicts that emerged over silk and silver monopolies",
          "Why Roman merchants preferred maritime routes over land travel",
        ],
        correctAnswer:
          "A decentralized network facilitating both commerce and cultural exchange",
        proofQuote:
          "Instead, it comprised an intricate, shifting network... More enduring than the physical merchandise, however, was the profound transmission of philosophical concepts...",
        explanation:
          "The paragraph explains that the route was not a single road but a shifting network of intermediaries, and highlights that cultural ideas (Buddhism, science) outlasted the physical commodities.",
        cambridgeTip:
          "Do not just match random keywords like 'paved' (the text says it was 'never a single paved highway'). Headings summarize the main idea of the entire paragraph.",
      },
      {
        id: "r1-q3",
        type: "sentence_completion",
        prompt:
          "Complete the sentence below. Choose NO MORE THAN TWO WORDS from the passage:\n\nRather than one direct path, trade relied on intermediate tradesmen operating in dynamic ______________.",
        correctAnswer: "oasis settlements",
        acceptableAnswers: ["oasis settlements"],
        proofQuote:
          "Instead, commodities were transshipped through dozens of intermediaries in bustling oasis settlements such as Samarkand and Dunhuang.",
        explanation:
          "The text states that commodities were transshipped by intermediaries in 'oasis settlements'. Words must be taken directly from the text without changing the form.",
        cambridgeTip:
          "Strict Cambridge Rule: If the instructions say 'NO MORE THAN TWO WORDS', three words will be marked wrong even if grammatically plausible.",
      },
    ],
  },
  {
    id: "reading-2",
    title: "Urban Vertical Farming & Sustainable Agriculture",
    paragraphLabel: "Passage 2 — Paragraph C",
    source: {
      book: 16,
      test: 3,
      section: 2,
      title: "Vertical Farming in 21st-Century Metropolises",
    },
    difficulty: "Band 7.5-8.0",
    wordCount: 175,
    paragraphText:
      "Proponents of vertical farming champion its dramatic reduction in resource consumption compared to conventional open-field agriculture. Controlled Environment Agriculture (CEA) facilities recycle up to 95 percent less water through closed-loop hydroponic and aeroponic systems that capture and purify transpired moisture. Furthermore, by stacking growth trays inside insulated urban facilities, year-round harvests become decoupled from seasonal meteorological disruptions. However, environmental economists urge caution regarding the sector's energy balance. The sheer electrical demand required to operate arrays of high-intensity light-emitting diodes (LEDs) and climate-regulation HVAC machinery frequently nullifies the greenhouse gas savings otherwise achieved by eliminating long-distance diesel freight transit.",
    questions: [
      {
        id: "r2-q1",
        type: "tfng",
        prompt:
          "Vertical farming operations always result in a net reduction in total greenhouse gas emissions.",
        correctAnswer: "FALSE",
        proofQuote:
          "The sheer electrical demand required to operate arrays of high-intensity light-emitting diodes (LEDs)... frequently nullifies the greenhouse gas savings otherwise achieved by eliminating long-distance diesel freight transit.",
        explanation:
          "The text explicitly indicates that electricity consumption 'frequently nullifies' the emissions savings from reduced transport, so it does NOT always result in a net reduction.",
        cambridgeTip:
          "Watch out for 100% extreme qualifiers like 'always', 'invariably', or 'only' in IELTS reading statements. They are frequently FALSE or NOT GIVEN.",
      },
      {
        id: "r2-q2",
        type: "matching_heading",
        prompt: "Choose the heading that best captures the central conflict in Paragraph C:",
        options: [
          "The historical evolution of hydroponic nutrient solutions",
          "Resource efficiencies tempered by severe energy expenditures",
          "Why traditional agriculture remains financially superior in all metrics",
          "Government subsidies for metropolitan greenhouse installations",
        ],
        correctAnswer: "Resource efficiencies tempered by severe energy expenditures",
        proofQuote:
          "Controlled Environment Agriculture facilities recycle up to 95 percent less water... However, environmental economists urge caution regarding the sector's energy balance.",
        explanation:
          "The first half highlights water savings (95%) and weather resilience, while the second half highlights the massive LED electrical consumption.",
        cambridgeTip:
          "Transition words like 'However', 'Nevertheless', or 'Conversely' signal that the paragraph presents a nuanced or divided perspective.",
      },
      {
        id: "r2-q3",
        type: "sentence_completion",
        prompt:
          "Complete the summary below. Choose NO MORE THAN TWO WORDS from the text:\n\nIndoor farming relies on enclosed systems that recycle moisture and keep yields immune to ______________.",
        correctAnswer: "meteorological disruptions",
        acceptableAnswers: ["meteorological disruptions"],
        proofQuote:
          "Furthermore, by stacking growth trays inside insulated urban facilities, year-round harvests become decoupled from seasonal meteorological disruptions.",
        explanation:
          "'Decoupled from' is paraphrased as 'immune to'. The text uses the exact phrase 'meteorological disruptions'.",
        cambridgeTip:
          "Look for synonyms between the prompt and the passage. Here 'decoupled from' = 'immune to', and 'seasonal' points directly to the noun phrase.",
      },
    ],
  },
  {
    id: "reading-3",
    title: "Cetacean Intelligence & Marine Acoustic Communication",
    paragraphLabel: "Passage 3 — Paragraph D",
    source: {
      book: 18,
      test: 4,
      section: 3,
      title: "Vocal Dialects of Orca Populations",
    },
    difficulty: "Band 8.0-9.0",
    wordCount: 182,
    paragraphText:
      "Acoustic telemetry reveals that distinct killer whale (Orcinus orca) pods possess unique vocal repertoires, effectively functioning as cultural dialects. These acoustical signatures are not genetically predetermined; rather, young calves acquire them through protracted social learning and vocal imitation of matrilineal elders over several years. Researchers have observed that pods sharing overlapping geographical ranges but belonging to distinct acoustic clans strictly refrain from interbreeding. This behavioral segregation suggests that dialect acts as an auditory boundary, maintaining cultural and social lineage. Anthropologists note that this form of vocal transmission mirrors non-human linguistic culture, defying previous assumptions that dialect divergence was unique to hominid societies.",
    questions: [
      {
        id: "r3-q1",
        type: "tfng",
        prompt:
          "The acoustic calls of young orcas are inherited entirely through biological genetics.",
        correctAnswer: "FALSE",
        proofQuote:
          "These acoustical signatures are not genetically predetermined; rather, young calves acquire them through protracted social learning and vocal imitation of matrilineal elders...",
        explanation:
          "The passage explicitly states they are 'not genetically predetermined' and instead learned socially.",
        cambridgeTip:
          "Clear contradiction: 'inherited entirely through biological genetics' vs 'not genetically predetermined'. Choose FALSE.",
      },
      {
        id: "r3-q2",
        type: "tfng",
        prompt:
          "Orcas belonging to clans with identical dialects frequently mate with members of unfamiliar pods.",
        correctAnswer: "NOT GIVEN",
        proofQuote:
          "Researchers have observed that pods sharing overlapping geographical ranges but belonging to distinct acoustic clans strictly refrain from interbreeding.",
        explanation:
          "The text says distinct clans refrain from interbreeding, but it never mentions whether pods with identical dialects mate with unfamiliar pods. There is no information provided on this specific situation.",
        cambridgeTip:
          "NOT GIVEN does not mean the topic is absent; it means the specific relationship or claim made in the prompt cannot be proven or disproven by the passage.",
      },
      {
        id: "r3-q3",
        type: "sentence_completion",
        prompt:
          "Complete the sentence below. Choose NO MORE THAN TWO WORDS from the passage:\n\nScientists observed that juvenile whales master complex pod calls through prolonged ______________ from senior females.",
        correctAnswer: "social learning",
        acceptableAnswers: ["social learning", "vocal imitation"],
        proofQuote:
          "rather, young calves acquire them through protracted social learning and vocal imitation of matrilineal elders over several years.",
        explanation:
          "'Juvenile whales' corresponds to 'young calves', 'prolonged' matches 'protracted', and 'senior females' matches 'matrilineal elders'. Either 'social learning' or 'vocal imitation' is correct.",
        cambridgeTip:
          "When two parallel nouns exist ('social learning and vocal imitation'), Cambridge scoring guidelines accept either accurate chunk.",
      },
    ],
  },
];
