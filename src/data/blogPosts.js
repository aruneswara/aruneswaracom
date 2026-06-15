import { findBlogById, getBlogCategories } from "./blogUtils.js";

const blogPosts = [
  {
    "_id": "you-re-the-problem",
    "slug": "you-re-the-problem",
    "title": "you're the problem",
    "description": "in middle school, and for a short time in high school, i did public forum and lincoln douglas debate (albeit not very well).",
    "date": "2025-07-31T20:24:14.032Z",
    "updatedAt": "2025-07-31T22:05:56.345Z",
    "category": [
      "Writing",
      "Communication"
    ],
    "readTime": "3 min read",
    "sourceUrl": "https://www.aruneswara.com/post/you-re-the-problem",
    "image": null,
    "author": {
      "name": "Arun Eswara",
      "title": "Software Engineer"
    },
    "content": [
      {
        "type": "paragraph",
        "text": "in middle school, and for a short time in high school, i did public forum and lincoln douglas debate (albeit not very well)."
      },
      {
        "type": "paragraph",
        "text": "there were two kinds of judges - “flow” and “lay”."
      },
      {
        "type": "paragraph",
        "text": "flow judges were those who understood the nuance of this debate form. competitive debate is weird - people talk fast, unnecessarily (in my opinion) opine about metaethics or other non-substantive positions, and generally make some fairly confusing arguments. flow judges understood this weirdness and evaluated it appropriately."
      },
      {
        "type": "paragraph",
        "text": "lay judges were the ones who dropped off their kid at the oratory competition next door and were doing this because they were forced to volunteer. usually they were somewhat attentive, but they lacked a meaningful understanding of the debate form. this meant they were easily swayed by smooth talking rather than the substance of each debater’s arguments."
      },
      {
        "type": "paragraph",
        "text": "it’s very frustrating as a debater to prepare for many months and create intricate arguments with whole books of responses for every conceivable counterargument, all to lose to someone who “spoke better” than you. lay judges were nearly unanimously disliked, and tournaments or circuits (e.g., NSDA) that promoted this form of speech-oriented debate were looked down upon."
      },
      {
        "type": "paragraph",
        "text": "there was an important moment for me after losing a debate in eighth grade because of a lay judge when i reevaluated my perspective on all of this. it was easy to get mad at these judges, but it was an inevitable obstacle in this competition. in fact, it was a fundamental part of the debate form - we weren’t really being evaluated on our ability to win each argument in a holistic sense, but in our ability to convince the judge of our position. this was an important perspective-shift - you work towards convincing a person, not winning an argument."
      },
      {
        "type": "paragraph",
        "text": "this perspective extends far past just competitive debate - every person you speak to about anything will have a different evaluative framework, and internalizing and shaping how you speak towards others’ frameworks is the only way to convince people of contentious things. for instance, if you’re a biologist explaining evolution to a child, you can’t start with carbon dating and the fossil record - you have to start at the level they understand. this gap in foundational understanding, the “ inferential distance ”, necessitates completely different framing when talking about evolution with a child as compared to a fellow biologist.",
        "links": [
          {
            "text": "inferential distance",
            "url": "https://www.lesswrong.com/w/inferential-distance"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "in life, there will always be lay judges. you’ll have to communicate with many people that don’t understand (or sometimes even care about) what you have to say. in fact, some people you have to contend with will be quite unsophisticated and ill-informed. it is in these case that it’s especially important that you deeply think about how you communicate. ideas aren’t evaluated in a vacuum; they’re filtered through your listener’s frame of understanding, sophistication, interest, and many other factors. and if your listener isn’t convinced by what you say, it isn’t their problem. it’s yours."
      }
    ]
  },
  {
    "_id": "there-s-no-such-thing-as-free-will",
    "slug": "there-s-no-such-thing-as-free-will",
    "title": "there's no such thing as free will",
    "description": "everything exists in the physical, or in some way supervenes on the physical. that is to say, even abstract things like ideas and dreams have a specific and unique dependency on something physical. for instance, two...",
    "date": "2025-07-27T05:18:57.966Z",
    "updatedAt": "2025-07-27T13:25:25.313Z",
    "category": [
      "Writing",
      "Philosophy"
    ],
    "readTime": "4 min read",
    "sourceUrl": "https://www.aruneswara.com/post/there-s-no-such-thing-as-free-will",
    "image": null,
    "author": {
      "name": "Arun Eswara",
      "title": "Software Engineer"
    },
    "content": [
      {
        "type": "paragraph",
        "text": "premise I: only matter exists (no God, soul, etc.)"
      },
      {
        "type": "paragraph",
        "text": "everything exists in the physical, or in some way supervenes on the physical. that is to say, even abstract things like ideas and dreams have a specific and unique dependency on something physical. for instance, two individuals with the exact same brain state will have the exact same thoughts, memories, emotions, etc. (this relationship is called ‘ supervenience ’)."
      },
      {
        "type": "paragraph",
        "text": "this premise (called ‘ physicalism ’) is not definitive, and even a strict but rational atheist would admit that there’s a non-zero chance that God or something else metaphysical exists. nevertheless, we can treat physicalism as a base truth until compelled to believe otherwise, given the burden of proof on metaphysical beliefs."
      },
      {
        "type": "paragraph",
        "text": "conclusion I: the brain acts in a purely physical manner"
      },
      {
        "type": "paragraph",
        "text": "implied by premise I. the brain is a physical system and, like all other physical systems, operates entirely according to physical principles, with no influence from metaphysical entities."
      },
      {
        "type": "paragraph",
        "text": "conclusion II: every event is either causal (deterministic) or random"
      },
      {
        "type": "paragraph",
        "text": "given premise I, we can decompose all matter into a finite set of known characteristics: position, movement, atomic composition, etc. also given premise I, we know that this set of “all matter” includes everything that has, can, and will exist. from this, you can imagine a universal state function that predicts the incremental state of all matter (and therefore, everything) after each infinitesimal tick of time. we can define an \"event\" as the change in the physical state of matter across each tick."
      },
      {
        "type": "paragraph",
        "text": "every event must satisfy one or both of these two conditions:"
      },
      {
        "type": "paragraph",
        "text": "1) the event is predictable, guided by known laws of the physical universe. for instance, when i throw a football, i can know with certainty where it will be in a second given enough information about its exact position, its velocity, the wind velocity, etc. and the laws of physics."
      },
      {
        "type": "paragraph",
        "text": "2) the event is random, such as quantum randomness like radioactive decay or photon behavior in the double-slit experiment. some scientists take this a step further and believe that synaptic transmission and ion channel activity in the brain may involve quantum randomness, potentially adding randomness to human behavior. while we can’t say with certainty this randomness exists (perhaps we simply haven’t figured out how to precisely model these events), we should reserve this possibility."
      },
      {
        "type": "paragraph",
        "text": "these two cases are mutually exclusive and completely exhaustive - every event, every movement of any atom in the universe across any period of time, is either fully deterministic, fully random, or some combination of the two. as a result, every event is caused exclusively by predictable preceding events and/or some randomness."
      },
      {
        "type": "paragraph",
        "text": "this argument is known as ‘ causal determinism ’ or ‘ strict determinism ’ (although sometimes these labels don’t include the randomness factor - the label that does is ‘ causal closure ’ or ‘ physical closure ’)."
      },
      {
        "type": "paragraph",
        "text": "conclusion III: every action of the brain is predictable or random"
      },
      {
        "type": "paragraph",
        "text": "apply conclusion II to conclusion I. given that the brain is purely physical, every event inside it is purely the predictable movement of atoms in a causal chain, imbued with some level of randomness. as a result, every action within the brain (every neuron firing, every release of hormones, etc.) is determined by prior states with some random influence."
      },
      {
        "type": "paragraph",
        "text": "an important implication of this conclusion is that there are only these two inputs (causal steps and randomness) that influence brain activity, without any room for a third category of “uncaused but willed” brain activity."
      },
      {
        "type": "paragraph",
        "text": "conclusion IV: there’s no room for an individual to have autonomous agency because every event is caused by prior states and/or randomness"
      },
      {
        "type": "paragraph",
        "text": "a necessary conclusion following conclusion III."
      },
      {
        "type": "paragraph",
        "text": "this one is the hardest to internalize - whether deterministic or indeterministic, the outcomes of brain processes are not the result of a self that can transcend physical law. The agent (the \"self\", or a conscious entity presumed to possess willful control over actions) is itself a product of prior physical events and cannot originate new causal chains ex nihilo (“out of nothing”). as a result, the self is simply a construction of previous states without any transcendent autonomous component. we lack the capacity to initiate actions independently of prior physical or random influences, to be the true originator of a causal chain."
      },
      {
        "type": "paragraph",
        "text": "another way of looking at this: at any given moment in time, before your body performs an action, your brain orders your body to perform this action by firing neurons accordingly. these neural events are triggered by perceptual stimuli (your environment) and your current brain state (memories, and other states in your brain, which were either developed over time, i.e., \"nurture,\" or existed since birth, i.e., \"nature\"). these two factors, your environment and the state of your brain, along with some randomness, are the only inputs that result in each neural action. there’s no room for agency - when decomposing the causal chain of events before every action you perform, every atom’s movement can be mapped to some prior state and/or a random event, preventing the interjection of any autonomy in the causal process."
      },
      {
        "type": "paragraph",
        "text": "conclusion V: there’s no such thing as free will"
      },
      {
        "type": "paragraph",
        "text": "implied by conclusion IV. agency is a necessary condition in achieving free will."
      }
    ]
  },
  {
    "_id": "ribbon",
    "slug": "ribbon",
    "title": "Ribbon: Transform Chrome into a seamless shortcut-based, mouse-less experience",
    "description": "Thanks for trying Ribbon! Ribbon is a Chrome extension that enables you to navigate Chrome without your mouse by adding overlayed keyboard shortcuts.",
    "date": "2024-05-16T19:41:18.455Z",
    "updatedAt": "2024-09-20T21:13:17.594Z",
    "category": [
      "Projects",
      "Engineering",
      "Product"
    ],
    "readTime": "2 min read",
    "sourceUrl": "https://www.aruneswara.com/post/ribbon",
    "image": "https://static.wixstatic.com/media/ae53c0_558557b69a584f6da41c13cf8ffdc4d8~mv2.png/v1/fill/w_1000,h_549,al_c,q_90,usm_0.66_1.00_0.01/ae53c0_558557b69a584f6da41c13cf8ffdc4d8~mv2.png",
    "author": {
      "name": "Arun Eswara",
      "title": "Software Engineer"
    },
    "content": [
      {
        "type": "paragraph",
        "text": "Updated: Sep 20, 2024"
      },
      {
        "type": "paragraph",
        "text": "*** COMING SOON ***"
      },
      {
        "type": "paragraph",
        "text": "Thanks for trying Ribbon! Ribbon is a Chrome extension that enables you to navigate Chrome without your mouse by adding overlayed keyboard shortcuts."
      },
      {
        "type": "paragraph",
        "text": "First, start by adding Ribbon to your Chrome bar. Press the Puzzle icon in the top right (1), then press the Pin button by Ribbon to make it blue (2). Click the Ribbon icon"
      },
      {
        "type": "paragraph",
        "text": "(the red ribbon) (3) which should now appear in the top right of your browser, and make sure the \"Temporarily disable shortcut\" slider is not enabled (4):"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_3e73a568b4374286852c06e3eb87dd88~mv2.png/v1/fill/w_1099,h_293,al_c,lg_1,q_85/ae53c0_3e73a568b4374286852c06e3eb87dd88~mv2.png",
        "alt": "(1) Puzzle icon (2) Pin icon (3) Ribbon icon (4) Do not accidentally disable the shortcut"
      },
      {
        "type": "paragraph",
        "text": "Using Ribbon is easy. Here's the front page on the WSJ, as I create this post:"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_ceb89850edc943a6b1c3306bef419e2a~mv2.png/v1/fill/w_3024,h_1644,al_c,q_95/ae53c0_ceb89850edc943a6b1c3306bef419e2a~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Now, press the shortcut (Ctrl+Shift on Windows or Cmd+Shift on Mac) to get the shortcut overlay:"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_91cedfd3cfc2449bb9da8b4eebf054a2~mv2.png/v1/fill/w_3024,h_1652,al_c,q_95/ae53c0_91cedfd3cfc2449bb9da8b4eebf054a2~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Type the one or two-letter sequence to automatically navigate to the corresponding link. Left/Right Arrow represent Page Backwards/Forwards, and Up/Down Arrow represent Scroll Up/Down. You can press Esc to close the shortcut menu."
      },
      {
        "type": "paragraph",
        "text": "By default, the shortcut menu closes once you navigate to a new page. If you'd like the menu to persist once opened (until manually closed with Esc), you can turn on menu persistence in the extension settings by clicking the Ribbon icon in the top right and enabling the corresponding slider:"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_e6cdaedd7f0d43b6846ac7024c4c770d~mv2.png/v1/fill/w_950,h_406,al_c,lg_1,q_90/ae53c0_e6cdaedd7f0d43b6846ac7024c4c770d~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "You can also temporarily disable the shortcut in the Ribbon settings, in case the shortcut interferes with some other activity:"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_827ab929a1fc4162baa6f2199d1ec0bc~mv2.png/v1/fill/w_953,h_406,al_c,lg_1,q_90/ae53c0_827ab929a1fc4162baa6f2199d1ec0bc~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Thanks for trying Ribbon! If you enjoy using it, please leave a review on the Chrome Web Store."
      },
      {
        "type": "paragraph",
        "text": "Have feedback? Message me on LinkedIn or email me at aruneswara@icloud.com.",
        "links": [
          {
            "text": "LinkedIn",
            "url": "https://www.linkedin.com/in/aruneswara"
          }
        ]
      }
    ]
  },
  {
    "_id": "lyriclearner-an-ai-music-generator-and-interpreter",
    "slug": "lyriclearner-an-ai-music-generator-and-interpreter",
    "title": "LyricLearner: An AI Music Generator and Interpreter",
    "description": "This project was created alongside Ibrahim Saifullah. The code for the main process can be found here (written in Java via the Maven Framework), and the code for the Genius lyrics API calls can be found here (written in...",
    "date": "2021-07-21T02:44:17.057Z",
    "updatedAt": "2021-07-21T03:14:25.614Z",
    "category": [
      "Projects",
      "Engineering",
      "AI/ML"
    ],
    "readTime": "3 min read",
    "sourceUrl": "https://www.aruneswara.com/post/lyriclearner-an-ai-music-generator-and-interpreter",
    "image": "https://static.wixstatic.com/media/ae53c0_632b3754e8fb4842abb9ebe6ca27daa7~mv2.png/v1/fill/w_661,h_364,al_c,lg_1,q_85/ae53c0_632b3754e8fb4842abb9ebe6ca27daa7~mv2.png",
    "author": {
      "name": "Arun Eswara",
      "title": "Software Engineer"
    },
    "content": [
      {
        "type": "paragraph",
        "text": "This project was created alongside Ibrahim Saifullah. The code for the main process can be found here (written in Java via the Maven Framework), and the code for the Genius lyrics API calls can be found here (written in Python).",
        "links": [
          {
            "text": "Ibrahim Saifullah",
            "url": "https://www.linkedin.com/in/ibrahimsaifullah/"
          },
          {
            "text": "here",
            "url": "https://github.com/aruneswara/LyricLearner"
          },
          {
            "text": "here",
            "url": "https://github.com/aruneswara/LyricParser"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Hip Hop is defined by its lyricality - what is (sometimes) lacking in sound is made up for in clever rhymes and hard-hitting punchlines. LyricLearner is a project I co-created to dive deeper into understanding these lyrics, inspired by my appreciation of the genre."
      },
      {
        "type": "paragraph",
        "text": "LyricLearner has two primary functions, both occasionally tweeted out on @LyricLearner through the Twitter API. @LyricLearnerBot was intended to promote the account by replying to mentions of popular music artists but was quickly put to an end by Twitter's anti-spam rules.",
        "links": [
          {
            "text": "@LyricLearner",
            "url": "https://twitter.com/lyriclearner"
          },
          {
            "text": "@LyricLearnerBot",
            "url": "http://twitter.com/lyriclearnerbot"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "LyricLearner's first level of functionality is generating artist lyrics based on their existing lyrics. This is a four-phase process. First, lyrics are parsed from Genius, a lyric database, using a call to their RESTful API in Python. These lyrics are stored locally in a text file. Secondly, a hashmap is created of words and potential follow-up words. This is called a Markov Chain - more specifically, a Markov Chain is a statistical model where probabilities for upcoming events (in this case words) are based on the previous event. For example, if the word 'idea' follows the word 'the' in half of the lyrics, this probability is stored. Then, when generating phrases, 'idea' will be generated half of the times 'the' is generated. This simulates the artist's lyrical style without directly copying lyrics."
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_632b3754e8fb4842abb9ebe6ca27daa7~mv2.png/v1/fill/w_661,h_364,al_c,lg_1,q_85/ae53c0_632b3754e8fb4842abb9ebe6ca27daa7~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "This Markov Chain hashmap was used to generate lyrics that followed the probability distribution of the artist. Several thousand potential lines were generated for each artist. Finally, these lyrics were tweeted at random intervals via a call to the Twitter API from Java's Maven Framework. Below are some sample tweets. While they weren't actually written by the artists, the lyrics follow the Markov Chain distribution and, as a result, emulate the artists' lyrical style."
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_59d05854bef3432ca521234e5e60127a~mv2.png/v1/fill/w_1421,h_334,al_c,lg_1,q_90/ae53c0_59d05854bef3432ca521234e5e60127a~mv2.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_a1e057bb5644435e8c0c23ccb91cc77e~mv2.png/v1/fill/w_1430,h_269,al_c,lg_1,q_90/ae53c0_a1e057bb5644435e8c0c23ccb91cc77e~mv2.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_bb04297a7d824e13880ed1de361f2df2~mv2.png/v1/fill/w_1409,h_341,al_c,lg_1,q_90/ae53c0_bb04297a7d824e13880ed1de361f2df2~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "The second layer of functionality to LyricLearner was an artist sentiment analysis. Sentiment analysis (performed by the Stanford Natural Language Processing library) enabled me to interpret the level of positivity or negativity of each word. Gauging the sentiment of artist albums over time helped us create insights into artists' lives. This was done by parsing the lyrics from genius, averaging the sentiment of each word, normalizing and scaling the values, and charting each album's sentiment. For example:"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_1de759b8654e46beb032e80de16793b8~mv2.png/v1/fill/w_1168,h_426,al_c,q_90/ae53c0_1de759b8654e46beb032e80de16793b8~mv2.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_e6bac88297a247529b57e4d6e2142058~mv2.png/v1/fill/w_874,h_420,al_c,lg_1,q_90/ae53c0_e6bac88297a247529b57e4d6e2142058~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "LyricLearner was a really fun project, combining my interest in algorithms and machine learning with my love for Hip Hop. As One direction could have said,"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_bb1f5d67cd85476b8eed20a7ed5e9f1d~mv2.png/v1/fill/w_1414,h_271,al_c,lg_1,q_90/ae53c0_bb1f5d67cd85476b8eed20a7ed5e9f1d~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Thanks for reading! If you have any questions, or would like to get in contact, you can reach out to me at aruneswara@icloud.com."
      }
    ]
  },
  {
    "_id": "medidata-bringing-the-hospital-to-you",
    "slug": "medidata-bringing-the-hospital-to-you",
    "title": "MediData: Bringing the Hospital to You",
    "description": "MediData was a project I created as part of a team in order to make a simple platform to digitally facilitate doctor/patient communication, an important convenience and necessity during the COVID-19 pandemic.",
    "date": "2020-09-19T23:03:59.727Z",
    "updatedAt": "2020-09-19T23:03:59.727Z",
    "category": [
      "Projects",
      "Engineering",
      "Healthcare"
    ],
    "readTime": "1 min read",
    "sourceUrl": "https://www.aruneswara.com/post/medidata-bringing-the-hospital-to-you",
    "image": "https://static.wixstatic.com/media/ae53c0_8978f18f506c47f0ad85fdc4adbd8515~mv2.png/v1/fill/w_1000,h_447,al_c,q_90,usm_0.66_1.00_0.01/ae53c0_8978f18f506c47f0ad85fdc4adbd8515~mv2.png",
    "author": {
      "name": "Arun Eswara",
      "title": "Software Engineer"
    },
    "content": [
      {
        "type": "paragraph",
        "text": "MediData was a project I created as part of a team in order to make a simple platform to digitally facilitate doctor/patient communication, an important convenience and necessity during the COVID-19 pandemic."
      },
      {
        "type": "paragraph",
        "text": "Here is the link to the prototype website and the Google Sheets with embedded Google scripts that manages the backend portion of the project.",
        "links": [
          {
            "text": "prototype website",
            "url": "https://sites.google.com/view/medidata-1/home"
          },
          {
            "text": "Google Sheets with embedded Google scripts that manages the backend portion of the project",
            "url": "https://docs.google.com/spreadsheets/d/14qP6NgLQ2VRjSvOU-eSf9w7vvtqpYK227ydFx0sDEfY/edit?usp=sharing"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "This project was created for the Star-Hacks Hackathon alongside Kavin Sitsabeshon, Rajiv Swamy, and Ali Farooqi. I focused primarily on the backend programming in Google Scripts, as well as minor modifications to the HTML frontend and pitch deck.",
        "links": [
          {
            "text": "Kavin Sitsabeshon",
            "url": "https://www.linkedin.com/in/kavinsitsabeshon/"
          },
          {
            "text": "Rajiv Swamy",
            "url": "https://www.linkedin.com/in/rajivswamy/"
          },
          {
            "text": "Ali Farooqi",
            "url": "https://www.linkedin.com/in/ali-farooqi-8136971a5/"
          }
        ]
      }
    ]
  },
  {
    "_id": "a-letter-to-my-future-self",
    "slug": "a-letter-to-my-future-self",
    "title": "A Letter to My Future Self",
    "description": "My university's Business Honors program (UT Austin BHP) asked that we write a letter to our future self to be read after the completion of our four years of college. Here's mine.",
    "date": "2020-08-29T21:11:29.940Z",
    "updatedAt": "2020-08-29T21:11:29.940Z",
    "category": [
      "Writing",
      "Letters"
    ],
    "readTime": "5 min read",
    "sourceUrl": "https://www.aruneswara.com/post/a-letter-to-my-future-self",
    "image": "https://static.wixstatic.com/media/ae53c0_59de0a8ab9a44488985a54c59d7c808b~mv2.jpeg/v1/fill/w_700,h_700,al_c,q_85/ae53c0_59de0a8ab9a44488985a54c59d7c808b~mv2.jpeg",
    "author": {
      "name": "Arun Eswara",
      "title": "Software Engineer"
    },
    "content": [
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_59de0a8ab9a44488985a54c59d7c808b~mv2.jpeg/v1/fill/w_700,h_700,al_c,q_85/ae53c0_59de0a8ab9a44488985a54c59d7c808b~mv2.jpeg",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "My university's Business Honors program (UT Austin BHP) asked that we write a letter to our future self to be read after the completion of our four years of college. Here's mine."
      },
      {
        "type": "paragraph",
        "text": "Dear Future Arun,"
      },
      {
        "type": "paragraph",
        "text": "I hope you’re doing well! I’m writing to you in the middle of the Coronavirus pandemic halfway through 2020 – hopefully it’s over by now. This also marks the start of my college career; it has been three days since college started and I've been to all but one of my classes. I know you’re on to better (or at least different) things, but I hope you’ve found an answer to some of the questions I’m worrying about now."
      },
      {
        "type": "paragraph",
        "text": "I hope by now that you’ve figured out your career path (no pressure if you haven’t, this isn't something that should be rushed, even if it seems like time's running out) – if you remember how it was back when you were me, it’s hard to make the choice between software engineering/finance/venture capital/quantitative finance etc. Maybe you've found that one of them is especially interesting to you, or that you just dislike one less than the rest. Regardless, make sure you're passionate about what you do - nothing else really matters (even experience for starting a company, since the path to entrepreneurship is so variable). Also, I hope you’re closer to solidifying your path for entrepreneurship – you don’t have to have everything figured out by now, obviously, but practice is always helpful even if it leads to failure in the short term. On that note, don’t underestimate the power of failure – nothing is permanent except the knowledge gained from it. You know as well as I do (hopefully better) that the only scary part of starting a business is what could go wrong. If you don't like a company enough to go all in on it, it isn't time yet. Don't worry, that time will come."
      },
      {
        "type": "paragraph",
        "text": "As a person, I’d like to grow by becoming more aware of who I am – my strengths and weaknesses, what I enjoy and despise, and the kind of person I really am. I'm sure you think you know yourself now, but you know as well as I do that you probably don't. As long as you're closer to finding yourself, we can call that success. I hope as I go through college I get more aware of my self-perceptions (especially the ones that are wrong) and I hope you’ve thought about that some more since writing this. I’m sure you’ve made mistakes, which is okay, as long as you (we?) have grown from it. Make mistakes, but never make the same one twice."
      },
      {
        "type": "paragraph",
        "text": "I also hope you’ve made new friends – you have great friends, that you should love and trust unconditionally, but there’s always room to grow and to learn new things and new perspectives from others. Trusting others (not with information, which doesn't really matter, but with support and your time) may seem hard, if not impossible, but trust me ­– it’ll turn out fine. If you ever feel you aren’t ready for what’s out there, just remember middle and high school and how much we’ve changed and learned since then; life is fleeting but friends are forever. At the same time, don't worry too much about the details of friendship - the point of friends is that there's an understood connection, not an explicit one. Also, whoever said not to start a business with friends is wrong - they just need two things, in order of increasing importance: trust and passion."
      },
      {
        "type": "paragraph",
        "text": "If you haven’t had the college experience you hoped, don’t worry – the 4 years of college is an arbitrary time frame and your life is nowhere near over or different yet. Being prepared professionally and with a strong support group around you is the most important thing I/you can do. Make sure to romanticize the right things in life – not everyone or everything is worth your attention or time. However, just ‘thinking’ about stuff is always worth it, so don’t forget to leave time for that, no matter what that entails. It may seem like a waste of time sometimes, but living in the abstract is necessary to better understand the 'real' world."
      },
      {
        "type": "paragraph",
        "text": "I hope that, in these upcoming years, you can work more to find out what you like – if we haven’t figured that out yet, there’s still a lot of time left and I’m sure you have good opportunities lined up. If you have found that, then make sure your focus and drive are behind you – it may seem tough at times but the present becomes the past as fast as the future becomes the present."
      },
      {
        "type": "paragraph",
        "text": "Keep reading philosophy, if you still do - it's hard to recreate that feeling of learning something so profound in just a few words. Also, rewatch Season 3 Episode 7 of Rick and Morty again, it's really good."
      },
      {
        "type": "paragraph",
        "text": "Finally, I’d like to depart some bits of knowledge I’ve accumulated in high school and before to you once again in hopes that you’ll keep these memories and lessons with you forever. Firstly, be convicted and confident in your beliefs and yourself – the truth is always subjective, so don't worry too much about being wrong. At the same time, don't be afraid to adapt your opinion if you do find a reason to do so. Pursue happiness, not money – they’re rarely, if ever, the same (although there may be some cause and effect). Never worry too much – think back to the things you worried about when you were me – do they really matter now? Life is short, but that doesn’t mean waste it or do things only for short term satisfaction – it means to strive to be better but to smell the roses and enjoy the path there. You may feel like it’s a waste to spend time suffering now for a better tomorrow, but as long as you enjoy the journey, you’ll be in an optimal position now and in the future. The night is darkest just before the dawn - be ready to face hardship but work past the pain and don't dwell in it; there are better things to come. Most of all, take all of these aphorisms with a grain of salt – all rules are made to be broken so there are no steadfast rules. Do what feels right and hope you’re right."
      },
      {
        "type": "paragraph",
        "text": "Good luck."
      },
      {
        "type": "paragraph",
        "text": "8/29/20"
      }
    ]
  },
  {
    "_id": "bioprotect-a-phased-array-spatial-sensor-for-visual-detection-and-assistance",
    "slug": "bioprotect-a-phased-array-spatial-sensor-for-visual-detection-and-assistance",
    "title": "BioProtect: A Phased Array Spatial Sensor for Visual Detection and Assistance",
    "description": "Those with limited eyesight or complete blindness face various problems, including risks of physical injury, restrictions on daily activities, and negative impact on learning or education.",
    "date": "2020-08-26T01:34:08.750Z",
    "updatedAt": "2020-08-26T03:26:24.743Z",
    "category": [
      "Projects",
      "Engineering",
      "Healthcare"
    ],
    "readTime": "4 min read",
    "sourceUrl": "https://www.aruneswara.com/post/bioprotect-a-phased-array-spatial-sensor-for-visual-detection-and-assistance",
    "image": "https://static.wixstatic.com/media/ae53c0_736723c53883444fa9cb9b4a5964f706~mv2.png/v1/fill/w_827,h_382,al_c,lg_1,q_85/ae53c0_736723c53883444fa9cb9b4a5964f706~mv2.png",
    "author": {
      "name": "Arun Eswara",
      "title": "Software Engineer"
    },
    "content": [
      {
        "type": "paragraph",
        "text": "This project was completed alongside Smaran Velidi and Aditya Vishnubhotla.",
        "links": [
          {
            "text": "Smaran Velidi",
            "url": "https://www.linkedin.com/in/smaran-velidi/"
          },
          {
            "text": "Aditya Vishnubhotla",
            "url": "https://www.linkedin.com/in/aditya-vishnubhotla-98785217b/"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Those with limited eyesight or complete blindness face various problems, including risks of physical injury, restrictions on daily activities, and negative impact on learning or education."
      },
      {
        "type": "paragraph",
        "text": "The white cane is the most common solution, as it is cheap and simple to make. Unfortunately, the white cane (and alternatives like guide dogs) have various problems - they are limited in scope and inefficient to use. The white cane also makes one hand unusable, whereas a guide dog can be extremely expensive."
      },
      {
        "type": "paragraph",
        "text": "Most of all, those using visual aids like the white cane or guide dog are subject to social stigma. In this project, my group and I sought to create an integrated/hidden alternative to visual detection with high accuracy and precision."
      },
      {
        "type": "paragraph",
        "text": "This project had the following engineering goals:"
      },
      {
        "type": "paragraph",
        "text": "- Develop an object-detection device that can be both accurate and efficient at detecting nearby objects and notifying the user of their presence"
      },
      {
        "type": "paragraph",
        "text": "- Restore normal functionality to both hands via a less intrusive and automatically functional device"
      },
      {
        "type": "paragraph",
        "text": "- Create a cheaper visual-aid option for the visually impaired"
      },
      {
        "type": "paragraph",
        "text": "To reach these goals, our group decided to create the BioProtect system."
      },
      {
        "type": "paragraph",
        "text": "The BioProtect vest reads in the surroundings by finding local objects via a phased array of ultrasound sensors and the vector intersections (indicating an object). Then, the user is alerted via the inflation of a pressurized pouch in the relevant direction. For example, if there is an object to the right of the user at mid-chest level, the pressurized pouch on the right size of the user at mid-chest level is to inflate."
      },
      {
        "type": "paragraph",
        "text": "Below is a schematic of the BioProject vest:"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_736723c53883444fa9cb9b4a5964f706~mv2.png/v1/fill/w_827,h_382,al_c,lg_1,q_85/ae53c0_736723c53883444fa9cb9b4a5964f706~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Here is an example of the field usage of the BioProtect system:"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_31b29c40600e450d89a0b41b4a5acfd6~mv2.png/v1/fill/w_1258,h_706,al_c,q_90/ae53c0_31b29c40600e450d89a0b41b4a5acfd6~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Before testing the device, several optimizations were done to the device. The most important optimization to the device were the addition of the pressurized compartments mentioned above. We initially had a verbal system (for example, a speaker would relay to the user the direction and distance of local objects) similar to most other prototypes [1]. However, adding the pressurized compartments proved to be an invaluable decision, as the new system was far more intuitive and less time-sensitive (the user was aware of local objects immediately rather than having to wait for an audio cue).",
        "links": [
          {
            "text": "[1]",
            "url": "https://link.springer.com/article/10.1007/s40595-016-0075-z"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Another obstacle to be fixed was accuracy - our initial models either required bulky devices (such as interfacing with an Xbox Kinect) or were too inaccurate to be used successfully. To solve this, we decided upon using a phased array of ultrasound sensors, as described below:"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_eec87e123e90487a8dc2d1e47660648a~mv2.png/v1/fill/w_993,h_458,al_c,q_90/ae53c0_eec87e123e90487a8dc2d1e47660648a~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "The next optimization, battery interrupts, is described below. This optimization was important to ensure that the device was useable all day long."
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_48aaa21a11404a3f91f7773f7c504277~mv2.png/v1/fill/w_736,h_617,al_c,q_90/ae53c0_48aaa21a11404a3f91f7773f7c504277~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Another issue to overcome was biomechanical adaptation - many existing prototypes were unable to cope with changes to the user's gait (which occurs when tired, after injury, due to normal growth during aging, etc.). Our final optimization, as described below, was total biomechanical adaptation:"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_a6bdaced0f024fb68a512b9013813257~mv2.png/v1/fill/w_1196,h_562,al_c,q_90/ae53c0_a6bdaced0f024fb68a512b9013813257~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Two primary modes of data collection and data analysis were mapped - simulated and experimental (physical). To verify the model's feasibility, we first created a CAD model and tested the device accuracy. After those tests were completed, we created a prototype physical model."
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_de27d5d2d5084267a2199694d21a1a95~mv2.png/v1/fill/w_826,h_439,al_c,q_90/ae53c0_de27d5d2d5084267a2199694d21a1a95~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Below are the results for the Simulated and Experimental phases, with the data analysis in the subtitles:"
      },
      {
        "type": "paragraph",
        "text": "Simulated Results"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_4a35b237655e4ba2b2afb3154467b135~mv2.png/v1/fill/w_1275,h_379,al_c,q_90/ae53c0_4a35b237655e4ba2b2afb3154467b135~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Experimental Results"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_461713ddbdc546e89ce504aa63ee2cb4~mv2.png/v1/fill/w_716,h_671,al_c,q_90/ae53c0_461713ddbdc546e89ce504aa63ee2cb4~mv2.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_3d931699d27d4e138e0590a65116c79e~mv2.png/v1/fill/w_752,h_437,al_c,lg_1,q_85/ae53c0_3d931699d27d4e138e0590a65116c79e~mv2.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_601871605f9b49a981cce5819f4fab2b~mv2.png/v1/fill/w_1194,h_325,al_c,q_90/ae53c0_601871605f9b49a981cce5819f4fab2b~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "We also compared BioProtect to an alternative prototype ( found here) to determine BioProtect's comparative efficacy:",
        "links": [
          {
            "text": "found here",
            "url": "https://www.researchgate.net/publication/326613331_LIDAR_Assist_Spatial_Sensing_for_the_Visually_Impaired_and_Performance_Analysis"
          }
        ]
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_7f73fc7a3807415783716997efef2ffb~mv2.png/v1/fill/w_746,h_535,al_c,lg_1,q_90/ae53c0_7f73fc7a3807415783716997efef2ffb~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "From this project, we reached the following conclusions:"
      },
      {
        "type": "paragraph",
        "text": "- The Ultrasonic sensors, Kinect sensors, and Pressure pockets were inserted within the design of the vest and custom-fitted to minimize protrusion"
      },
      {
        "type": "paragraph",
        "text": "- The real-life trials indicated that there was ~97% accuracy in randomly generated scenarios"
      },
      {
        "type": "paragraph",
        "text": "and 95% in complex (testing scenarios)"
      },
      {
        "type": "paragraph",
        "text": "- The biomechanical adaptation system mitigated errors by adapting to the specific gait of the user"
      },
      {
        "type": "paragraph",
        "text": "As a result, the BioProtect vest succeeded in its engineering goal and is a feasible visual aid replacement."
      },
      {
        "type": "paragraph",
        "text": "The following future research could be conducted to further improve the system:"
      },
      {
        "type": "paragraph",
        "text": "- A visual-analysis sensor could be added to the vest, to introduce braille translation capabilities"
      },
      {
        "type": "paragraph",
        "text": "- Incorporating other sensors to increase overall accuracy and field of operation"
      },
      {
        "type": "paragraph",
        "text": "(Arduino Ultrasonic HC-R04)"
      },
      {
        "type": "paragraph",
        "text": "- Could evaluate the viability of the technology in a military setting, to detect threats in"
      },
      {
        "type": "paragraph",
        "text": "object-dense areas with limited vision"
      },
      {
        "type": "paragraph",
        "text": "If you'd like, you can view the extended presentation of the project (used at scientific conferences/competitions) here. While this presentation has a more thorough overview, it was conducted prior to experimental testing and does not contain a large portion of the final data.",
        "links": [
          {
            "text": "If you'd like, you can view the extended presentation of the project (used at scientific conferences/competitions) here. While this presentation has a more thorough overview, it was conducted",
            "url": "https://drive.google.com/file/d/1l46PaXgA-zsmTmpfuFoJBh1vETtdSTtt/view?usp=sharing"
          },
          {
            "text": "prior to experimental testing",
            "url": "https://drive.google.com/file/d/1l46PaXgA-zsmTmpfuFoJBh1vETtdSTtt/view?usp=sharing"
          },
          {
            "text": "and does not contain a large portion of the final data.",
            "url": "https://drive.google.com/file/d/1l46PaXgA-zsmTmpfuFoJBh1vETtdSTtt/view?usp=sharing"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Thanks For Reading! If you have any questions, or would like to get in contact, you can reach out to me at aruneswara@icloud.com."
      }
    ]
  },
  {
    "_id": "ortho-an-intelligent-exoskeleton-powered-orthosis-via-neural-network-for-rehabilitative-assistance",
    "slug": "ortho-an-intelligent-exoskeleton-powered-orthosis-via-neural-network-for-rehabilitative-assistance",
    "title": "Ortho, An Intelligent Exoskeleton: Powered Orthosis via Neural Network for Rehabilitative Assistance",
    "description": "For this project, I was awarded Regeneron Science Talent Search Scholar, MIT Think Finalist Alternate, Paradigm Project Finalist, Diamond Challenge Texas 2nd Place, Texas State Science Fair Finalist, Texas Junior Academy...",
    "date": "2020-08-26T00:28:53.125Z",
    "updatedAt": "2020-08-26T03:26:44.823Z",
    "category": [
      "Projects",
      "Engineering",
      "Healthcare",
      "AI/ML"
    ],
    "readTime": "4 min read",
    "sourceUrl": "https://www.aruneswara.com/post/ortho-an-intelligent-exoskeleton-powered-orthosis-via-neural-network-for-rehabilitative-assistance",
    "image": "https://static.wixstatic.com/media/ae53c0_f32b8916d47b46c3a134149b59ba3a29~mv2.png/v1/fill/w_1000,h_561,al_c,q_90,usm_0.66_1.00_0.01/ae53c0_f32b8916d47b46c3a134149b59ba3a29~mv2.png",
    "author": {
      "name": "Arun Eswara",
      "title": "Software Engineer"
    },
    "content": [
      {
        "type": "paragraph",
        "text": "For this project, I was awarded Regeneron Science Talent Search Scholar, MIT Think Finalist Alternate, Paradigm Project Finalist, Diamond Challenge Texas 2nd Place, Texas State Science Fair Finalist, Texas Junior Academy of Science 2nd Place, and several others.",
        "links": [
          {
            "text": "Regeneron Science Talent Search Scholar",
            "url": "https://www.societyforscience.org/regeneron-sts/2020-scholars/"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Ortho is a project I began in the summer of 2018. I worked on it for a total of about 2.5 years."
      },
      {
        "type": "paragraph",
        "text": "When one of my friends was injured in a biking accident, he was forced to wear an 'arm orthosis', an arm brace that maintains bone alignment in the arm and/or leg during injury recovery. Orthoses reduce the stress on the Lateral Epicondyle and Medial Epicondyle tendons to facilitate movement and allow muscle recovery."
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_756b705397164fcb8f20724fbb96651e~mv2.png/v1/fill/w_901,h_449,al_c,lg_1,q_90/ae53c0_756b705397164fcb8f20724fbb96651e~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "However, there are various problems with orthoses - they make muscle flexion difficult due to the weight of the brace and they slow recovery since the wearer tends to limit that arm or leg's usage."
      },
      {
        "type": "paragraph",
        "text": "The solution to this is a powered orthosis - an orthosis that is mechanically actuated by a motor at the primary joint. Unfortunately, existing prototypes [1] [2] are limited in scope and feasibility - they are heavy and contain a large battery, have many protruding pieces (making daily use uncomfortable or even impossible), and limit rehabilitation because the muscle isn't activated.",
        "links": [
          {
            "text": "[1]",
            "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3375739/"
          },
          {
            "text": "[2]",
            "url": "https://biomech.media.mit.edu/portfolio_page/design-of-a-powered-ankle-foot-orthosis/"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "The solution to this was creating 'Ortho, An Intelligent Exoskeleton'. I had 3 primary goals with Ortho: Intelligent (able to automatically and accurately detect when the person was moving their arm to provide assistance), ready for daily use (not protrusive or overly heavy), and rehabilitative (balanced mechanical actuation with actual muscle flexion to help the muscle steadily recover)."
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_653561d1afd440ef9f884f31bf61a11c~mv2.png/v1/fill/w_774,h_330,al_c,lg_1,q_85/ae53c0_653561d1afd440ef9f884f31bf61a11c~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "The final prototype follows a 3-phase methodology: Sensing, Movement Actuation, then Termination. First, embedded pressure, electromyographic, and accelerometer sensors, provide data to an Arduino Uno. Secondly, a speed vector is calculated from the accelerometer and a movement threshold is found from the pressure/neuromuscular inputs - a Bayesian Artificial Neural Network (created in Matlab and trained in ~100 trials) is used to continually improve the accuracy of the movement threshold. If it is determined that the user is trying to move their arm/leg (based on the output of the Artificial Neural Network), the motor is automatically actuated via the Arduino Uno. Finally, the motor is disabled when the user moves their arm or leg in the inertial direction."
      },
      {
        "type": "paragraph",
        "text": "Below is a more precise description of the software methodology:"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_230cd8c589f6433487846bb54b0e9fc9~mv2.png/v1/fill/w_941,h_394,al_c,lg_1,q_90/ae53c0_230cd8c589f6433487846bb54b0e9fc9~mv2.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_33a2985825b94aebbc29951f6e75cefb~mv2.png/v1/fill/w_923,h_427,al_c,lg_1,q_90/ae53c0_33a2985825b94aebbc29951f6e75cefb~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Muscle rehabilitation is promoted by steadily decreasing aid from the motor - as the user gets stronger, the aid decreases. That shift in motor power is modeled in the graph below:"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_ddea8055dbc74bf0b0cdfb0e5d302a8a~mv2.png/v1/fill/w_808,h_476,al_c,q_90/ae53c0_ddea8055dbc74bf0b0cdfb0e5d302a8a~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Here is a picture of the final prototype (with the components spread out rather than encapsulated in the casing):"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_f32b8916d47b46c3a134149b59ba3a29~mv2.png/v1/fill/w_1348,h_756,al_c,q_90/ae53c0_f32b8916d47b46c3a134149b59ba3a29~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "And here is a video of the arm brace in action:"
      },
      {
        "type": "paragraph",
        "text": "To test the effectiveness of the brace, 4 facets of the data were analyzed: accuracy (based on false positives and omissions), torque, time to complete each cycle, and user energy expenditure."
      },
      {
        "type": "paragraph",
        "text": "Here is the data from the experiment, with the data analysis in the subtitle:"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_1901112e9cd04fb7a1b65e5533308c51~mv2.png/v1/fill/w_857,h_265,al_c,lg_1,q_85/ae53c0_1901112e9cd04fb7a1b65e5533308c51~mv2.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_0e527b4a44ff416d89da2ac8cd4fdf9d~mv2.png/v1/fill/w_830,h_295,al_c,lg_1,q_85/ae53c0_0e527b4a44ff416d89da2ac8cd4fdf9d~mv2.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_3b75dda0c0554292a124fde7cc71db49~mv2.png/v1/fill/w_931,h_510,al_c,lg_1,q_90/ae53c0_3b75dda0c0554292a124fde7cc71db49~mv2.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_41e6b34440b44170a2a624b5b0ee3ecf~mv2.png/v1/fill/w_603,h_371,al_c,lg_1,q_85/ae53c0_41e6b34440b44170a2a624b5b0ee3ecf~mv2.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_fff475583bdf449492bb58f07e87727b~mv2.png/v1/fill/w_599,h_358,al_c,lg_1,q_85/ae53c0_fff475583bdf449492bb58f07e87727b~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Finally, here is the statistical verification of the data:"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_436dba2dcb7c4d5f93628cc6a3f0ff6b~mv2.png/v1/fill/w_1259,h_359,al_c,lg_1,q_90/ae53c0_436dba2dcb7c4d5f93628cc6a3f0ff6b~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "I also calculated an industry verification to compare Ortho to an existing prototype ( found here):",
        "links": [
          {
            "text": "found here",
            "url": "https://journals.lww.com/jpojournal/Abstract/1990/01000/Hybrid_Arm_Orthosis.12.aspx"
          }
        ]
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_aeed7797d4d74f9f9d7ae418e63f4e0c~mv2.png/v1/fill/w_822,h_548,al_c,lg_1,q_90/ae53c0_aeed7797d4d74f9f9d7ae418e63f4e0c~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "After completing the brace, I conducted an algorithmic analysis to make the brace as efficient as possible. Although battery optimization was initially an issue, efficiency-testing and hardware optimizations made the brace useable."
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_a1c4d3f5aa4c42b6b9a33ee6bcb04e83~mv2.png/v1/fill/w_748,h_384,al_c,lg_1,q_85/ae53c0_a1c4d3f5aa4c42b6b9a33ee6bcb04e83~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "I then conducted a medical analysis to compare Ortho's viability to that of existing orthoses and prototypes, as shown below:"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_39999cc5ac384594b8695b5b89727cf0~mv2.png/v1/fill/w_728,h_582,al_c,q_90/ae53c0_39999cc5ac384594b8695b5b89727cf0~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Finally, I conducted a simple cost-feature analysis to prove market viability:"
      },
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_d1d256e75be14b34b3e2baf9611dacac~mv2.png/v1/fill/w_882,h_577,al_c,lg_1,q_90/ae53c0_d1d256e75be14b34b3e2baf9611dacac~mv2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "I have reached the following conclusions from creating this project:"
      },
      {
        "type": "paragraph",
        "text": "- Torque increased following use of Ortho system by approximately 5x under normal conditions in traditional movement patterns"
      },
      {
        "type": "paragraph",
        "text": "- Energy Expenditure decreased significantly to the point where severely atrophied muscles could be rehabilitated more rapidly"
      },
      {
        "type": "paragraph",
        "text": "- The time per movement cycle decreased approximately 0.2 seconds per flexion and extension or 0.4 seconds per cycle"
      },
      {
        "type": "paragraph",
        "text": "Therefore, Ortho is more efficient for everyday use than a traditional orthosis in terms of the measured variables"
      },
      {
        "type": "paragraph",
        "text": "The following future development could be done to improve the brace further:"
      },
      {
        "type": "paragraph",
        "text": "- Incorporating other sensors to increase overall accuracy (more electromyographic sensors, dedicated electroencephalogram)"
      },
      {
        "type": "paragraph",
        "text": "- Modelling a ball-and-socket join for omnidirectional motion and applicability/testing on all bodily joints that undergo significant structural damage and rehabilitation"
      },
      {
        "type": "paragraph",
        "text": "- Creating a powered orthotic device for lower limbs to help with biomechanical walking gait characteristics, such as a powered Knee-Ankle Foot Orthosis (KAFO)"
      },
      {
        "type": "paragraph",
        "text": "For a more thorough explanation of the project, you can scroll through this embedded Google Slides presentation that I used at several scientific conferences:"
      },
      {
        "type": "paragraph",
        "text": "Additionally, here's a Google Drive link to the full research paper if you're interested.",
        "links": [
          {
            "text": "Additionally, here's a Google Drive link to the full research paper if you're interested.",
            "url": "https://drive.google.com/file/d/1lBV4YxpzcYA00P0lc7Cp8z1690GZdOBe/view?usp=sharing"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Thanks For Reading! If you have any questions, or would like to get in contact, you can reach out to me at aruneswara@icloud.com."
      }
    ]
  },
  {
    "_id": "an-open-letter-to-incoming-high-school-seniors",
    "slug": "an-open-letter-to-incoming-high-school-seniors",
    "title": "An Open Letter to Incoming High School Seniors",
    "description": "Congratulations on making it this far! While I’m sure you’ve had to push yourself just to get here, I can’t promise it’s any easier from here. It’s not more difficult, per se — you’re probably well acquainted with the...",
    "date": "2020-05-09T15:10:53.728Z",
    "updatedAt": "2020-05-09T15:10:53.728Z",
    "category": [
      "Writing",
      "Letters"
    ],
    "readTime": "5 min read",
    "sourceUrl": "https://www.aruneswara.com/post/an-open-letter-to-incoming-high-school-seniors",
    "image": "https://static.wixstatic.com/media/ae53c0_0445a9b8ce434664b3f7cb3a7e723e1a~mv2.jpeg/v1/fill/w_960,h_478,al_c,q_85/ae53c0_0445a9b8ce434664b3f7cb3a7e723e1a~mv2.jpeg",
    "author": {
      "name": "Arun Eswara",
      "title": "Software Engineer"
    },
    "content": [
      {
        "type": "image",
        "src": "https://static.wixstatic.com/media/ae53c0_0445a9b8ce434664b3f7cb3a7e723e1a~mv2.jpeg/v1/fill/w_960,h_478,al_c,q_85/ae53c0_0445a9b8ce434664b3f7cb3a7e723e1a~mv2.jpeg",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Dear Juniors,"
      },
      {
        "type": "paragraph",
        "text": "Congratulations on making it this far! While I’m sure you’ve had to push yourself just to get here, I can’t promise it’s any easier from here. It’s not more difficult, per se — you’re probably well acquainted with the intellectual rigor of IB/AP courses and school in general. However, from English (Literature at my school) to college admissions to your other higher level courses, you will have a lot of work to juggle, probably more than you’ve ever had before. At the same time, this is your senior year — don’t forget to enjoy it before it slips away. With all that in mind, I can provide a few pointers:"
      },
      {
        "type": "paragraph",
        "text": "I’m writing this on May 20th, 2020, so I have no idea how the coronavirus still affects you. But I will tell you this — if it’s still prevalent, and you’re still home, try to use your time productively at least a little bit. While it’s unfair to expect you not to watch a lot of TV or sleep during weird hours, you will definitely have a lot of free time. Don’t let yourself be bored — do something mindful, even if it’s not genuinely educational. Also, imagine how much this must suck for me, sitting at home when I should be at college."
      },
      {
        "type": "paragraph",
        "text": "Yes, your GPA does matter, and it still matters how you do in your senior year — but you should still take that with a grain of salt. While your rank will be an important part of your admissions, there are a lot of other important aspects of your life, especially now. Hindsight is 20/20, so kicking yourself for the past will not help you. If your grades are good, you should be happy. If not, well, there’s not much you can do about it now, so there’s no point in worrying."
      },
      {
        "type": "paragraph",
        "text": "On that note, now is the best time to focus on your college application. I’m not sure when you’re reading this letter, but trust me — leaving your essays for the last week really really doesn’t work. No matter how good you think your hastily put together writing is, it would’ve been a million times better if you had adequate time to brainstorm."
      },
      {
        "type": "paragraph",
        "text": "If your senior year grades are bad, you probably deserve it, even in English. Yes, your grades may go down, but get used to it — rhetorical analysis is important, and an easy A in a senior year course would probably just cement your apathy. Also, some of the lessons are genuinely interesting — if you like what you’re doing, it won’t seem like such a chore, even if you have to pretend to enjoy it."
      },
      {
        "type": "paragraph",
        "text": "Be open-minded — to new people, new experiences, and new ideas. It’s easy to “otherize” things you don’t like and just ignore them, but really think about something before you dismiss it. That applies to a lot of things, but it’s especially important that you don’t just dismiss what you do in class. Really try to enjoy what you have to do — you have to do it regardless of whether or not you like it, so at least make it fun."
      },
      {
        "type": "paragraph",
        "text": "When I said enjoy your senior year, I really meant it. As soon as you finish your college apps, you have nothing to worry about. Your extracurricular and college-related obligations are fulfilled, and your grades will only impact you if they drop significantly. Now, you can go to school with the “correct” mindset — to genuinely learn, not learn for a test or a grade. So, spend your time wisely. And in this case, wisely (maybe surprisingly) doesn’t mean with your head in a textbook. Stay after school, do stuff with your friends, go out to eat more (try sweet tea, it’s amazing), and just stop stressing. Your whole life will be full of stress — it really doesn’t get any easier from here on out — so relax while you can."
      },
      {
        "type": "paragraph",
        "text": "I’ve heard so many times, from so many people, to not worry about the future — “your plan will change so many times, don’t stress about what you ‘think’ will happen.” However, I never genuinely believed that until recently, when I’ve had to consider so many options about the future, in regards to colleges, majors, etc.. So, I’ll give you the most valuable piece of advice I possibly can — focus on your goals, not the path. To paraphrase the naked man in How I Met Your Mother, “as long as you do everything to achieve your goals, the path will fall into place.”"
      },
      {
        "type": "paragraph",
        "text": "Enjoy the little things that you have left — go to homecoming and prom, maybe even some of the pep rallies. Most importantly, don’t fear the goodbyes. You’ll meet a lot of people in your life, and you’ll have friends just as good as you have now in the future too. Rather, enjoy the time you have with your friends now, and make the goodbyes short. If they’re real friends, you’ll stay in touch regardless."
      },
      {
        "type": "paragraph",
        "text": "If you’re ever bored with school, or upset about the fact that you still have to pass to avoid being rescinded, remember what the goal of school is. You’re not learning because every single thing you learn will actually matter in the future — you’re learning because learning how to learn is the most important thing you can learn. So, don’t just give up now — adopting poor study habits now will erase everything you’ve done in the last 4 years and make starting college that much harder. Adapting to college is difficult, so don’t make it harder than it has to be by forgetting how to learn."
      },
      {
        "type": "paragraph",
        "text": "If you’ve actually read this far, good job! If you just skipped here from the intro, then I don’t blame you — you probably have a lot on your plate without having to read a bunch of letters. Regardless, the lessons you learn from experience and the lessons you learn yourself are the most important."
      },
      {
        "type": "paragraph",
        "text": "Good luck."
      },
      {
        "type": "paragraph",
        "text": "Sincerely,"
      },
      {
        "type": "paragraph",
        "text": "P.S. Enjoyed reading this? Reach out to me via email or LinkedIn — I’m always open to connect!"
      },
      {
        "type": "paragraph",
        "text": "aruneswara@icloud.com or linkedin.com/in/aruneswara"
      }
    ]
  }
];

const preferredBlogCategoryOrder = [
  "Writing",
  "Projects",
  "Engineering",
  "Philosophy",
  "Healthcare",
  "AI/ML",
  "Letters"
];

export const blogCategories = getBlogCategories(blogPosts, preferredBlogCategoryOrder);

export const getBlogById = (id) => findBlogById(blogPosts, id);

export default blogPosts;
