const additionalBlogPosts = [
  {
    _id: "lyriclearner-an-ai-music-generator-and-interpreter",
    slug: "lyriclearner-an-ai-music-generator-and-interpreter",
    title: "LyricLearner: An AI Music Generator and Interpreter",
    description:
      "This project was created alongside Ibrahim Saifullah. The code for the main process can be found here, and the code for the Genius lyrics API calls can be found here.",
    date: "2021-07-21T02:44:17.057Z",
    readTime: "2 min read",
    sourceUrl:
      "https://aruneswara.wixsite.com/mysite/post/lyriclearner-an-ai-music-generator-and-interpreter",
    content: [
      {
        type: "paragraph",
        text: "This project was created alongside Ibrahim Saifullah. The code for the main process can be found here (written in Java via the Maven Framework), and the code for the Genius lyrics API calls can be found here (written in Python).",
        links: [
          {
            text: "Ibrahim Saifullah",
            url: "https://www.linkedin.com/in/ibrahimsaifullah/",
          },
          {
            text: "here",
            url: "https://github.com/aruneswara/LyricLearner",
          },
          {
            text: "here",
            url: "https://github.com/aruneswara/LyricParser",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Hip Hop is defined by its lyricality - what is (sometimes) lacking in sound is made up for in clever rhymes and hard-hitting punchlines. LyricLearner is a project I co-created to dive deeper into understanding these lyrics, inspired by my appreciation of the genre.",
      },
      {
        type: "paragraph",
        text: "LyricLearner has two primary functions, both occasionally tweeted out on @LyricLearner through the Twitter API. @LyricLearnerBot was intended to promote the account by replying to mentions of popular music artists but was quickly put to an end by Twitter's anti-spam rules.",
        links: [
          { text: "@LyricLearner", url: "https://twitter.com/lyriclearner" },
          { text: "@LyricLearnerBot", url: "http://twitter.com/lyriclearnerbot" },
        ],
      },
      {
        type: "paragraph",
        text: "LyricLearner's first level of functionality is generating artist lyrics based on their existing lyrics. This is a four-phase process. First, lyrics are parsed from Genius, a lyric database, using a call to their RESTful API in Python. These lyrics are stored locally in a text file. Secondly, a hashmap is created of words and potential follow-up words. This is called a Markov Chain - more specifically, a Markov Chain is a statistical model where probabilities for upcoming events (in this case words) are based on the previous event. For example, if the word 'idea' follows the word 'the' in half of the lyrics, this probability is stored. Then, when generating phrases, 'idea' will be generated half of the times 'the' is generated. This simulates the artist's lyrical style without directly copying lyrics.",
      },
      { type: "image", src: "/blog/lyriclearner/01-markov-chain.png", alt: "" },
      {
        type: "paragraph",
        text: "This Markov Chain hashmap was used to generate lyrics that followed the probability distribution of the artist. Several thousand potential lines were generated for each artist. Finally, these lyrics were tweeted at random intervals via a call to the Twitter API from Java's Maven Framework. Below are some sample tweets. While they weren't actually written by the artists, the lyrics follow the Markov Chain distribution and, as a result, emulate the artists' lyrical style.",
      },
      { type: "image", src: "/blog/lyriclearner/02-generated-lyrics.png", alt: "" },
      { type: "image", src: "/blog/lyriclearner/03-generated-lyrics.png", alt: "" },
      { type: "image", src: "/blog/lyriclearner/04-generated-lyrics.png", alt: "" },
      {
        type: "paragraph",
        text: "The second layer of functionality to LyricLearner was an artist sentiment analysis. Sentiment analysis (performed by the Stanford Natural Language Processing library) enabled me to interpret the level of positivity or negativity of each word. Gauging the sentiment of artist albums over time helped us create insights into artists' lives. This was done by parsing the lyrics from genius, averaging the sentiment of each word, normalizing and scaling the values, and charting each album's sentiment. For example:",
      },
      { type: "image", src: "/blog/lyriclearner/05-sentiment-analysis.png", alt: "" },
      { type: "image", src: "/blog/lyriclearner/06-album-sentiment.png", alt: "" },
      {
        type: "paragraph",
        text: "LyricLearner was a really fun project, combining my interest in algorithms and machine learning with my love for Hip Hop. As One direction could have said,",
      },
      { type: "image", src: "/blog/lyriclearner/07-one-direction.png", alt: "" },
      {
        type: "paragraph",
        text: "Thanks for reading! If you have any questions, or would like to get in contact, you can reach out to me at aruneswara@icloud.com.",
      },
    ],
  },
  {
    _id: "medidata-bringing-the-hospital-to-you",
    slug: "medidata-bringing-the-hospital-to-you",
    title: "MediData: Bringing the Hospital to You",
    description:
      "MediData was a project I created as part of a team in order to make a simple platform to digitally facilitate doctor/patient communication.",
    date: "2020-09-19T23:03:59.727Z",
    readTime: "1 min read",
    sourceUrl: "https://aruneswara.wixsite.com/mysite/post/medidata-bringing-the-hospital-to-you",
    content: [
      {
        type: "paragraph",
        text: "MediData was a project I created as part of a team in order to make a simple platform to digitally facilitate doctor/patient communication, an important convenience and necessity during the COVID-19 pandemic.",
      },
      {
        type: "embed",
        src: "https://5f68f78f-6386-4bff-a17a-b39a61729253.usrfiles.com/html/2b2e4b_d767b483cae16e027c4ea8ac7906fbf4.html",
        title: "MediData project presentation",
      },
      {
        type: "paragraph",
        text: "Here is the link to the prototype website and the Google Sheets with embedded Google scripts that manages the backend portion of the project.",
        links: [
          {
            text: "prototype website",
            url: "https://sites.google.com/view/medidata-1/home",
          },
          {
            text: "Google Sheets with embedded Google scripts that manages the backend portion of the project",
            url: "https://docs.google.com/spreadsheets/d/14qP6NgLQ2VRjSvOU-eSf9w7vvtqpYK227ydFx0sDEfY/edit?usp=sharing",
          },
        ],
      },
      {
        type: "paragraph",
        text: "This project was created for the Star-Hacks Hackathon alongside Kavin Sitsabeshon, Rajiv Swamy, and Ali Farooqi. I focused primarily on the backend programming in Google Scripts, as well as minor modifications to the HTML frontend and pitch deck.",
        links: [
          { text: "Kavin Sitsabeshon", url: "https://www.linkedin.com/in/kavinsitsabeshon/" },
          { text: "Rajiv Swamy", url: "https://www.linkedin.com/in/rajivswamy/" },
          { text: "Ali Farooqi", url: "https://www.linkedin.com/in/ali-farooqi-8136971a5/" },
        ],
      },
    ],
  },
  {
    _id: "a-letter-to-my-future-self",
    slug: "a-letter-to-my-future-self",
    title: "A Letter to My Future Self",
    description:
      "My university's Business Honors program (UT Austin BHP) asked that we write a letter to our future self to be read after the completion of our four years of college.",
    date: "2020-08-29T21:11:29.940Z",
    readTime: "4 min read",
    sourceUrl: "https://aruneswara.wixsite.com/mysite/post/a-letter-to-my-future-self",
    content: [
      { type: "image", src: "/blog/future-self/01-letter.jpeg", alt: "" },
      {
        type: "paragraph",
        text: "My university's Business Honors program (UT Austin BHP) asked that we write a letter to our future self to be read after the completion of our four years of college. Here's mine.",
      },
      { type: "paragraph", text: "Dear Future Arun," },
      {
        type: "paragraph",
        text: "I hope you’re doing well! I’m writing to you in the middle of the Coronavirus pandemic halfway through 2020 – hopefully it’s over by now. This also marks the start of my college career; it has been three days since college started and I've been to all but one of my classes. I know you’re on to better (or at least different) things, but I hope you’ve found an answer to some of the questions I’m worrying about now.",
      },
      {
        type: "paragraph",
        text: "I hope by now that you’ve figured out your career path (no pressure if you haven’t, this isn't something that should be rushed, even if it seems like time's running out) – if you remember how it was back when you were me, it’s hard to make the choice between software engineering/finance/venture capital/quantitative finance etc. Maybe you've found that one of them is especially interesting to you, or that you just dislike one less than the rest. Regardless, make sure you're passionate about what you do - nothing else really matters (even experience for starting a company, since the path to entrepreneurship is so variable). Also, I hope you’re closer to solidifying your path for entrepreneurship – you don’t have to have everything figured out by now, obviously, but practice is always helpful even if it leads to failure in the short term. On that note, don’t underestimate the power of failure – nothing is permanent except the knowledge gained from it. You know as well as I do (hopefully better) that the only scary part of starting a business is what could go wrong. If you don't like a company enough to go all in on it, it isn't time yet. Don't worry, that time will come.",
      },
      {
        type: "paragraph",
        text: "As a person, I’d like to grow by becoming more aware of who I am – my strengths and weaknesses, what I enjoy and despise, and the kind of person I really am. I'm sure you think you know yourself now, but you know as well as I do that you probably don't. As long as you're closer to finding yourself, we can call that success. I hope as I go through college I get more aware of my self-perceptions (especially the ones that are wrong) and I hope you’ve thought about that some more since writing this. I’m sure you’ve made mistakes, which is okay, as long as you (we?) have grown from it. Make mistakes, but never make the same one twice.",
      },
      {
        type: "paragraph",
        text: "I also hope you’ve made new friends – you have great friends, that you should love and trust unconditionally, but there’s always room to grow and to learn new things and new perspectives from others. Trusting others (not with information, which doesn't really matter, but with support and your time) may seem hard, if not impossible, but trust me ­– it’ll turn out fine. If you ever feel you aren’t ready for what’s out there, just remember middle and high school and how much we’ve changed and learned since then; life is fleeting but friends are forever. At the same time, don't worry too much about the details of friendship - the point of friends is that there's an understood connection, not an explicit one. Also, whoever said not to start a business with friends is wrong - they just need two things, in order of increasing importance: trust and passion.",
      },
      {
        type: "paragraph",
        text: "If you haven’t had the college experience you hoped, don’t worry – the 4 years of college is an arbitrary time frame and your life is nowhere near over or different yet. Being prepared professionally and with a strong support group around you is the most important thing I/you can do. Make sure to romanticize the right things in life – not everyone or everything is worth your attention or time. However, just ‘thinking’ about stuff is always worth it, so don’t forget to leave time for that, no matter what that entails. It may seem like a waste of time sometimes, but living in the abstract is necessary to better understand the 'real' world.",
      },
      {
        type: "paragraph",
        text: "I hope that, in these upcoming years, you can work more to find out what you like – if we haven’t figured that out yet, there’s still a lot of time left and I’m sure you have good opportunities lined up. If you have found that, then make sure your focus and drive are behind you – it may seem tough at times but the present becomes the past as fast as the future becomes the present.",
      },
      {
        type: "paragraph",
        text: "Keep reading philosophy, if you still do - it's hard to recreate that feeling of learning something so profound in just a few words. Also, rewatch Season 3 Episode 7 of Rick and Morty again, it's really good.",
      },
      {
        type: "paragraph",
        text: "Finally, I’d like to depart some bits of knowledge I’ve accumulated in high school and before to you once again in hopes that you’ll keep these memories and lessons with you forever. Firstly, be convicted and confident in your beliefs and yourself – the truth is always subjective, so don't worry too much about being wrong. At the same time, don't be afraid to adapt your opinion if you do find a reason to do so. Pursue happiness, not money – they’re rarely, if ever, the same (although there may be some cause and effect). Never worry too much – think back to the things you worried about when you were me – do they really matter now? Life is short, but that doesn’t mean waste it or do things only for short term satisfaction – it means to strive to be better but to smell the roses and enjoy the path there. You may feel like it’s a waste to spend time suffering now for a better tomorrow, but as long as you enjoy the journey, you’ll be in an optimal position now and in the future. The night is darkest just before the dawn - be ready to face hardship but work past the pain and don't dwell in it; there are better things to come. Most of all, take all of these aphorisms with a grain of salt – all rules are made to be broken so there are no steadfast rules. Do what feels right and hope you’re right.",
      },
      { type: "paragraph", text: "Good luck." },
      { type: "paragraph", text: "Arun Eswara" },
      { type: "paragraph", text: "8/29/20" },
    ],
  },
  {
    _id: "bioprotect-a-phased-array-spatial-sensor-for-visual-detection-and-assistance",
    slug: "bioprotect-a-phased-array-spatial-sensor-for-visual-detection-and-assistance",
    title: "BioProtect: A Phased Array Spatial Sensor for Visual Detection and Assistance",
    description: "This project was completed alongside Smaran Velidi and Aditya Vishnubhotla.",
    date: "2020-08-26T01:34:08.750Z",
    readTime: "3 min read",
    sourceUrl:
      "https://aruneswara.wixsite.com/mysite/post/bioprotect-a-phased-array-spatial-sensor-for-visual-detection-and-assistance",
    content: [
      {
        type: "paragraph",
        text: "This project was completed alongside Smaran Velidi and Aditya Vishnubhotla.",
        links: [
          { text: "Smaran Velidi", url: "https://www.linkedin.com/in/smaran-velidi/" },
          {
            text: "Aditya Vishnubhotla",
            url: "https://www.linkedin.com/in/aditya-vishnubhotla-98785217b/",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Those with limited eyesight or complete blindness face various problems, including risks of physical injury, restrictions on daily activities, and negative impact on learning or education.",
      },
      {
        type: "paragraph",
        text: "The white cane is the most common solution, as it is cheap and simple to make. Unfortunately, the white cane (and alternatives like guide dogs) have various problems - they are limited in scope and inefficient to use. The white cane also makes one hand unusable, whereas a guide dog can be extremely expensive.",
      },
      {
        type: "paragraph",
        text: "Most of all, those using visual aids like the white cane or guide dog are subject to social stigma. In this project, my group and I sought to create an integrated/hidden alternative to visual detection with high accuracy and precision.",
      },
      { type: "paragraph", text: "This project had the following engineering goals:" },
      {
        type: "paragraph",
        text: "- Develop an object-detection device that can be both accurate and efficient at detecting nearby objects and notifying the user of their presence",
      },
      {
        type: "paragraph",
        text: "- Restore normal functionality to both hands via a less intrusive and automatically functional device",
      },
      { type: "paragraph", text: "- Create a cheaper visual-aid option for the visually impaired" },
      { type: "paragraph", text: "To reach these goals, our group decided to create the BioProtect system." },
      {
        type: "paragraph",
        text: "The BioProtect vest reads in the surroundings by finding local objects via a phased array of ultrasound sensors and the vector intersections (indicating an object). Then, the user is alerted via the inflation of a pressurized pouch in the relevant direction. For example, if there is an object to the right of the user at mid-chest level, the pressurized pouch on the right size of the user at mid-chest level is to inflate.",
      },
      { type: "paragraph", text: "Below is a schematic of the BioProject vest:" },
      { type: "image", src: "/blog/bioprotect/01-vest-schematic.png", alt: "" },
      { type: "paragraph", text: "Here is an example of the field usage of the BioProtect system:" },
      { type: "image", src: "/blog/bioprotect/02-field-usage.png", alt: "" },
      {
        type: "paragraph",
        text: "Before testing the device, several optimizations were done to the device. The most important optimization to the device were the addition of the pressurized compartments mentioned above. We initially had a verbal system (for example, a speaker would relay to the user the direction and distance of local objects) similar to most other prototypes [1]. However, adding the pressurized compartments proved to be an invaluable decision, as the new system was far more intuitive and less time-sensitive (the user was aware of local objects immediately rather than having to wait for an audio cue).",
        links: [{ text: "[1]", url: "https://link.springer.com/article/10.1007/s40595-016-0075-z" }],
      },
      {
        type: "paragraph",
        text: "Another obstacle to be fixed was accuracy - our initial models either required bulky devices (such as interfacing with an Xbox Kinect) or were too inaccurate to be used successfully. To solve this, we decided upon using a phased array of ultrasound sensors, as described below:",
      },
      { type: "image", src: "/blog/bioprotect/03-ultrasound-array.png", alt: "" },
      {
        type: "paragraph",
        text: "The next optimization, battery interrupts, is described below. This optimization was important to ensure that the device was useable all day long.",
      },
      { type: "image", src: "/blog/bioprotect/04-battery-interrupts.png", alt: "" },
      {
        type: "paragraph",
        text: "Another issue to overcome was biomechanical adaptation - many existing prototypes were unable to cope with changes to the user's gait (which occurs when tired, after injury, due to normal growth during aging, etc.). Our final optimization, as described below, was total biomechanical adaptation:",
      },
      { type: "image", src: "/blog/bioprotect/05-biomechanical-adaptation.png", alt: "" },
      {
        type: "paragraph",
        text: "Two primary modes of data collection and data analysis were mapped - simulated and experimental (physical). To verify the model's feasibility, we first created a CAD model and tested the device accuracy. After those tests were completed, we created a prototype physical model.",
      },
      { type: "image", src: "/blog/bioprotect/06-testing-methods.png", alt: "" },
      {
        type: "paragraph",
        text: "Below are the results for the Simulated and Experimental phases, with the data analysis in the subtitles:",
      },
      { type: "paragraph", text: "Simulated Results" },
      {
        type: "image",
        src: "/blog/bioprotect/07-simulated-results.png",
        alt: "In the simulated trials, a full 360 degrees of detection was achieved via strategic placement of the sensors",
      },
      { type: "paragraph", text: "Experimental Results" },
      {
        type: "image",
        src: "/blog/bioprotect/08-complex-scenarios.png",
        alt: "Even in complex scenarios, objects were always detected with 98%+ accuracy",
      },
      {
        type: "image",
        src: "/blog/bioprotect/09-sensor-accuracy.png",
        alt: "~10 Sensors per 180º view were sufficient for maximum object detection accuracy",
      },
      {
        type: "image",
        src: "/blog/bioprotect/10-training-trials.png",
        alt: "The BioProtect vest is intuitive enough to be used in real-life scenarios within ~100 trials",
      },
      {
        type: "paragraph",
        text: "We also compared BioProtect to an alternative prototype (found here) to determine BioProtect's comparative efficacy:",
        links: [
          {
            text: "found here",
            url: "https://www.researchgate.net/publication/326613331_LIDAR_Assist_Spatial_Sensing_for_the_Visually_Impaired_and_Performance_Analysis",
          },
        ],
      },
      { type: "image", src: "/blog/bioprotect/11-comparison.png", alt: "" },
      { type: "paragraph", text: "From this project, we reached the following conclusions:" },
      {
        type: "paragraph",
        text: "- The Ultrasonic sensors, Kinect sensors, and Pressure pockets were inserted within the design of the vest and custom-fitted to minimize protrusion",
      },
      {
        type: "paragraph",
        text: "- The real-life trials indicated that there was ~97% accuracy in randomly generated scenarios",
      },
      { type: "paragraph", text: "and 95% in complex (testing scenarios)" },
      {
        type: "paragraph",
        text: "- The biomechanical adaptation system mitigated errors by adapting to the specific gait of the user",
      },
      {
        type: "paragraph",
        text: "As a result, the BioProtect vest succeeded in its engineering goal and is a feasible visual aid replacement.",
      },
      { type: "paragraph", text: "The following future research could be conducted to further improve the system:" },
      {
        type: "paragraph",
        text: "- A visual-analysis sensor could be added to the vest, to introduce braille translation capabilities",
      },
      { type: "paragraph", text: "- Incorporating other sensors to increase overall accuracy and field of operation" },
      { type: "paragraph", text: "(Arduino Ultrasonic HC-R04)" },
      {
        type: "paragraph",
        text: "- Could evaluate the viability of the technology in a military setting, to detect threats in",
      },
      { type: "paragraph", text: "object-dense areas with limited vision" },
      {
        type: "paragraph",
        text: "If you'd like, you can view the extended presentation of the project (used at scientific conferences/competitions) here. While this presentation has a more thorough overview, it was conducted prior to experimental testing and does not contain a large portion of the final data.",
        links: [
          {
            text: "If you'd like, you can view the extended presentation of the project (used at scientific conferences/competitions) here. While this presentation has a more thorough overview, it was conducted",
            url: "https://drive.google.com/file/d/1l46PaXgA-zsmTmpfuFoJBh1vETtdSTtt/view?usp=sharing",
          },
          {
            text: "prior to experimental testing",
            url: "https://drive.google.com/file/d/1l46PaXgA-zsmTmpfuFoJBh1vETtdSTtt/view?usp=sharing",
          },
          {
            text: "and does not contain a large portion of the final data.",
            url: "https://drive.google.com/file/d/1l46PaXgA-zsmTmpfuFoJBh1vETtdSTtt/view?usp=sharing",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Thanks For Reading! If you have any questions, or would like to get in contact, you can reach out to me at aruneswara@icloud.com.",
      },
    ],
  },
  {
    _id: "an-open-letter-to-incoming-high-school-seniors",
    slug: "an-open-letter-to-incoming-high-school-seniors",
    title: "An Open Letter to Incoming High School Seniors",
    description:
      "Dear Juniors, Congratulations on making it this far! While I’m sure you’ve had to push yourself just to get here, I can’t promise it’s any easier from here.",
    date: "2020-05-09T15:10:53.728Z",
    readTime: "4 min read",
    sourceUrl:
      "https://aruneswara.wixsite.com/mysite/post/an-open-letter-to-incoming-high-school-seniors",
    content: [
      { type: "image", src: "/blog/high-school-seniors/01-letter.jpeg", alt: "" },
      { type: "paragraph", text: "Dear Juniors," },
      {
        type: "paragraph",
        text: "Congratulations on making it this far! While I’m sure you’ve had to push yourself just to get here, I can’t promise it’s any easier from here. It’s not more difficult, per se — you’re probably well acquainted with the intellectual rigor of IB/AP courses and school in general. However, from English (Literature at my school) to college admissions to your other higher level courses, you will have a lot of work to juggle, probably more than you’ve ever had before. At the same time, this is your senior year — don’t forget to enjoy it before it slips away. With all that in mind, I can provide a few pointers:",
      },
      {
        type: "list",
        items: [
          "I’m writing this on May 20th, 2020, so I have no idea how the coronavirus still affects you. But I will tell you this — if it’s still prevalent, and you’re still home, try to use your time productively at least a little bit. While it’s unfair to expect you not to watch a lot of TV or sleep during weird hours, you will definitely have a lot of free time. Don’t let yourself be bored — do something mindful, even if it’s not genuinely educational. Also, imagine how much this must suck for me, sitting at home when I should be at college.",
          "Yes, your GPA does matter, and it still matters how you do in your senior year — but you should still take that with a grain of salt. While your rank will be an important part of your admissions, there are a lot of other important aspects of your life, especially now. Hindsight is 20/20, so kicking yourself for the past will not help you. If your grades are good, you should be happy. If not, well, there’s not much you can do about it now, so there’s no point in worrying.",
          "On that note, now is the best time to focus on your college application. I’m not sure when you’re reading this letter, but trust me — leaving your essays for the last week really really doesn’t work. No matter how good you think your hastily put together writing is, it would’ve been a million times better if you had adequate time to brainstorm.",
          "If your senior year grades are bad, you probably deserve it, even in English. Yes, your grades may go down, but get used to it — rhetorical analysis is important, and an easy A in a senior year course would probably just cement your apathy. Also, some of the lessons are genuinely interesting — if you like what you’re doing, it won’t seem like such a chore, even if you have to pretend to enjoy it.",
          "Be open-minded — to new people, new experiences, and new ideas. It’s easy to “otherize” things you don’t like and just ignore them, but really think about something before you dismiss it. That applies to a lot of things, but it’s especially important that you don’t just dismiss what you do in class. Really try to enjoy what you have to do — you have to do it regardless of whether or not you like it, so at least make it fun.",
          "When I said enjoy your senior year, I really meant it. As soon as you finish your college apps, you have nothing to worry about. Your extracurricular and college-related obligations are fulfilled, and your grades will only impact you if they drop significantly. Now, you can go to school with the “correct” mindset — to genuinely learn, not learn for a test or a grade. So, spend your time wisely. And in this case, wisely (maybe surprisingly) doesn’t mean with your head in a textbook. Stay after school, do stuff with your friends, go out to eat more (try sweet tea, it’s amazing), and just stop stressing. Your whole life will be full of stress — it really doesn’t get any easier from here on out — so relax while you can.",
          "I’ve heard so many times, from so many people, to not worry about the future — “your plan will change so many times, don’t stress about what you ‘think’ will happen.” However, I never genuinely believed that until recently, when I’ve had to consider so many options about the future, in regards to colleges, majors, etc.. So, I’ll give you the most valuable piece of advice I possibly can — focus on your goals, not the path. To paraphrase the naked man in How I Met Your Mother, “as long as you do everything to achieve your goals, the path will fall into place.”",
          "Enjoy the little things that you have left — go to homecoming and prom, maybe even some of the pep rallies. Most importantly, don’t fear the goodbyes. You’ll meet a lot of people in your life, and you’ll have friends just as good as you have now in the future too. Rather, enjoy the time you have with your friends now, and make the goodbyes short. If they’re real friends, you’ll stay in touch regardless.",
          "If you’re ever bored with school, or upset about the fact that you still have to pass to avoid being rescinded, remember what the goal of school is. You’re not learning because every single thing you learn will actually matter in the future — you’re learning because learning how to learn is the most important thing you can learn. So, don’t just give up now — adopting poor study habits now will erase everything you’ve done in the last 4 years and make starting college that much harder. Adapting to college is difficult, so don’t make it harder than it has to be by forgetting how to learn.",
        ],
      },
      {
        type: "paragraph",
        text: "If you’ve actually read this far, good job! If you just skipped here from the intro, then I don’t blame you — you probably have a lot on your plate without having to read a bunch of letters. Regardless, the lessons you learn from experience and the lessons you learn yourself are the most important.",
      },
      { type: "paragraph", text: "Good luck." },
      { type: "paragraph", text: "Sincerely," },
      { type: "paragraph", text: "Arun Eswara" },
      {
        type: "paragraph",
        text: "P.S. Enjoyed reading this? Reach out to me via email or LinkedIn — I’m always open to connect!",
      },
      {
        type: "paragraph",
        text: "aruneswara@icloud.com or linkedin.com/in/aruneswara",
        links: [{ text: "aruneswara@icloud.com", url: "mailto:aruneswara@icloud.com" }],
      },
    ],
  },
];

export default additionalBlogPosts;
