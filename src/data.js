import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    data: [
      {
        _id: uuidv4(),
        title: "Sometimes life is scary and dark",
        priority: "High",
        date: "2023/01/01",
        issue: "to_do",
      },
      {
        _id: uuidv4(),
        title:
          "People make mistakes. It's all a part of growing up and you never really stop growing",
        priority: "Meduim",
        date: "2023/01/12",
        issue: "in_progress",
      },
      {
        _id: uuidv4(),
        title: "You got to focus on what's real, man",
        priority: "Low",
        date: "2022/01/12",
        issue: "code_review",
      },
      {
        _id: uuidv4(),
        title: "You always pass failure on the way to success",
        priority: "Meduim",
        date: "2022/02/12",
        issue: "code_qa",
      },
      {
        _id: uuidv4(),
        title: "You are never too old to set another goal or dream a new dream",
        priority: "Low",
        date: "2022/02/14",
        issue: "done",
      },
      {
        _id: uuidv4(),
        title: "I will always find a way and a way will always find me",
        priority: "Meduim",
        date: "2022/02/28",
        issue: "code_qa",
      },
      {
        _id: uuidv4(),
        title:
          "They may forget what you said, but they will never forget how you made them feel",
        priority: "High",
        date: "2022/03/28",
        issue: "to_do",
      },
      {
        _id: uuidv4(),
        title:
          "It’s not what we have in life, but who we have in our life that matters",
        priority: "Low",
        date: "2022/03/17",
        issue: "code_qa",
      },
      {
        _id: uuidv4(),
        title:
          "Find a group of people who challenge and inspire you; spend a lot of time with them, and it will change your life",
        priority: "Meduim",
        date: "2022/04/7",
        issue: "to_do",
      },
      {
        _id: uuidv4(),
        title:
          "To the world you may be just one person, but to one person you may be the world",
        priority: "High",
        date: "2022/04/26",
        issue: "in_progress",
      },
      {
        _id: uuidv4(),
        title: "Distance means so little, when someone means so much",
        priority: "High",
        date: "2022/05/6",
        issue: "code_review",
      },
      {
        _id: uuidv4(),
        title: "You cannot have a positive life with a negative mind",
        priority: "High",
        date: "2022/06/12",
        issue: "done",
      },
      {
        _id: uuidv4(),
        title: "We lost because we told ourselves we lost",
        priority: "Low",
        date: "2022/06/5",
        issue: "in_progress",
      },
      {
        _id: uuidv4(),
        title:
          "If you're not prepared to be wrong, you'll never come up with anything original",
        priority: "Meduim",
        date: "2022/07/3",
        issue: "code_review",
      },
      {
        _id: uuidv4(),
        title: "Giving up is the only sure way to fail",
        priority: "Meduim",
        date: "2022/07/29",
        issue: "code_qa",
      },
    ],
    title: "To do",
  },
  {
    id: uuidv4(),
    title: "In Progress",
    data: [
      {
        _id: uuidv4(),
        title:
          "It is the true nature of mankind to learn from mistakes, not from example",
        priority: "Low",
        date: "2022/11/11",
        issue: "in_progress",
      },
      {
        _id: uuidv4(),
        title:
          "The past can hurt. But the way I see it, you can either run from it, or learn from it",
        priority: "High",
        date: "2022/06/12",
        issue: "in_progress",
      },
      {
        _id: uuidv4(),
        title:
          "In love, the deeper you fall the higher you rise. If you are not growing, blame your decision, not the philosophy of love",
        priority: "Meduim",
        date: "2022/12/17",
        issue: "in_progress",
      },
      {
        _id: uuidv4(),
        title:
          "Look for a partner who makes you fall in heaven, not a hell of loneliness",
        priority: "Meduim",
        date: "2022/12/31",
        issue: "to_do",
      },
      {
        _id: uuidv4(),
        title:
          "Don’t be afraid to start over. Every beginning is a new opportunity to create what you really want",
        priority: "Low",
        date: "2023/12/30",
        issue: "code_review",
      },
      {
        _id: uuidv4(),
        title:
          "Learn the art of letting go of your past and living for what life is offering now",
        priority: "High",
        date: "2023/11/18",
        issue: "code_qa",
      },
      {
        _id: uuidv4(),
        title:
          "Never allow someone to be your priority while allowing yourself to be their option",
        priority: "Low",
        date: "2023/11/6",
        issue: "in_progress",
      },
      {
        _id: uuidv4(),
        title: "Never put your happiness in someone else’s hands",
        priority: "Meduim",
        date: "2023/10/4",
        issue: "in_progress",
      },
      {
        _id: uuidv4(),
        title:
          "Sometimes you have to get hurt and feel the pain to know what true happiness is",
        priority: "Low",
        date: "2023/10/22",
        issue: "code_qa",
      },
      {
        _id: uuidv4(),
        title: "Don’t cry because it is over, smile because it happened",
        priority: "High",
        date: "2023/09/15",
        issue: "done",
      },
      {
        _id: uuidv4(),
        title: "Don’t fear to say goodbye, because you can say new hellos",
        priority: "Low",
        date: "2023/09/25",
        issue: "to_do",
      },
      {
        _id: uuidv4(),
        title:
          "Don’t waste your time looking back at what you lost. Move on, life is not meant to be traveled backward",
        priority: "High",
        date: "2023/08/17",
        issue: "in_progress",
      },
      {
        _id: uuidv4(),
        title: "Every breakup is an opportunity to do it right the next time",
        priority: "Meduim",
        date: "2023/08/1",
        issue: "code_review",
      },
      {
        _id: uuidv4(),
        title:
          "Relationships are like glass. Sometimes it’s better to leave them broken than try to hurt yourself putting it back together",
        priority: "High",
        date: "2023/07/2",
        issue: "code_qa",
      },
      {
        _id: uuidv4(),
        title: "It’s better to be with no one than to be with the wrong one",
        priority: "High",
        date: "2023/07/14",
        issue: "in_progress",
      },
      {
        _id: uuidv4(),
        title: "Inhale the lesson, exhale failure",
        priority: "Meduim",
        date: "2023/06/18",
        issue: "in_progress",
      },
      {
        _id: uuidv4(),
        title:
          "Unfortunately, you can’t stop people from leaving but you can change your perspective",
        priority: "Low",
        date: "2023/06/30",
        issue: "to_do",
      },
      {
        _id: uuidv4(),
        title:
          "Never let success get to your head, and never let failure get to your heart",
        priority: "High",
        date: "2023/05/8",
        issue: "in_progress",
      },
      {
        _id: uuidv4(),
        title:
          "Pain makes you stronger, fear makes you courageous, love failure makes you wiser",
        priority: "Meduim",
        date: "2023/04/19",
        issue: "code_review",
      },
      {
        _id: uuidv4(),
        title: "Where there is a ruin, there is hope for treasure",
        priority: "Meduim",
        date: "2023/04/19",
        issue: "code_review",
      },
      {
        _id: uuidv4(),
        title: "I will always find a way and a way will always find me",
        priority: "Low",
        date: "2022/03/29",
        issue: "code_qa",
      },
      {
        _id: uuidv4(),
        title:
          "They may forget what you said, but they will never forget how you made them feel",
        priority: "High",
        date: "2022/03/28",
        issue: "to_do",
      },
      {
        _id: uuidv4(),
        title:
          "It’s not what we have in life, but who we have in our life that matters",
        priority: "Low",
        date: "2022/03/17",
        issue: "code_qa",
      },
      {
        _id: uuidv4(),
        title:
          "Find a group of people who challenge and inspire you; spend a lot of time with them, and it will change your life",
        priority: "Meduim",
        date: "2022/04/7",
        issue: "to_do",
      },
      {
        _id: uuidv4(),
        title:
          "To the world you may be just one person, but to one person you may be the world",
        priority: "High",
        date: "2022/04/26",
        issue: "in_progress",
      },
      {
        _id: uuidv4(),
        title: "Distance means so little, when someone means so much",
        priority: "High",
        date: "2022/05/6",
        issue: "code_review",
      },
      {
        _id: uuidv4(),
        title: "You cannot have a positive life with a negative mind",
        priority: "High",
        date: "2022/06/12",
        issue: "done",
      },
      {
        _id: uuidv4(),
        title: "We lost because we told ourselves we lost",
        priority: "Low",
        date: "2022/06/5",
        issue: "in_progress",
      },
      {
        _id: uuidv4(),
        title:
          "If you're not prepared to be wrong, you'll never come up with anything original",
        priority: "Meduim",
        date: "2022/07/3",
        issue: "code_review",
      },
      {
        _id: uuidv4(),
        title: "Giving up is the only sure way to fail",
        priority: "Meduim",
        date: "2022/07/29",
        issue: "code_qa",
      },
    ],
  },
  {
    id: uuidv4(),
    data: [
      {
        _id: uuidv4(),
        title: "Fear kills more dreams than failure ever will",
        priority: "Meduim",
        date: "2022/10/31",
        issue: "code_review",
      },
      {
        _id: uuidv4(),
        title: "Failure is success in progress",
        priority: "Low",
        date: "2022/10/31",
        issue: "code_review",
      },
      {
        _id: uuidv4(),
        title:
          "The past can hurt. But the way I see it, you can either run from it, or learn from it",
        priority: "High",
        date: "2022/11/21",
        issue: "code_review",
      },
    ],
    title: "Code Review",
  },
  {
    id: uuidv4(),
    data: [
      {
        _id: uuidv4(),
        title: "Pain is temporary. Quitting lasts forever",
        priority: "High",
        date: "2022/08/11",
        issue: "code_qa",
      },
      {
        _id: uuidv4(),
        title:
          "When you take risks, you learn that there will be times when you succeed, and there will be times when you fail, and both are equally important",
        priority: "Meduim",
        date: "2022/08/17",
        issue: "code_qa",
      },
      {
        _id: uuidv4(),
        title:
          "Our greatest glory is not in never failing, but in rising every time we fail",
        priority: "Low",
        date: "2022/09/3",
        issue: "code_qa",
      },
      {
        _id: uuidv4(),
        title:
          "It's fine to celebrate success but it is more important to heed the lessons of failure",
        priority: "Low",
        date: "2022/09/14",
        issue: "done",
      },
      {
        _id: uuidv4(),
        title: "There is no innovation and creativity without failure Period",
        priority: "Meduim",
        date: "2022/10/10",
        issue: "code_review",
      },
      {
        _id: uuidv4(),
        title:
          "There are no failures–just experiences and your reactions to them",
        priority: "High",
        date: "2022/10/25",
        issue: "to_do",
      },
      {
        _id: uuidv4(),
        title: "Only those who dare to fail greatly can ever achieve greatly",
        priority: "Meduim",
        date: "2022/11/19",
        issue: "code_qa",
      },
      {
        _id: uuidv4(),
        title: "Try again. Fail again. Fail better",
        priority: "Meduim",
        date: "2022/11/30",
        issue: "in_progress",
      },
    ],
    title: "In Qa",
  },
  {
    id: uuidv4(),
    data: [
      {
        _id: uuidv4(),
        title:
          "Success is stumbling from failure to failure with no loss of enthusiasm",
        priority: "High",
        date: "2023/06/12",
        issue: "done",
      },
    ],
    title: "Done",
  },
];

export default data;
