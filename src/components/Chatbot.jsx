import { useState, useRef, useEffect } from "react";

/* ========================================
   NATYASHRI KNOWLEDGE BASE
   Every entry: id, keywords (for matching),
   and answer (what the bot replies).
   Add / edit entries here as the business
   info changes — no other code needs to change.
======================================== */

const KNOWLEDGE_BASE = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "namaste", "namaskar", "good morning", "good afternoon", "good evening"],
    answer:
      "Namaste 🙏 Welcome to NatyaShri School of Performing Arts! I can help you with courses, fees, batch timings, admissions, our Guru, or our branch addresses. What would you like to know?",
  },
  {
    id: "thanks",
    keywords: ["thank", "thanks", "thank you", "thankyou", "ok thanks", "great"],
    answer:
      "You're most welcome! 🙏 Feel free to ask anything else, or reach us directly on WhatsApp at +91 91728 90424.",
  },
  {
    id: "bye",
    keywords: ["bye", "goodbye", "see you", "ok bye"],
    answer:
      "Dhanyawad for visiting NatyaShri! Have a wonderful day. 🙏 You can always come back here with more questions.",
  },
  {
    id: "courses",
    keywords: ["course", "courses", "classes offered", "what do you teach", "subjects", "programs", "programmes"],
    answer:
      "NatyaShri offers:\n• Bharatanatyam (Tanjore Bani)\n• Nattuvangam\n• Prarambhik to Alankar Poorna exam coaching\n• Margam Training\n• Teacher Training\n• Choreography Training\n• Theory Classes\n• One-to-One & Group Training\n• Online & Offline Classes\n• Certification Courses (Bridge Academy)\n\nWant details on any of these?",
  },
  {
    id: "bharatanatyam",
    keywords: ["bharatanatyam", "tanjore", "tanjore bani", "classical dance"],
    answer:
      "We teach Bharatanatyam in the Tanjore Bani style — covering practical dance, theory, rhythm (laya), expression (abhinaya) and stage performance, from beginner level right up to Alankar and Margam.",
  },
  {
    id: "nattuvangam",
    keywords: ["nattuvangam", "nattuvanar"],
    answer:
      "Yes, we offer Nattuvangam training, including a dedicated Nattuvangam Basic Batch for students who want to learn the rhythmic conducting art alongside their dance training.",
  },
  {
    id: "margam",
    keywords: ["margam"],
    answer:
      "We offer full Margam Training, plus a Weekend Margam Batch for students who prefer weekend-only sessions.",
  },
  {
    id: "teacher-training",
    keywords: ["teacher training", "become a teacher", "train to teach", "instructor course"],
    answer:
      "We run a dedicated Teacher Training batch for students who wish to eventually teach Bharatanatyam themselves, alongside choreography training.",
  },
  {
    id: "choreography",
    keywords: ["choreography", "choreograph"],
    answer:
      "Choreography training is offered as part of our advanced program — ideal for students preparing for stage performances or working toward teaching/certification.",
  },
  {
    id: "exam-boards",
    keywords: ["exam", "examination", "board", "certificate exam", "gandharva", "suro bharati", "bridge academy"],
    answer:
      "We coach students for examinations affiliated with:\n• Akhil Bhartiya Gandharva Mahavidyalaya Mandal, Mumbai\n• Suro Bharati, Kolkata\n• Bridge Academy, Chennai\n\nWe also offer certification courses from Bridge Academy.",
  },
  {
    id: "age-group",
    keywords: ["age", "age group", "how old", "kids", "children", "adults", "housewife", "working professional"],
    answer:
      "Students of all ages are welcome:\n• Children (5+ years)\n• Teenagers\n• Adults\n• Housewives\n• Working Professionals\n\nThere's a batch suited to every age group and schedule.",
  },
  {
    id: "batches",
    keywords: ["batch", "batches", "level", "beginner", "intermediate", "advanced", "alankar"],
    answer:
      "Our batches:\n• Beginner\n• Intermediate\n• Advanced\n• Alankar Special Batch\n• Weekend Margam Batch\n• Teacher Training Batch\n• Nattuvangam Basic Batch\n\nClasses are conducted in English, Marathi, Hindi and Kannada based on preference.",
  },
  {
    id: "language",
    keywords: ["language", "marathi", "hindi", "kannada", "english medium"],
    answer:
      "Classes can be conducted in English, Marathi, Hindi, or Kannada — whichever you're most comfortable with.",
  },
  {
    id: "mode",
    keywords: ["online", "offline", "online classes", "offline classes", "in person", "virtual class"],
    answer:
      "Both Online and Offline classes are available. Online classes let you train from anywhere; offline classes run at our Solapur branches. Contact us at +91 91728 90424 to check current batch timings for your preferred mode.",
  },
  {
    id: "fees",
    keywords: ["fee", "fees", "price", "cost", "charges", "how much"],
    answer:
      "Fees vary by course, batch and mode (online/offline), so the most accurate figure comes directly from us. Please contact +91 91728 90424 or email natyashrischoolofdance@gmail.com for current fee details.",
  },
  {
    id: "admission",
    keywords: ["admission", "admit", "join", "enroll", "enrol", "register", "how to join", "sign up"],
    answer:
      "You can join NatyaShri by contacting us directly on WhatsApp/Call at +91 91728 90424 or emailing natyashrischoolofdance@gmail.com. We'll help you pick the right batch based on your age, level and schedule.",
  },
  {
    id: "guru",
    keywords: ["guru", "teacher name", "veenashri", "who teaches", "founder", "principal"],
    answer:
      "NatyaShri is led by Guru Veenashri Vijaykumar Alange, a Bharatanatyam performer, choreographer and teacher trained in the Tanjore Bani, dedicated to teaching dance, theory, rhythm, expression and stage performance. Our offline classes are also taught by Darshana Kirangi.",
  },
  {
    id: "offline-teacher",
    keywords: ["darshana", "offline teacher", "other teacher"],
    answer:
      "Our offline batches are taught by Darshana Kirangi, alongside Guru Veenashri Vijaykumar Alange, who leads the online classes.",
  },
  {
    id: "quote",
    keywords: ["quote", "philosophy", "meaning", "tagline"],
    answer:
      "Our guiding philosophy: \"नृत्याधीनं जगत्सर्वम्\" — \"The entire universe is governed by dance.\"",
  },
  {
    id: "contact",
    keywords: ["contact", "phone", "number", "whatsapp", "call", "mobile"],
    answer:
      "You can reach NatyaShri at 📞 +91 91728 90424 (Call/WhatsApp) or 📧 natyashrischoolofdance@gmail.com.",
  },
  {
    id: "email",
    keywords: ["email", "mail id", "e-mail"],
    answer:
      "Our email is natyashrischoolofdance@gmail.com — feel free to write to us with any questions.",
  },
  {
    id: "address",
    keywords: ["address", "location", "where are you", "branch", "map", "directions"],
    answer:
      "We have two branches in Solapur:\n\n📍 Branch 1: 28 L, Sindhu Vihar, Mule, Solapur, near Celebration Hotel\n\n📍 Branch 2: Ajit Kasturkar Building, Kasar Society, Near Old IMS College, Solapur, Maharashtra\n\nLet me know if you'd like directions to a specific branch.",
  },
  {
    id: "timing",
    keywords: ["timing", "timings", "schedule", "time", "when are classes"],
    answer:
      "Class timings depend on the batch and mode you choose. Please contact +91 91728 90424 for the current timetable that fits your schedule.",
  },
];

const FALLBACK_ANSWER =
  "I don't have an exact answer for that yet. For the most accurate information, please contact NatyaShri directly at +91 91728 90424 or natyashrischoolofdance@gmail.com — Guru Veenashri and team will be happy to help!";

const QUICK_REPLIES = ["Courses", "Fees", "Batch timings", "Admission", "Address"];

/* ========================================
   INTENT MATCHING
   Scores every knowledge-base entry by how
   many of its keywords appear in the user's
   message, and returns the best match.
======================================== */

function findAnswer(userMessage) {
  const text = userMessage.toLowerCase().trim();

  let bestMatch = null;
  let bestScore = 0;

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;

    for (const keyword of entry.keywords) {
      if (text.includes(keyword)) {
        // Longer / multi-word keywords are more specific — weight them higher
        score += keyword.split(" ").length;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestMatch ? bestMatch.answer : FALLBACK_ANSWER;
}

/* ========================================
   CHATBOT COMPONENT
======================================== */

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "bot",
      text:
        "Namaste! 🙏 I'm the NatyaShri Assistant. Ask me about our courses, fees, batches, timings, or Guru Veenashri — or tap a topic below.",
    },
  ]);

  const bodyRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setMessage("");
    setIsTyping(true);

    // Small delay to feel conversational rather than instant/robotic
    window.setTimeout(() => {
      const answer = findAnswer(trimmed);

      setMessages((prev) => [
        ...prev,
        { id: `b-${Date.now()}`, sender: "bot", text: answer },
      ]);
      setIsTyping(false);
    }, 550);
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(message);
  }

  function handleQuickReply(topic) {
    sendMessage(topic);
  }

  return (
    <>
      {/* Chatbot Button */}
      <button
        className="chatbot-floating"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close NatyaShri AI Assistant" : "Open NatyaShri AI Assistant"}
      >
        {isOpen ? "×" : "💬"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window" role="dialog" aria-label="NatyaShri AI Assistant">
          <div className="chatbot-header">
            <div>
              <strong>NatyaShri AI Assistant</strong>
              <span>Ask about courses, fees & more</span>
            </div>

            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="chatbot-body" ref={bodyRef}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chatbot-message ${msg.sender === "user" ? "user" : "bot"}`}
              >
                {msg.text.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < msg.text.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
            ))}

            {isTyping && (
              <div className="chatbot-message bot chatbot-typing" aria-live="polite">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
            )}

            {messages.length === 1 && !isTyping && (
              <div className="chatbot-quick-replies">
                {QUICK_REPLIES.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    className="chatbot-chip"
                    onClick={() => handleQuickReply(topic)}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form className="chatbot-input" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ask about courses, fees, timings..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              aria-label="Type your question"
            />

            <button type="submit" aria-label="Send message" disabled={!message.trim()}>
              →
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Chatbot;
