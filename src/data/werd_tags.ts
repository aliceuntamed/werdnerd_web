import { TAGS } from "./tags";

// Interface for the relationship between words and tags
interface WerdTag {
  wt_id: string;
  werd_id: string;
  tag_id: string;
}

// Clean word-tag relationships - this is the proper way to link words to multiple tags
// Each word can have multiple entries, each linking to a different tag
export const WERD_TAGS: WerdTag[] = [
  // abience - psychology
  {
    wt_id: "wt-001",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e01",
    tag_id: "l3j7m1h0-2k5i-3l0j-6m1k-1i4j9l6h2k5l",
  },

  // absquatulate - slang, humorous
  {
    wt_id: "wt-002",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e02",
    tag_id: "h9f3i7d6-8g1e-9h6f-2i7g-7e0f5h2d8g1h",
  },
  {
    wt_id: "wt-003",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e02",
    tag_id: "f7d1g5b4-6e9c-7f4d-0g5e-5c8d3f0b6e9f",
  },

  // accoutrement - general
  {
    wt_id: "wt-004",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e03",
    tag_id: "019ccc43-46f5-73ea-ae13-5177ce0424a6",
  },

  // acosmist - philosophical, obscure
  {
    wt_id: "wt-005",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e04",
    tag_id: "b3f5c7a1-9d2e-4f8b-9c3a-7e5d1f9a3b6c",
  },
  {
    wt_id: "wt-006",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e04",
    tag_id: "c4a8d2e9-3b6f-4e1c-8d7a-2f5b9e3c1a8d",
  },

  // acrophobia - psychology, phobia
  {
    wt_id: "wt-007",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e05",
    tag_id: "l3j7m1h0-2k5i-3l0j-6m1k-1i4j9l6h2k5l",
  },
  {
    wt_id: "wt-008",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e05",
    tag_id: "j1h5k9f8-0i3g-1j8h-4k9i-9g2h7j4f0i3j",
  },

  // acta, non verba - translations
  {
    wt_id: "wt-009",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e06",
    tag_id: "i0g4j8e7-9h2f-0i7g-3j8h-8f1g6i3e9h2i",
  },

  // aerumnous - translations, obsolete
  {
    wt_id: "wt-010",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e07",
    tag_id: "i0g4j8e7-9h2f-0i7g-3j8h-8f1g6i3e9h2i",
  },
  {
    wt_id: "wt-011",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e07",
    tag_id: "m4k8n2i1-3l6j-4m1k-7n2l-2j5k0m7i3l6m",
  },

  // agathokakological - philosophical, obscure
  {
    wt_id: "wt-012",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e08",
    tag_id: "b3f5c7a1-9d2e-4f8b-9c3a-7e5d1f9a3b6c",
  },
  {
    wt_id: "wt-013",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e08",
    tag_id: "c4a8d2e9-3b6f-4e1c-8d7a-2f5b9e3c1a8d",
  },

  // agoraphobia - psychology, phobia
  {
    wt_id: "wt-014",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e09",
    tag_id: "l3j7m1h0-2k5i-3l0j-6m1k-1i4j9l6h2k5l",
  },
  {
    wt_id: "wt-015",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e09",
    tag_id: "j1h5k9f8-0i3g-1j8h-4k9i-9g2h7j4f0i3j",
  },

  // akrasia - philosophical, psychology, obscure
  {
    wt_id: "wt-016",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e10",
    tag_id: "b3f5c7a1-9d2e-4f8b-9c3a-7e5d1f9a3b6c",
  },
  {
    wt_id: "wt-017",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e10",
    tag_id: "l3j7m1h0-2k5i-3l0j-6m1k-1i4j9l6h2k5l",
  },
  {
    wt_id: "wt-018",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e10",
    tag_id: "c4a8d2e9-3b6f-4e1c-8d7a-2f5b9e3c1a8d",
  },

  // allodoxaphobia - psychology, phobia
  {
    wt_id: "wt-019",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e11",
    tag_id: "l3j7m1h0-2k5i-3l0j-6m1k-1i4j9l6h2k5l",
  },
  {
    wt_id: "wt-020",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e11",
    tag_id: "j1h5k9f8-0i3g-1j8h-4k9i-9g2h7j4f0i3j",
  },

  // allure - romantic
  {
    wt_id: "wt-021",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e12",
    tag_id: "e6c0f4a3-5d8b-6e3c-9f4d-4b7c2e9a5d8e",
  },

  // anatidaephobia - psychology, humorous
  {
    wt_id: "wt-022",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e13",
    tag_id: "l3j7m1h0-2k5i-3l0j-6m1k-1i4j9l6h2k5l",
  },
  {
    wt_id: "wt-023",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e13",
    tag_id: "f7d1g5b4-6e9c-7f4d-0g5e-5c8d3f0b6e9f",
  },

  // anaxiphilia - romantic, obscure
  {
    wt_id: "wt-024",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e14",
    tag_id: "e6c0f4a3-5d8b-6e3c-9f4d-4b7c2e9a5d8e",
  },
  {
    wt_id: "wt-025",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e14",
    tag_id: "c4a8d2e9-3b6f-4e1c-8d7a-2f5b9e3c1a8d",
  },

  // anhedonia - psychology
  {
    wt_id: "wt-026",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e15",
    tag_id: "l3j7m1h0-2k5i-3l0j-6m1k-1i4j9l6h2k5l",
  },

  // anuptaphobia - psychology, phobia
  {
    wt_id: "wt-027",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e16",
    tag_id: "l3j7m1h0-2k5i-3l0j-6m1k-1i4j9l6h2k5l",
  },
  {
    wt_id: "wt-028",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e16",
    tag_id: "j1h5k9f8-0i3g-1j8h-4k9i-9g2h7j4f0i3j",
  },

  // apiphobia - psychology, phobia
  {
    wt_id: "wt-029",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e17",
    tag_id: "l3j7m1h0-2k5i-3l0j-6m1k-1i4j9l6h2k5l",
  },
  {
    wt_id: "wt-030",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e17",
    tag_id: "j1h5k9f8-0i3g-1j8h-4k9i-9g2h7j4f0i3j",
  },

  // arcane - obscure
  {
    wt_id: "wt-031",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e18",
    tag_id: "c4a8d2e9-3b6f-4e1c-8d7a-2f5b9e3c1a8d",
  },

  // ataraxia - philosophical, obscure
  {
    wt_id: "wt-032",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e19",
    tag_id: "b3f5c7a1-9d2e-4f8b-9c3a-7e5d1f9a3b6c",
  },
  {
    wt_id: "wt-033",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e19",
    tag_id: "c4a8d2e9-3b6f-4e1c-8d7a-2f5b9e3c1a8d",
  },

  // atelophobia - psychology, phobia
  {
    wt_id: "wt-034",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e20",
    tag_id: "l3j7m1h0-2k5i-3l0j-6m1k-1i4j9l6h2k5l",
  },
  {
    wt_id: "wt-035",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e20",
    tag_id: "j1h5k9f8-0i3g-1j8h-4k9i-9g2h7j4f0i3j",
  },

  // athazagoraphobia - psychology, phobia
  {
    wt_id: "wt-036",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e21",
    tag_id: "l3j7m1h0-2k5i-3l0j-6m1k-1i4j9l6h2k5l",
  },
  {
    wt_id: "wt-037",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e21",
    tag_id: "j1h5k9f8-0i3g-1j8h-4k9i-9g2h7j4f0i3j",
  },

  // autodidact - general
  {
    wt_id: "wt-038",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e22",
    tag_id: "019ccc43-46f5-73ea-ae13-5177ce0424a6",
  },

  // balter - humorous, obscure
  {
    wt_id: "wt-039",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e23",
    tag_id: "f7d1g5b4-6e9c-7f4d-0g5e-5c8d3f0b6e9f",
  },
  {
    wt_id: "wt-040",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e23",
    tag_id: "c4a8d2e9-3b6f-4e1c-8d7a-2f5b9e3c1a8d",
  },

  // banal - general
  {
    wt_id: "wt-041",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e24",
    tag_id: "019ccc43-46f5-73ea-ae13-5177ce0424a6",
  },

  // Bibliophile - psychology, general
  {
    wt_id: "wt-042",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e25",
    tag_id: "l3j7m1h0-2k5i-3l0j-6m1k-1i4j9l6h2k5l",
  },
  {
    wt_id: "wt-043",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e25",
    tag_id: "019ccc43-46f5-73ea-ae13-5177ce0424a6",
  },

  // billet-doux - translations, romantic
  {
    wt_id: "wt-044",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e26",
    tag_id: "i0g4j8e7-9h2f-0i7g-3j8h-8f1g6i3e9h2i",
  },
  {
    wt_id: "wt-045",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e26",
    tag_id: "e6c0f4a3-5d8b-6e3c-9f4d-4b7c2e9a5d8e",
  },

  // cacoethes - psychology, obscure
  {
    wt_id: "wt-046",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e27",
    tag_id: "l3j7m1h0-2k5i-3l0j-6m1k-1i4j9l6h2k5l",
  },
  {
    wt_id: "wt-047",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e27",
    tag_id: "c4a8d2e9-3b6f-4e1c-8d7a-2f5b9e3c1a8d",
  },

  // callow - general
  {
    wt_id: "wt-048",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e28",
    tag_id: "019ccc43-46f5-73ea-ae13-5177ce0424a6",
  },

  // castigate - general
  {
    wt_id: "wt-049",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e29",
    tag_id: "019ccc43-46f5-73ea-ae13-5177ce0424a6",
  },

  // catharsis - psychology
  {
    wt_id: "wt-050",
    werd_id: "52fd2e50-1aab-11f1-a702-7f252db467e30",
    tag_id: "l3j7m1h0-2k5i-3l0j-6m1k-1i4j9l6h2k5l",
  },
];

// Helper functions for working with word-tag relationships
export const getTagsForWerd = (werdId: string): WerdTag[] => {
  return WERD_TAGS.filter((wt) => wt.werd_id === werdId);
};

export const getWerdsForTag = (tagId: string): WerdTag[] => {
  return WERD_TAGS.filter((wt) => wt.tag_id === tagId);
};

export const getTagNamesForWerd = (werdId: string): string[] => {
  const wordTags = getTagsForWerd(werdId);
  return wordTags.map((wt) => {
    const tag = TAGS.find((t) => t.tag_id === wt.tag_id);
    return tag?.tag || "unknown";
  });
};
