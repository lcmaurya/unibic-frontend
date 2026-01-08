const mockDeal = {
  id: "deal_001",
  status: "open",
  summary: {
  trustScore: 82,
    title: "Active Deal",
    role: "You are Client",
  },
  messages: [
    {
      id: "m1",
      sender: "client",
      text: "Hi, need help",
    },
    {
      id: "m2",
      sender: "provider",
      text: "Sure",
    },
  ],
};

export default mockDeal;
