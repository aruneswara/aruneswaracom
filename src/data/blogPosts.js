import { findBlogById } from "./blogUtils.js";
import additionalBlogPosts from "./additionalBlogPosts.js";

const blogPosts = [
  {
    "_id": "you-re-the-problem",
    "slug": "you-re-the-problem",
    "title": "you're the problem",
    "description": "in middle school, and for a short time in high school, i did public forum and lincoln douglas debate (albeit not very well).",
    "date": "2025-07-31T20:24:14.032Z",
    "readTime": "2 min read",
    "sourceUrl": "https://aruneswara.wixsite.com/mysite/post/you-re-the-problem",
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
        "text": "this perspective extends far past just competitive debate - every person you speak to about anything will have a different evaluative framework, and internalizing and shaping how you speak towards others’ frameworks is the only way to convince people of contentious things. for instance, if you’re a biologist explaining evolution to a child, you can’t start with carbon dating and the fossil record - you have to start at the level they understand. this gap in foundational understanding, the “inferential distance”, necessitates completely different framing when talking about evolution with a child as compared to a fellow biologist.",
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
    "description": "everything exists in the physical, or in some way supervenes on the physical. that is to say, even abstract things like ideas and dreams have a specific and unique dependency on something physical.",
    "date": "2025-07-27T05:18:57.966Z",
    "readTime": "4 min read",
    "sourceUrl": "https://aruneswara.wixsite.com/mysite/post/there-s-no-such-thing-as-free-will",
    "content": [
      {
        "type": "paragraph",
        "text": "premise I: only matter exists (no God, soul, etc.)"
      },
      {
        "type": "paragraph",
        "text": "everything exists in the physical, or in some way supervenes on the physical. that is to say, even abstract things like ideas and dreams have a specific and unique dependency on something physical. for instance, two individuals with the exact same brain state will have the exact same thoughts, memories, emotions, etc. (this relationship is called ‘supervenience’)."
      },
      {
        "type": "paragraph",
        "text": "this premise (called ‘physicalism’) is not definitive, and even a strict but rational atheist would admit that there’s a non-zero chance that God or something else metaphysical exists. nevertheless, we can treat physicalism as a base truth until compelled to believe otherwise, given the burden of proof on metaphysical beliefs."
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
        "text": "this argument is known as ‘causal determinism’ or ‘strict determinism’ (although sometimes these labels don’t include the randomness factor - the label that does is ‘causal closure’ or ‘physical closure’)."
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
    "readTime": "1 min read",
    "sourceUrl": "https://aruneswara.wixsite.com/mysite/post/ribbon",
    "content": [
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
        "src": "/blog/ribbon/01-toolbar.png",
        "alt": "(1) Puzzle icon (2) Pin icon (3) Ribbon icon (4) Do not accidentally disable the shortcut"
      },
      {
        "type": "paragraph",
        "text": "Using Ribbon is easy. Here's the front page on the WSJ, as I create this post:"
      },
      {
        "type": "image",
        "src": "/blog/ribbon/02-wsj.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Now, press the shortcut (Ctrl+Shift on Windows or Cmd+Shift on Mac) to get the shortcut overlay:"
      },
      {
        "type": "image",
        "src": "/blog/ribbon/03-overlay.png",
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
        "src": "/blog/ribbon/04-persistence.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "You can also temporarily disable the shortcut in the Ribbon settings, in case the shortcut interferes with some other activity:"
      },
      {
        "type": "image",
        "src": "/blog/ribbon/05-disable-shortcut.png",
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
          },
          {
            "text": "aruneswara@icloud.com",
            "url": "mailto:aruneswara@icloud.com"
          }
        ]
      }
    ]
  },
  {
    "_id": "ortho-an-intelligent-exoskeleton-powered-orthosis-via-neural-network-for-rehabilitative-assistance",
    "slug": "ortho-an-intelligent-exoskeleton-powered-orthosis-via-neural-network-for-rehabilitative-assistance",
    "title": "Ortho, An Intelligent Exoskeleton: Powered Orthosis via Neural Network for Rehabilitative Assistance",
    "description": "For this project, I was awarded Regeneron Science Talent Search Scholar, MIT Think Finalist Alternate, Paradigm Project Finalist, Diamond Challenge Texas 2nd Place, Texas State Science Fair Finalist, Texas Junior Academy of Science 2nd Place, and several others.",
    "date": "2020-08-26T00:28:53.125Z",
    "readTime": "3 min read",
    "sourceUrl": "https://aruneswara.wixsite.com/mysite/post/ortho-an-intelligent-exoskeleton-powered-orthosis-via-neural-network-for-rehabilitative-assistance",
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
        "src": "/blog/ortho/01-orthoses.png",
        "alt": "Orthoses"
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
        "src": "/blog/ortho/02-system-overview.png",
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
        "src": "/blog/ortho/03-methodology-1.png",
        "alt": ""
      },
      {
        "type": "image",
        "src": "/blog/ortho/04-methodology-2.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Muscle rehabilitation is promoted by steadily decreasing aid from the motor - as the user gets stronger, the aid decreases. That shift in motor power is modeled in the graph below:"
      },
      {
        "type": "image",
        "src": "/blog/ortho/05-motor-power.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Here is a picture of the final prototype (with the components spread out rather than encapsulated in the casing):"
      },
      {
        "type": "image",
        "src": "/blog/ortho/06-brace-diagram.png",
        "alt": "Brace Diagram"
      },
      {
        "type": "paragraph",
        "text": "And here is a video of the arm brace in action:"
      },
      {
        "type": "video",
        "src": "/blog/ortho/17-demo.mp4",
        "title": "Ortho arm-brace demonstration"
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
        "src": "/blog/ortho/07-accuracy.png",
        "alt": "Regardless of the user's initial strength, the brace has high (98%-99%) accuracy"
      },
      {
        "type": "image",
        "src": "/blog/ortho/08-cycle-and-torque.png",
        "alt": "The Ortho brace decreases the length of a movement cycle by ~0.2 seconds and increases torque by up to 5x"
      },
      {
        "type": "image",
        "src": "/blog/ortho/09-force.png",
        "alt": "The Ortho brace requires ~20N less force at its peak and far less prolonged force for arm movement"
      },
      {
        "type": "image",
        "src": "/blog/ortho/10-training-accuracy.png",
        "alt": "The Bayesian Regularization Artificial Neural Network required ~200 movements to gain usable (>95%) accuracy"
      },
      {
        "type": "image",
        "src": "/blog/ortho/11-movement-prediction.png",
        "alt": "The oscillating pattern of movement compared to that of the Neural Network's prediction is approximately the same"
      },
      {
        "type": "paragraph",
        "text": "Finally, here is the statistical verification of the data:"
      },
      {
        "type": "image",
        "src": "/blog/ortho/12-statistical-verification.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "I also calculated an industry verification to compare Ortho to an existing prototype (found here):",
        "links": [
          {
            "text": "found here",
            "url": "https://journals.lww.com/jpojournal/Abstract/1990/01000/Hybrid_Arm_Orthosis.12.aspx"
          }
        ]
      },
      {
        "type": "image",
        "src": "/blog/ortho/13-industry-comparison.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "After completing the brace, I conducted an algorithmic analysis to make the brace as efficient as possible. Although battery optimization was initially an issue, efficiency-testing and hardware optimizations made the brace useable."
      },
      {
        "type": "image",
        "src": "/blog/ortho/14-efficiency-analysis.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "I then conducted a medical analysis to compare Ortho's viability to that of existing orthoses and prototypes, as shown below:"
      },
      {
        "type": "image",
        "src": "/blog/ortho/15-medical-analysis.png",
        "alt": ""
      },
      {
        "type": "paragraph",
        "text": "Finally, I conducted a simple cost-feature analysis to prove market viability:"
      },
      {
        "type": "image",
        "src": "/blog/ortho/16-cost-feature-analysis.png",
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
        "type": "embed",
        "src": "https://docs.google.com/presentation/d/e/2PACX-1vRpQNM6kIOQtrlaqUIy07zIPWiKlFbiRpV_FYM8Xx9SG7n_-kjk0NRg0GQcHBNCNg/embed?start=true&loop=true&delayms=15000",
        "title": "Ortho research presentation"
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
  ...additionalBlogPosts,
].sort((first, second) => new Date(second.date) - new Date(first.date));

export const getBlogById = (id) => findBlogById(blogPosts, id);

export default blogPosts;
