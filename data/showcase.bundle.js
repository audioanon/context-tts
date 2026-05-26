window.SHOWCASE_PAYLOAD = {
  "title": "LLM Eval Audio Showcase",
  "generatedAt": "2026-05-26T02:49:31.140771+00:00",
  "sections": [
    {
      "id": "judge",
      "label": "LLM Judge Eval",
      "kind": "judge",
      "description": "Showcase items selected by judge_output.presentation_flag (best_case / worst_case).",
      "datasets": [
        {
          "key": "ci",
          "label": "Communicative Intent",
          "description": "Prosody shaped by conversational intent and contrast.",
          "totalExamplesLoaded": 1192,
          "presentationCounts": {
            "best_case": 162,
            "worst_case": 616,
            "none": 408,
            "missing": 6
          },
          "showcaseCount": 10,
          "examples": [
            {
              "id": "01-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-best-case",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "t_04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d",
              "presentationFlag": "best_case",
              "rating": 5,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio perfectly captures the contrastive stress on 'didn't' and 'did', matching the conversational intent and prosody of the reference.",
              "judgeResponse": {
                "rating": 5,
                "transcript_match": true,
                "explanation": "The generated audio perfectly captures the contrastive stress on 'didn't' and 'did', matching the conversational intent and prosody of the reference.",
                "presentation_flag": "best_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The audio perfectly captures the contrastive stress on 'didn't' and 'did', correctly realizing the intended information structure without any WER issues."
              },
              "conversationId": "t_04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "B",
              "targetSpeakerId": null,
              "targetText": "I didn't. I did see the ABC would not let him retire at 70!",
              "contextDependency": {
                "reason": "Without the preceding question asking if B saw a specific thing, 'I didn't' lacks an antecedent, and the contrastive nature of the follow-up 'I did see' is completely lost.",
                "failure_case": "A default TTS might emphasize 'ABC' or 'retire' and leave the auxiliary verb 'did' unaccented, missing the crucial pragmatic contrast of 'I didn't see X, but I DID see Y'."
              },
              "prosodyFocus": {
                "key_words": [
                  "didn't",
                  "did"
                ],
                "prosodic_features": "contrastive stress on 'didn't' and 'did', full falling intonation on 'didn't', brief pause and pitch reset before 'I did see'",
                "explanation": "The utterance requires contrastive stress to highlight the difference between the commercial B didn't see and the fact B actually did see. A neutral reading would miss this parallel structure."
              },
              "communicativeIntent": {
                "category": "statement",
                "subcategory": "assertion",
                "justification": "B directly answers A's yes/no question with a negative, then immediately follows with an affirmative statement about what they DID see, creating a strong informational contrast."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/ci/01-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-best-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/ci/01-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-best-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "What do you think about Keith Jacksons death?",
                  "emotion": "Sad",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/01-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-best-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "It's sad. I wonder how many people grew up hearing his voice?",
                  "emotion": "Sad",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/01-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-best-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "I imagine this number in the millions taking into account he had a 54 year broadcasting carreer, so sad, but he was old.",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/01-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-best-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "I like that he used this phrase alot Whoa, Nellie!",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/01-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-best-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "That was a good phrase I liked it as well, did you see the beer comercial, the one in which he used this phrase?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/01-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-best-case/context_turn_04.wav"
                }
              ]
            },
            {
              "id": "02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "t_f6789857-c30c-423a-bdf5-d6207dc7db9d",
              "presentationFlag": "best_case",
              "rating": 5,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio perfectly matches the target transcript and perfectly captures the casual, confirmation-seeking rising intonation of the reference.",
              "judgeResponse": {
                "rating": 5,
                "transcript_match": true,
                "explanation": "The generated audio perfectly matches the target transcript and perfectly captures the casual, confirmation-seeking rising intonation of the reference.",
                "presentation_flag": "best_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "Accurate transcription with clear prominence on 'news' and a distinct rising boundary tone on 'right', perfectly conveying the intended confirmation question."
              },
              "conversationId": "t_f6789857-c30c-423a-bdf5-d6207dc7db9d",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "B",
              "targetSpeakerId": null,
              "targetText": "The one that gives the news in latin right?",
              "contextDependency": {
                "reason": "Without interrogative syntax (e.g., 'Is that the one...'), the phrase relies entirely on the final rising contour to act as a question.",
                "failure_case": "A context-unaware TTS might render this as a flat statement, making it sound like B is stating a fact rather than asking A to confirm."
              },
              "prosodyFocus": {
                "key_words": [
                  "news",
                  "right"
                ],
                "prosodic_features": "high pitch accent on 'news', continuous rising boundary tone on 'right'",
                "explanation": "The rising intonation on 'right' is essential to shift the declarative structure into an interrogative confirmation check."
              },
              "communicativeIntent": {
                "category": "Question",
                "subcategory": "confirmation-seeking",
                "justification": "B believes they know the specific program A is referring to and appends 'right?' to a declarative phrase to seek confirmation."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "Do you watch or keep up on much basketball?It's definitely a team sport I didn't play much of ",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "I watch it from time to time as I enjoy it. do you have a favorite player?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "I haven't really had a favorite since Michael Jordan. The guy who invented the sport was a coach at the University of Kansas, and the only losing one at that",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "Go figure. do you know who kareem abdul-jabaar was?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "I heard he was good at dunking. It was banned from college basketball for over ten years from how frequently he used it",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "yeah so strange. do you know what the nz basketball team is called?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 6,
                  "text": "Do they have an official name, or are you referencing the nickname Tall Blacks?",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 7,
                  "text": "Yeah I am not too sure but that is certainly what they are called",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 8,
                  "text": "Apparently the Supreme Court enjoys a game of basketball too. On the top floor of the building they shoot hoops at what has been called \"the highest court in the land.\"",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 9,
                  "text": "Good for them, how handy to play there at work. ",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_09.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 10,
                  "text": "Many of my friends growing up were big basketball and footballs fans. The highest paid state employee in 39 of the 50 states coaches one of those two states at the college level",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_10.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 11,
                  "text": "I guess it pays to be a coach then. the players themselves also get paid quite a bit too. do you listen to the radio much?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_11.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 12,
                  "text": "I don't, actually, but I use other things that utilize radio waves. It's pretty crazy how the sound can be extracted and transformed over miles",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 13,
                  "text": "Actually if you turn it to am you can catch Jupiter's storms",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_13.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 14,
                  "text": "Those are some strong storms! Considering how many artists are from Canada, I wouldn't mind tuning into stations that have to play at least 40% Canadian music by law",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_14.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 15,
                  "text": "Yes very true. do you know how soldiers used to make radios during WWII?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_15.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 16,
                  "text": "From what I remember, all it would take is a pencil and razorblade, though I'm not sure how it would make sound",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_16.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 17,
                  "text": "I do not even know what channels they would be able to listen to",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_17.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 18,
                  "text": "If they were in Europe, it would be interesting if they could pick up Finnish stations. One of them has a new program in classical Latin",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_18.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 19,
                  "text": "The one that gives the news in latin right?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/02-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-best-case/context_turn_19.wav"
                }
              ]
            },
            {
              "id": "03-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-best-case",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "t_c0f787a2-1a4a-47c3-95aa-50b5567504e8",
              "presentationFlag": "best_case",
              "rating": 5,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio perfectly captures the empathetic exclamation on 'I know!' with a high falling pitch and places excellent emphatic stress on 'milk', matching the reference's intent beautifully.",
              "judgeResponse": {
                "rating": 5,
                "transcript_match": true,
                "explanation": "The generated audio perfectly captures the empathetic exclamation on 'I know!' with a high falling pitch and places excellent emphatic stress on 'milk', matching the reference's intent beautifully.",
                "presentation_flag": "best_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The audio perfectly matches the transcript and hypothesis, featuring an elongated, exclamatory pitch fall on 'know' and strong emphasis on 'milk'."
              },
              "conversationId": "t_c0f787a2-1a4a-47c3-95aa-50b5567504e8",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "B",
              "targetSpeakerId": null,
              "targetText": "I know! They sure do milk it for all its worth.",
              "contextDependency": {
                "reason": "The phrase 'I know' is highly ambiguous in isolation and is often just a factual declarative. A's prior complaint provides the critical trigger for the empathetic agreement reading.",
                "failure_case": "A baseline TTS might render 'I know' with a flat, neutral declarative tone, missing the enthusiastic solidarity the context demands."
              },
              "prosodyFocus": {
                "key_words": [
                  "know",
                  "milk"
                ],
                "prosodic_features": "high initial pitch on 'know' with an elongated exclamatory fall, and strong emphatic stress on 'milk'",
                "explanation": "The strong affective prosody on 'know' transforms what is structurally a standard declarative into an expression of vigorous, shared sentiment."
              },
              "communicativeIntent": {
                "category": "Agreement",
                "subcategory": "strong-agreement",
                "justification": "A uses a rhetorical question to express frustration. B's 'I know!' serves as an empathetic validation of A's opinion, rather than a literal claim to prior knowledge."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/ci/03-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-best-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/ci/03-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-best-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "Hi are you a football fan?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/03-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-best-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "Hi, no not really.  Are you?",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/03-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-best-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "I watch it during the season because I don't have anything better to do.  Especially for the Monday and Thursday night games.",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/03-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-best-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "I get that, especially when there is only 11 minutes of action in a game.  I guess the rest is commercials?",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/03-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-best-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "Isn't that crazy that it's such a short amount of time for something they drag out of 3 hours?",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/03-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-best-case/context_turn_04.wav"
                }
              ]
            },
            {
              "id": "04-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "t_50747dbe-ee88-437b-a987-e15b091f2206",
              "presentationFlag": "best_case",
              "rating": 5,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio perfectly matches the transcript and effectively captures the genuine surprise and excitement of the reference through appropriate pitch excursions and pacing.",
              "judgeResponse": {
                "rating": 5,
                "transcript_match": true,
                "explanation": "The generated audio perfectly matches the transcript and effectively captures the genuine surprise and excitement of the reference through appropriate pitch excursions and pacing.",
                "presentation_flag": "best_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The audio correctly realizes the requested excited prosody, with appropriate pitch excursions on 'such', 'what', and 'who' conveying genuine surprise rather than skepticism."
              },
              "conversationId": "t_50747dbe-ee88-437b-a987-e15b091f2206",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "A",
              "targetSpeakerId": null,
              "targetText": "There is such a thing? WHat a change of careers. WHo is it?",
              "contextDependency": {
                "reason": "In isolation, 'There is such a thing?' could easily be interpreted as a skeptical challenge to a dubious claim. Context anchors it as delighted surprise over a trivia fact.",
                "failure_case": "A context-unaware TTS might generate a flat, literal, or doubtful question contour, completely missing the excitement and conversational engagement."
              },
              "prosodyFocus": {
                "key_words": [
                  "such",
                  "WHat",
                  "WHo"
                ],
                "prosodic_features": "wide pitch excursion on 'such', exclamation-like falling intonation on 'change of careers', and high pitch on 'WHo' with a rapid, excited tempo",
                "explanation": "To convey genuine amazement, 'such a thing' needs wide F0 movement. Without it, the question could sound cynical, dismissive, or deadpan."
              },
              "communicativeIntent": {
                "category": "reaction",
                "subcategory": "surprise",
                "justification": "B introduces a highly unexpected and amusing fact about a coach being a former rocket scientist. A's response is an expression of genuine astonishment and curiosity, rather than a skeptical dismissal or literal question of existence."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/ci/04-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/ci/04-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "do you watch the NFL?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/04-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "I sure do. How about yourself?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/04-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "Me too. Did you know women can play in the NFL too?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/04-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "Did not know there, are there limitations though?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/04-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "Nope as long as you qualify, you are allowed to play",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/04-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "Nice. Did you hear they are placing tracking chips on the players now?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/04-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 6,
                  "text": "Nice, are they doing that for a particular reason?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/04-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 7,
                  "text": "Yes they are collecting stuff such as velocity and rotation and a bunch of others",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/04-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 8,
                  "text": "Nice I hope they can use those to make the game safer too",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/04-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 9,
                  "text": "I hope so too. Did you know there is a coach who used to be a rocket scientist",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/04-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_09.wav"
                }
              ]
            },
            {
              "id": "05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "t_50747dbe-ee88-437b-a987-e15b091f2206",
              "presentationFlag": "best_case",
              "rating": 5,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio perfectly captures the flat, rapid delivery of the evaluation and smoothly transitions into the new question with an appropriate pitch reset.",
              "judgeResponse": {
                "rating": 5,
                "transcript_match": true,
                "explanation": "The generated audio perfectly captures the flat, rapid delivery of the evaluation and smoothly transitions into the new question with an appropriate pitch reset.",
                "presentation_flag": "best_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "Transcript is accurate. The audio successfully uses a flat, compressed pitch for 'Yeah no surprise there', followed by a clear pitch reset for the question."
              },
              "conversationId": "t_50747dbe-ee88-437b-a987-e15b091f2206",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "A",
              "targetSpeakerId": null,
              "targetText": "Yeah no surprise there. Do you know what the highest score in college football is?",
              "contextDependency": {
                "reason": "The phrase evaluates B's specific previous claim. Without the context showing it as a transitional topic-closer, the evaluation might be read with undue emphasis.",
                "failure_case": "TTS might read 'no surprise' with a surprised or dramatic contour, entirely missing the deadpan, dismissive pragmatics that facilitate the topic shift."
              },
              "prosodyFocus": {
                "key_words": [
                  "Yeah",
                  "surprise",
                  "Do"
                ],
                "prosodic_features": "low pitch and compressed pitch range on 'Yeah no surprise there', rapid tempo, followed by a pitch reset and upward inflection on 'Do you know'",
                "explanation": "The flat, rapid delivery of the first sentence signals that the info is unsurprising, which contrasts with the engaged, higher-pitched start of the new question."
              },
              "communicativeIntent": {
                "category": "statement",
                "subcategory": "evaluation",
                "justification": "A evaluates B's statement about coaches' pay as completely expected. This mundane evaluation serves to close the current conversational thread before rapidly pivoting to a new trivia question."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "do you watch the NFL?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "I sure do. How about yourself?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "Me too. Did you know women can play in the NFL too?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "Did not know there, are there limitations though?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "Nope as long as you qualify, you are allowed to play",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "Nice. Did you hear they are placing tracking chips on the players now?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 6,
                  "text": "Nice, are they doing that for a particular reason?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 7,
                  "text": "Yes they are collecting stuff such as velocity and rotation and a bunch of others",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 8,
                  "text": "Nice I hope they can use those to make the game safer too",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 9,
                  "text": "I hope so too. Did you know there is a coach who used to be a rocket scientist",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_09.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 10,
                  "text": "There is such a thing? WHat a change of careers. WHo is it?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_10.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 11,
                  "text": "It is Matt Patricia and he graduated from a school that had tons of math symbols in the name",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_11.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 12,
                  "text": "Nice. Did you know U of Iowa painted the visitor locker room pink?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 13,
                  "text": "I wonder if that is supposed to have some effect on the players",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_13.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 14,
                  "text": "I am not sure. In the 60s bowlers used to make more than NFL players",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_14.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 15,
                  "text": "Yeah I guess it was a more popular game back then. Their coaches are the highest paid people",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/05-t-50747dbe-ee88-437b-a987-e15b091f2206-best-case/context_turn_15.wav"
                }
              ]
            },
            {
              "id": "06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "t_04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d",
              "presentationFlag": "worst_case",
              "rating": 2,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio delivers 'It is!' with a flat, matter-of-fact tone, completely missing the enthusiastic agreement of the reference and falling into the predicted failure case.",
              "judgeResponse": {
                "rating": 2,
                "transcript_match": true,
                "explanation": "The generated audio delivers 'It is!' with a flat, matter-of-fact tone, completely missing the enthusiastic agreement of the reference and falling into the predicted failure case.",
                "presentation_flag": "worst_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "No WER issues. The target correctly places strong nuclear stress and elongation on 'is' to confirm the previous statement, followed by appropriate emphasis on 'love'."
              },
              "conversationId": "t_04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "A",
              "targetSpeakerId": null,
              "targetText": "It is! I love it, well I love all sports, and theres also a basketball court on the US supreme court building.",
              "contextDependency": {
                "reason": "In isolation, 'It is!' is highly ambiguous; it could easily be a defensive contradiction to a negative claim (e.g., 'It's not popular' -> 'It IS!'). The context of B's understated guess locks it into being a confirming, joyful agreement.",
                "failure_case": "Without context, a TTS engine might render 'It is!' with a defensive, argumentative contour or a flat tone, entirely missing the enthusiastic alignment with B's statement."
              },
              "prosodyFocus": {
                "key_words": [
                  "is",
                  "love"
                ],
                "prosodic_features": "high pitch, heavy nuclear stress and elongated vowel on 'is', enthusiastic and bright vocal quality, fast tempo",
                "explanation": "To convey enthusiastic agreement with an understatement, 'is' needs a strong nuclear accent and bright affect."
              },
              "communicativeIntent": {
                "category": "agreement",
                "subcategory": "strong-agreement",
                "justification": "B makes a deliberate, mild understatement ('I guess it is a pretty popular sport'). A's 'It is!' strongly and enthusiastically confirms this assessment before expanding on it."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "What do you think about Keith Jacksons death?",
                  "emotion": "Sad",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "It's sad. I wonder how many people grew up hearing his voice?",
                  "emotion": "Sad",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "I imagine this number in the millions taking into account he had a 54 year broadcasting carreer, so sad, but he was old.",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "I like that he used this phrase alot Whoa, Nellie!",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "That was a good phrase I liked it as well, did you see the beer comercial, the one in which he used this phrase?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "I didn't. I did see the ABC would not let him retire at 70!",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 6,
                  "text": "Yeah I think he ended his carreer in 2006, he got lured and decided to stay, he had a great voice.",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 7,
                  "text": "He was also a marine. Looks like he had been calling games since he was young. ",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 8,
                  "text": "Wow this guy sure is full with suprises, he didnt only call football games but also pro basketball games as well as other sports.",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 9,
                  "text": "Crazy busy it seems. He didn't say anything when Woody Hayes punched a clemson player either!",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_09.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 10,
                  "text": "Yeah I heard he was criticized because of this, wonder why he did that, maybe he had it coming. ",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_10.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 11,
                  "text": "I don't think he saw the punch. He also won an Emmy!",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_11.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 12,
                  "text": "Do you happen to know why he won the emmy?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 13,
                  "text": "apparently for the work he did calling the games. He was inducted into the sportscasters hall of fame too.",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_13.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 14,
                  "text": "Yeah I can see why, the guy has a big resume its sad that his wife and children are left behind, as well as three grandchildren, they must be crying a lot.",
                  "emotion": "Sad",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_14.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 15,
                  "text": "probably so. Snoop dogg wrote a fight song for his son's high school football team.",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_15.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 16,
                  "text": "Thats nice from Snoop Dogg, can you tell me more about that song?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_16.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 17,
                  "text": "no, it doesn't say anything more about it. Sorry. I can tell you this though. The highest paid across all u.s. department of defense employees are three football coaches of the service branch teams",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_17.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 18,
                  "text": "Oh I see I will have to google it then, and they must have a good salary then, the inventor of basketball was a bad coach.",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_18.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 19,
                  "text": "14 of the world's 25 largest stadiums belong to american college football teams! I guess it is a pretty popular sport.",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/06-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-worst-case/context_turn_19.wav"
                }
              ]
            },
            {
              "id": "07-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-worst-case",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "t_f6789857-c30c-423a-bdf5-d6207dc7db9d",
              "presentationFlag": "worst_case",
              "rating": 2,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio uses a terminal rising pitch, turning an alternative question into a yes/no question, which exactly matches the expected failure case.",
              "judgeResponse": {
                "rating": 2,
                "transcript_match": true,
                "explanation": "The generated audio uses a terminal rising pitch, turning an alternative question into a yes/no question, which exactly matches the expected failure case.",
                "presentation_flag": "worst_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The audio perfectly executes the alternative question prosody with a clear rise on 'name', a pause, and a terminal fall on 'Tall Blacks'."
              },
              "conversationId": "t_f6789857-c30c-423a-bdf5-d6207dc7db9d",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "A",
              "targetSpeakerId": null,
              "targetText": "Do they have an official name, or are you referencing the nickname Tall Blacks?",
              "contextDependency": {
                "reason": "The sentence structure can be read either as a polar (yes/no) question or an alternative (either/or) question. The context of narrowing down B's query demands the alternative interpretation.",
                "failure_case": "If spoken with a terminal rising pitch (like a standard yes/no question), A would sound like they are merely asking if either fact is true, rather than asking B to choose between them."
              },
              "prosodyFocus": {
                "key_words": [
                  "name",
                  "Blacks"
                ],
                "prosodic_features": "rising pitch on 'name', brief pause at the comma, falling pitch on 'Tall Blacks'",
                "explanation": "This rise-fall pattern is the hallmark of an alternative question, signaling to the listener that they must choose between the two options."
              },
              "communicativeIntent": {
                "category": "Grounding",
                "subcategory": "clarification",
                "justification": "Instead of answering directly, A offers two exclusive choices to clarify the specific scope of B's question."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/ci/07-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-worst-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/ci/07-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-worst-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "Do you watch or keep up on much basketball?It's definitely a team sport I didn't play much of ",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/07-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-worst-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "I watch it from time to time as I enjoy it. do you have a favorite player?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/07-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-worst-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "I haven't really had a favorite since Michael Jordan. The guy who invented the sport was a coach at the University of Kansas, and the only losing one at that",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/07-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-worst-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "Go figure. do you know who kareem abdul-jabaar was?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/07-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-worst-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "I heard he was good at dunking. It was banned from college basketball for over ten years from how frequently he used it",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/07-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-worst-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "yeah so strange. do you know what the nz basketball team is called?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/07-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-worst-case/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 6,
                  "text": "Do they have an official name, or are you referencing the nickname Tall Blacks?",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/07-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-worst-case/context_turn_06.wav"
                }
              ]
            },
            {
              "id": "08-t-36066ee7-42fb-413c-bce1-25a6933b938a-worst-case",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "t_36066ee7-42fb-413c-bce1-25a6933b938a",
              "presentationFlag": "worst_case",
              "rating": 2,
              "transcriptMatch": true,
              "judgeExplanation": "Transcript is correct, but the generated audio falls into the exact failure case, delivering a low-energy, flat 'That's right' that lacks the strong, confident agreement and lively pacing of the reference.",
              "judgeResponse": {
                "rating": 2,
                "transcript_match": true,
                "explanation": "Transcript is correct, but the generated audio falls into the exact failure case, delivering a low-energy, flat 'That's right' that lacks the strong, confident agreement and lively pacing of the reference.",
                "presentation_flag": "worst_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The audio perfectly matches the transcript and successfully realizes the hypothesis, featuring a confident, falling nuclear accent on 'right' and clear emphatic stress on 'rare'."
              },
              "conversationId": "t_36066ee7-42fb-413c-bce1-25a6933b938a",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "B",
              "targetSpeakerId": null,
              "targetText": "That's right.  Green Ellis is a rare player for sure just like Kareem Abdul.  His dominant use of the dunk got the shot banned from college basketball for over a decade!",
              "contextDependency": {
                "reason": "'That's right' can be a perfunctory backchannel, filler, or a strong endorsement. A's prior specific claim requires B to respond with genuine, confirming agreement.",
                "failure_case": "A context-unaware TTS may produce a low-energy, flat 'That's right', which would sound dismissive or uninterested and fail to convey the intended enthusiastic agreement."
              },
              "prosodyFocus": {
                "key_words": [
                  "right",
                  "rare"
                ],
                "prosodic_features": "full nuclear accent and confident falling boundary tone on 'right', emphatic stress and slightly increased volume on 'rare'",
                "explanation": "Strong accentuation on 'right' is required to convey definitive agreement. Without it, the phrase becomes a weak, passive backchannel."
              },
              "communicativeIntent": {
                "category": "Agreement",
                "subcategory": "strong-agreement",
                "justification": "A introduces a strong factual statement about a player never fumbling. B emphatically agrees with this assessment before expanding on it, demonstrating full endorsement rather than simple acknowledgment."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/ci/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-worst-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/ci/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-worst-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "Have you heard of Keith Jackson?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-worst-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "Yes, he is the voice of college football right?  Do you know what broadcast he was on?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-worst-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "He did Saturday afternoon broadcasts on ABC. Seemed he had a long fulfilling life. He was 89.",
                  "emotion": "Sad",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-worst-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "I do recall him covering a wide variety of sports for radio and television.  Do you recall what he would call the linemen guards?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-worst-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "He had a lot of funny terminology. Like a \"bantam rooster\" and \"Whoa Nellie!\"",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-worst-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "He was a very funny and interesting man.  Something else that is funny is the University of Iowa painted the visiting locker room pink.  I wonder what the visiting football teams thought about that.  ",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-worst-case/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 6,
                  "text": "Yeah it was probably before pink became popular for professional football players to support breast cancer",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-worst-case/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 7,
                  "text": "Do you watch a lot of football?",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-worst-case/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 8,
                  "text": "Not really. How about you? I know that football has really grown in popularity. In the 60s, top bowlers made twice as much as football stars.",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-worst-case/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 9,
                  "text": "Yes.  I am a big fan.  I love researching about the history of football.  I just read the other day that in 1916, the highest score ever in a football game was 222 to 0.  Georgia Tech vs. Cumberland.  We don't see such a high number like this.  ",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-worst-case/context_turn_09.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 10,
                  "text": "Wow! Probably would not have been the case if Benjarvus Green Ellis was on their team. He has never fumbled the ball.",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-worst-case/context_turn_10.wav"
                }
              ]
            },
            {
              "id": "09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "t_c41223cb-1b3d-4a2e-9a3f-1ad884b4a073",
              "presentationFlag": "worst_case",
              "rating": 2,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio is slow, robotic, and lacks the fast, enthusiastic energy of the reference, matching the exact failure case of a flat, disjointed delivery.",
              "judgeResponse": {
                "rating": 2,
                "transcript_match": true,
                "explanation": "The generated audio is slow, robotic, and lacks the fast, enthusiastic energy of the reference, matching the exact failure case of a flat, disjointed delivery.",
                "presentation_flag": "worst_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The audio accurately conveys the expected enthusiastic tone, functioning as a supportive backchannel on 'no doubt' and appropriately placing strong emphasis on 'everywhere'."
              },
              "conversationId": "t_c41223cb-1b3d-4a2e-9a3f-1ad884b4a073",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "A",
              "targetSpeakerId": null,
              "targetText": "no doubt, cats are everywhere!",
              "contextDependency": {
                "reason": "In isolation, 'no doubt' could be interpreted defensively, literally, or as a hesitant admission. The context makes it an enthusiastic, lighthearted endorsement of B's alternative solution.",
                "failure_case": "A default TTS might read 'no doubt' with a slow, flat tone, making it sound overly literal or dismissive, rather than a supportive conversational backchannel."
              },
              "prosodyFocus": {
                "key_words": [
                  "no doubt",
                  "everywhere"
                ],
                "prosodic_features": "fast tempo and pitch fall on 'no doubt', enthusiastic energy, strong pitch accent on 'everywhere'",
                "explanation": "'no doubt' acts as a quick, affirmative conversational particle here, requiring a solid affirmative contour, followed by emphasis on 'everywhere' to validate the logic of B's point."
              },
              "communicativeIntent": {
                "category": "agreement",
                "subcategory": "strong-agreement",
                "justification": "Speaker B suggests 'just get a cat' as a practical alternative to paying to play with them. A uses 'no doubt' to enthusiastically endorse B's pragmatic joke before adding supporting context."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/ci/09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/ci/09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "Hi. I didn't know that benjarvus green-ellis never had a fumble.  Impressive!",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "I know, right? I thought it was weird how the cheerleaders arent allowed to eat in the same restaurants as the nfl players.",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "yeah, that is bizarre.  Iowa's visiting locker room is pink.  Strange",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "I wonder if that was meant to try to demoralize the players",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "Seems like it would work lol.  ",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "I was shocked that the highest score in a football game was 222... THATS CRAZY!",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 6,
                  "text": "No doubt.  And the other team was shut out!  Also, bowlers used to make more than football players.  That's changed!",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 7,
                  "text": "Yea it has... could you imagine if bowlers were paid more than nfl players now? They would make average 6-12 million a year for bowling lol",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 8,
                  "text": "That'd be nuts!  An NFL game only has 11 minutes of gameplay...I never would have guessed that",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 9,
                  "text": "I already knew that, which is why I get so frustrated with how long a game takes :(",
                  "emotion": "Disgusted",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_09.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 10,
                  "text": "Yeah, I can imagine that would be frustrating.  I usually only watch the super bowl and that game takes forever!",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_10.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 11,
                  "text": "I thought it was pretty cool that the cat in the opening scene of the Godfather, was just a stray. Chances are that was an unplanned scene.",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_11.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 12,
                  "text": "I'd bet that, too.  So, in asia you can pay to play with cats...now that's weird!",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 13,
                  "text": "I think its a waste of money lol just get a cat",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/09-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_13.wav"
                }
              ]
            },
            {
              "id": "10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "t_c41223cb-1b3d-4a2e-9a3f-1ad884b4a073",
              "presentationFlag": "worst_case",
              "rating": 2,
              "transcriptMatch": true,
              "judgeExplanation": "The transcript is accurate, but the generated prosody is flat and declarative, completely missing the emphatic disbelief and shared astonishment of the reference.",
              "judgeResponse": {
                "rating": 2,
                "transcript_match": true,
                "explanation": "The transcript is accurate, but the generated prosody is flat and declarative, completely missing the emphatic disbelief and shared astonishment of the reference.",
                "presentation_flag": "worst_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The audio places a strong, emphatic pitch accent on 'cannot' with a slower, marveling tempo, perfectly conveying the shared disbelief required by the context."
              },
              "conversationId": "t_c41223cb-1b3d-4a2e-9a3f-1ad884b4a073",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "A",
              "targetSpeakerId": null,
              "targetText": "That's basically sleeping 16 hours a day...I cannot imagine that",
              "contextDependency": {
                "reason": "The phrase 'I cannot imagine that' can easily function as a polite refusal or a literal statement of limited mental capacity. Here, it is an emphatic expression of shared conversational disbelief triggered by B.",
                "failure_case": "A TTS system might read the sentence with a flat, literal, or declarative tone, completely missing the conversational echo and the sense of marvel demanded by B's prompt."
              },
              "prosodyFocus": {
                "key_words": [
                  "cannot",
                  "imagine"
                ],
                "prosodic_features": "emphatic nuclear accent on 'cannot', elongated syllables, slower marveling tempo",
                "explanation": "A is actively mirroring B's 'couldn't imagine'. The heavy stress on 'cannot' serves to validate and amplify B's expression of awe."
              },
              "communicativeIntent": {
                "category": "reaction",
                "subcategory": "disbelief",
                "justification": "A is reacting to the staggering mathematical reality of a cat's sleep schedule, echoing B's sentiment ('I couldn't imagine') to express shared astonishment."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "Hi. I didn't know that benjarvus green-ellis never had a fumble.  Impressive!",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "I know, right? I thought it was weird how the cheerleaders arent allowed to eat in the same restaurants as the nfl players.",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "yeah, that is bizarre.  Iowa's visiting locker room is pink.  Strange",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "I wonder if that was meant to try to demoralize the players",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "Seems like it would work lol.  ",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "I was shocked that the highest score in a football game was 222... THATS CRAZY!",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 6,
                  "text": "No doubt.  And the other team was shut out!  Also, bowlers used to make more than football players.  That's changed!",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 7,
                  "text": "Yea it has... could you imagine if bowlers were paid more than nfl players now? They would make average 6-12 million a year for bowling lol",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 8,
                  "text": "That'd be nuts!  An NFL game only has 11 minutes of gameplay...I never would have guessed that",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 9,
                  "text": "I already knew that, which is why I get so frustrated with how long a game takes :(",
                  "emotion": "Disgusted",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_09.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 10,
                  "text": "Yeah, I can imagine that would be frustrating.  I usually only watch the super bowl and that game takes forever!",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_10.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 11,
                  "text": "I thought it was pretty cool that the cat in the opening scene of the Godfather, was just a stray. Chances are that was an unplanned scene.",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_11.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 12,
                  "text": "I'd bet that, too.  So, in asia you can pay to play with cats...now that's weird!",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 13,
                  "text": "I think its a waste of money lol just get a cat",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_13.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 14,
                  "text": "no doubt, cats are everywhere! ",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_14.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 15,
                  "text": "Everywhere including Alaska... where they are made mayors. Now thats weird lol",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_15.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 16,
                  "text": "They also co-author physics papers!",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_16.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 17,
                  "text": "Im not sure the actual purpose of either, but they are both pretty strange!",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_17.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 18,
                  "text": "Yeah, I don't get it either lol.  Apparently cats just sleep for two-thirds of their lives anyway",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_18.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 19,
                  "text": "yea, Im 35 right now... I couldn't imagine sleeping 12 years of that. No wonder cats are considered lazy lol",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/judge/ci/10-t-c41223cb-1b3d-4a2e-9a3f-1ad884b4a073-worst-case/context_turn_19.wav"
                }
              ]
            }
          ]
        },
        {
          "key": "emotion",
          "label": "Emotion",
          "description": "Context-aware emotional delivery with reference and generated audio.",
          "totalExamplesLoaded": 800,
          "presentationCounts": {
            "best_case": 130,
            "worst_case": 460,
            "none": 209,
            "missing": 1
          },
          "showcaseCount": 10,
          "examples": [
            {
              "id": "01-ex01-ex02-default-003-best-case",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "ex01-ex02_default_003",
              "presentationFlag": "best_case",
              "rating": 5,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio perfectly captures the bright, enthusiastic, and grateful tone of the reference with excellent conversational pacing.",
              "judgeResponse": {
                "rating": 5,
                "transcript_match": true,
                "explanation": "The generated audio perfectly captures the bright, enthusiastic, and grateful tone of the reference with excellent conversational pacing.",
                "presentation_flag": "best_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The delivery perfectly captures genuine happiness and gratitude with bright prosody and subtle laughter intrusions, matching the hypothesis without any transcript errors."
              },
              "conversationId": "ex01-ex02_default_003",
              "segmentId": "ex01-ex02_default_003",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "B",
              "targetSpeakerId": "ex01",
              "targetText": "It's awesome. I'm so lucky to be in this position. I get to do a lot of audio books. So that pays my rent. I was talking with a friend about like, I don't know about you. Are you acting full time as well?",
              "contextDependency": {
                "reason": "Without the shared conversational context of actors discussing the struggle to make a living, these statements could be read as a casual, mundane update or even boastful. The context grounds it in humble, authentic joy.",
                "failure_case": "A context-unaware TTS would likely render this with flat declarative prosody, making it sound boastful or monotonous instead of conveying the genuine happiness of an artist finding success."
              },
              "prosodyFocus": {
                "key_words": [
                  "awesome",
                  "so lucky",
                  "pays my rent"
                ],
                "prosodic_features": "Elevated pitch range, bright and smiling voice quality, enthusiastic emphasis on 'awesome' and 'lucky'.",
                "explanation": "The joy of achieving a major life goal (paying rent through acting) requires a bright, elevated delivery to convey authentic gratitude and excitement rather than a dry factual report."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Happy",
                "justification": "B has just been asked if they are acting full time. Confirming this major professional milestone, B expresses genuine joy and gratitude about their acting career sustaining them financially.",
                "grounding_event": "A's direct question 'So are you acting now full time?' which prompts B to reflect on their recent success."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/emotion/01-ex01-ex02-default-003-best-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/emotion/01-ex01-ex02-default-003-best-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "It is pronounced Zed. It's much more simplistic to figure that out too. I'm just, no, I'm just letting you know, like you can sing the alphabet however you want, but if you don't end it in a Zed, there's even, there's even an artist named Zed's dead. I'm not even going to get into it. It's a thing.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 17290.0,
                  "audio": "assets/audio/judge/emotion/01-ex01-ex02-default-003-best-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "it sounds like you kind of want to get into it jackie well look i i've been pronouncing it z my entire life and i'm open to new ideas because my opinion is malleable like clay",
                  "emotion": null,
                  "startTimeMs": 17320.0,
                  "endTimeMs": 34320.0,
                  "audio": "assets/audio/judge/emotion/01-ex01-ex02-default-003-best-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Same. I moved to the U.S. I have to adapt.",
                  "emotion": null,
                  "startTimeMs": 33800.0,
                  "endTimeMs": 37970.0,
                  "audio": "assets/audio/judge/emotion/01-ex01-ex02-default-003-best-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "That's kind of true. You also moved to freaking L.A., which is like, oh, you know, everything is changing all the time out here. You got to just like go with the flow. The punches are real.",
                  "emotion": null,
                  "startTimeMs": 38090.0,
                  "endTimeMs": 48650.0,
                  "audio": "assets/audio/judge/emotion/01-ex01-ex02-default-003-best-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 4,
                  "text": "But what about you? Like, where are you from specifically?",
                  "emotion": null,
                  "startTimeMs": 50260.0,
                  "endTimeMs": 53610.0,
                  "audio": "assets/audio/judge/emotion/01-ex01-ex02-default-003-best-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 5,
                  "text": "Where am I from?",
                  "emotion": null,
                  "startTimeMs": 53820.0,
                  "endTimeMs": 54600.0,
                  "audio": "assets/audio/judge/emotion/01-ex01-ex02-default-003-best-case/context_turn_05.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 6,
                  "text": "Thank you.",
                  "emotion": null,
                  "startTimeMs": 55790.0,
                  "endTimeMs": 161340.0,
                  "audio": "assets/audio/judge/emotion/01-ex01-ex02-default-003-best-case/context_turn_06.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 7,
                  "text": "So sorry, so are you acting now full time?",
                  "emotion": null,
                  "startTimeMs": 161720.0,
                  "endTimeMs": 166080.0,
                  "audio": "assets/audio/judge/emotion/01-ex01-ex02-default-003-best-case/context_turn_07.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 8,
                  "text": "Yeah.",
                  "emotion": null,
                  "startTimeMs": 166210.0,
                  "endTimeMs": 166600.0,
                  "audio": "assets/audio/judge/emotion/01-ex01-ex02-default-003-best-case/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 9,
                  "text": "Now I am.",
                  "emotion": null,
                  "startTimeMs": 166680.0,
                  "endTimeMs": 168240.0,
                  "audio": "assets/audio/judge/emotion/01-ex01-ex02-default-003-best-case/context_turn_09.wav"
                }
              ]
            },
            {
              "id": "02-ex01-ex02-fast-002-best-case",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "ex01-ex02_fast_002",
              "presentationFlag": "best_case",
              "rating": 5,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio perfectly captures the warm, reassuring, and sympathetic tone of the reference, matching the prosody and emotional intent seamlessly.",
              "judgeResponse": {
                "rating": 5,
                "transcript_match": true,
                "explanation": "The generated audio perfectly captures the warm, reassuring, and sympathetic tone of the reference, matching the prosody and emotional intent seamlessly.",
                "presentation_flag": "best_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The utterance is perfectly transcribed and delivered with the required warm, softened, and sympathetic tone, matching the contextual need for reassurance."
              },
              "conversationId": "ex01-ex02_fast_002",
              "segmentId": "ex01-ex02_fast_002",
              "style": "fast",
              "datasetSource": "espresso",
              "targetSpeaker": "B",
              "targetSpeakerId": "ex01",
              "targetText": "Oh, that happens to the best of us.",
              "contextDependency": {
                "reason": "Without the context of A's embarrassment, this common idiom could easily be delivered as a dismissive, rushed, or even sarcastic platitude. The specific situational context demands sincere sympathy.",
                "failure_case": "A context-unaware TTS might deliver this with a flat, rushed, or purely factual tone, failing to provide the intended emotional comfort that A's prior turn solicits."
              },
              "prosodyFocus": {
                "key_words": [
                  "Oh",
                  "best"
                ],
                "prosodic_features": "Warm, softened vocal tone, gentle falling pitch contour on 'best of us', and a slightly slower, more deliberate tempo compared to the surrounding fast speech.",
                "explanation": "To convey genuine reassurance, the delivery must be warm and comforting. A fast or flat delivery would sound dismissive rather than empathetic."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Sympathetic / Sympathetic-Sad",
                "justification": "Speaker A has just vulnerably admitted a 'silly' mistake\u2014leaving their phone at home\u2014and is asking for manual directions. B responds with a reassuring, comforting idiom to alleviate A's embarrassment and stress.",
                "grounding_event": "A's anxious admission of feeling silly for leaving their phone on the charger and needing to write down physical directions."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/emotion/02-ex01-ex02-fast-002-best-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/emotion/02-ex01-ex02-fast-002-best-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "Hey, Tim.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 1750.0,
                  "audio": "assets/audio/judge/emotion/02-ex01-ex02-fast-002-best-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "Yo, what's up?",
                  "emotion": null,
                  "startTimeMs": 1340.0,
                  "endTimeMs": 2120.0,
                  "audio": "assets/audio/judge/emotion/02-ex01-ex02-fast-002-best-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Um, this is so silly. I left my phone at home and I didn't mean to leave it on the charger. I meant to bring it with me. Yeah, I, so I need to get down to Balboa Park. Um, and I'm going down there to see my friend and I just really need some assistance. So do you think you could, um, I have pen and paper ready to go. If you wouldn't mind, I'm just going to take some notes so that I can get onto the highway and get down there. I usually know once I'm like down in the area, it's just hard from here to there.",
                  "emotion": null,
                  "startTimeMs": 1810.0,
                  "endTimeMs": 31770.0,
                  "audio": "assets/audio/judge/emotion/02-ex01-ex02-fast-002-best-case/context_turn_02.wav"
                }
              ]
            },
            {
              "id": "03-ex01-ex02-fast-002-best-case",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "ex01-ex02_fast_002",
              "presentationFlag": "best_case",
              "rating": 5,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio perfectly captures the fast tempo, bright voice quality, and high enthusiasm of the reference, sounding very natural.",
              "judgeResponse": {
                "rating": 5,
                "transcript_match": true,
                "explanation": "The generated audio perfectly captures the fast tempo, bright voice quality, and high enthusiasm of the reference, sounding very natural.",
                "presentation_flag": "best_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The audio flawlessly captures genuine delight with a bright voice quality, elevated energy, and appropriate pitch excursions on key words, perfectly matching the hypothesis."
              },
              "conversationId": "ex01-ex02_fast_002",
              "segmentId": "ex01-ex02_fast_002",
              "style": "fast",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex02",
              "targetText": "Oh my God, I love that. Thank you so much.",
              "contextDependency": {
                "reason": "Without context, 'I love that' could be interpreted as sarcastic (if the preceding idea was terrible) or as merely polite, mild agreement. The context of a fun, quirky recommendation locks it to genuine, bubbly happiness.",
                "failure_case": "A context-unaware TTS could render this with a flat, default declarative tone, completely missing the sincere delight triggered by the amusing theme of the food truck."
              },
              "prosodyFocus": {
                "key_words": [
                  "God",
                  "love",
                  "so much"
                ],
                "prosodic_features": "Bright voice quality, wide pitch excursion with upward inflection on 'love', fast tempo, and elevated vocal energy.",
                "explanation": "The enthusiasm for the quirky food truck must be conveyed through an energetic and bright prosody. If read neutrally, it loses the spontaneous feeling of delight."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Happy",
                "justification": "B has just suggested a food truck called 'La Guardia' with an airplane food theme, which A finds delightful and amusing. The response is one of genuine excitement and appreciation.",
                "grounding_event": "B's specific recommendation of a quirky, airplane-themed food truck."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "Hey, Tim.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 1750.0,
                  "audio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "Yo, what's up?",
                  "emotion": null,
                  "startTimeMs": 1340.0,
                  "endTimeMs": 2120.0,
                  "audio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Um, this is so silly. I left my phone at home and I didn't mean to leave it on the charger. I meant to bring it with me. Yeah, I, so I need to get down to Balboa Park. Um, and I'm going down there to see my friend and I just really need some assistance. So do you think you could, um, I have pen and paper ready to go. If you wouldn't mind, I'm just going to take some notes so that I can get onto the highway and get down there. I usually know once I'm like down in the area, it's just hard from here to there.",
                  "emotion": null,
                  "startTimeMs": 1810.0,
                  "endTimeMs": 31770.0,
                  "audio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "Oh, that happens to the best of us.",
                  "emotion": null,
                  "startTimeMs": 8510.0,
                  "endTimeMs": 11120.0,
                  "audio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/context_turn_03.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 4,
                  "text": "Bumblebuck, what you doing down there?",
                  "emotion": null,
                  "startTimeMs": 14520.0,
                  "endTimeMs": 16160.0,
                  "audio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 5,
                  "text": "Gotcha. All right. Also, if you have a camera, bring a camera as well because Balboa Park is absolutely gorgeous. Absolutely gorgeous.",
                  "emotion": null,
                  "startTimeMs": 32030.0,
                  "endTimeMs": 38020.0,
                  "audio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 6,
                  "text": "I do have a small camera in the car. Thank you for mentioning that.",
                  "emotion": null,
                  "startTimeMs": 36880.0,
                  "endTimeMs": 40310.0,
                  "audio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 7,
                  "text": "want to get stuck in that traffic for three hours that sucks um so weave and dodge and all that stuff because i assume your friend's waiting for you down there in balboa um yeah okay so once you once you're down there you're going to get off on uh 12th street and once you're on 12th street you're going to take that straight all the way down past the arch on your right hand side and then take a right on zoo entrance and we need to take a right on zoo entrance that's right next to the san diego zoo is balboa park um don't confuse the two",
                  "emotion": null,
                  "startTimeMs": 39220.0,
                  "endTimeMs": 100120.0,
                  "audio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 8,
                  "text": "Yeah yeah yeah.",
                  "emotion": null,
                  "startTimeMs": 50170.0,
                  "endTimeMs": 50760.0,
                  "audio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/context_turn_08.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 9,
                  "text": "Is there another way around it in case there's a lot of traffic on the side?",
                  "emotion": null,
                  "startTimeMs": 99030.0,
                  "endTimeMs": 102360.0,
                  "audio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/context_turn_09.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 10,
                  "text": "Sorry about that, but it's a wonderful, wonderful experience.",
                  "emotion": null,
                  "startTimeMs": 102790.0,
                  "endTimeMs": 141320.0,
                  "audio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/context_turn_10.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 11,
                  "text": "Oh, thank you so much for giving me all of that. Okay, I've got everything written down. And do you have any recommendations for food in the area or the food trucks there?",
                  "emotion": null,
                  "startTimeMs": 141280.0,
                  "endTimeMs": 149090.0,
                  "audio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/context_turn_11.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 12,
                  "text": "Yeah, there's going to be food trucks there. You want to go to this one called La Guardia.",
                  "emotion": null,
                  "startTimeMs": 149450.0,
                  "endTimeMs": 153310.0,
                  "audio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/context_turn_12.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 13,
                  "text": "Okay.",
                  "emotion": null,
                  "startTimeMs": 153300.0,
                  "endTimeMs": 154100.0,
                  "audio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/context_turn_13.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 14,
                  "text": "Great food truck. It's all, it's all, it's all got a airplane food theme. You'll love it.",
                  "emotion": null,
                  "startTimeMs": 155030.0,
                  "endTimeMs": 160020.0,
                  "audio": "assets/audio/judge/emotion/03-ex01-ex02-fast-002-best-case/context_turn_14.wav"
                }
              ]
            },
            {
              "id": "04-ex03-ex01-disgusted-004-best-case",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "ex03-ex01_disgusted_004",
              "presentationFlag": "best_case",
              "rating": 5,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio perfectly captures the disgusted, repulsed tone with expressive pitch on 'Dude' and a firm, tense refusal, closely matching the reference's emotional intent.",
              "judgeResponse": {
                "rating": 5,
                "transcript_match": true,
                "explanation": "The generated audio perfectly captures the disgusted, repulsed tone with expressive pitch on 'Dude' and a firm, tense refusal, closely matching the reference's emotional intent.",
                "presentation_flag": "best_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The audio flawlessly captures the intense physical revulsion and disgust through tense vocal quality and pitch, perfectly matching the contextual hypothesis without WER errors."
              },
              "conversationId": "ex03-ex01_disgusted_004",
              "segmentId": "ex03-ex01_disgusted_004",
              "style": "disgusted",
              "datasetSource": "espresso",
              "targetSpeaker": "B",
              "targetSpeakerId": "ex01",
              "targetText": "Dude, you're gonna have to get rid of that. I'm not getting rid of it.",
              "contextDependency": {
                "reason": "Without the horrifying descriptions of the rotten food, this text reads like a mundane household argument about chores.",
                "failure_case": "A context-unaware TTS would likely sound 'Angry' or casually annoyed (like a lazy roommate), stripping away the intense physical revulsion established by the context."
              },
              "prosodyFocus": {
                "key_words": [
                  "Dude",
                  "have to",
                  "not"
                ],
                "prosodic_features": "High initial pitch on 'Dude' indicating alarm/aversion, tense vocal quality, backing-away resonance, firm and rapid boundary on 'not getting rid of it'.",
                "explanation": "The delivery must convey the speaker keeping their physical distance. The emphatic, tense refusal comes from not wanting to touch something vile, requiring a constricted, repulsed tone."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Disgusted",
                "justification": "B's flat refusal to clean up the mess is a direct result of being utterly repulsed by the oozing, bubbling, fuzzy burger. It is an act of physical avoidance based on the 'yuck' factor.",
                "grounding_event": "The entire preceding exchange detailing the overpowering smell, pus-like oozing, and mutant mold growing on the food under the couch."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex03",
                  "utteranceId": 0,
                  "text": "That is putrid.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 2310.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_00.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex03",
                  "utteranceId": 1,
                  "text": "That used to be a hamburger bun, but now it's growing fuzz. There are hairs that are growing off that and wiggling around.",
                  "emotion": null,
                  "startTimeMs": 4290.0,
                  "endTimeMs": 20380.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex03",
                  "utteranceId": 2,
                  "text": "Oh, my God.",
                  "emotion": null,
                  "startTimeMs": 20980.0,
                  "endTimeMs": 23420.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_02.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex03",
                  "utteranceId": 3,
                  "text": "Ugh.",
                  "emotion": null,
                  "startTimeMs": 23660.0,
                  "endTimeMs": 24030.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex03",
                  "utteranceId": 4,
                  "text": "that was a half-eaten burger someone's left under the couch, and now it's like, yeah, it's like oozing, it's like, oh, I just took a close look, it's like bubbling up, and",
                  "emotion": null,
                  "startTimeMs": 25130.0,
                  "endTimeMs": 36160.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_04.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex03",
                  "utteranceId": 5,
                  "text": "Oh, that smell is so just overpowering.",
                  "emotion": null,
                  "startTimeMs": 37360.0,
                  "endTimeMs": 41050.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_05.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 6,
                  "text": "What does it smell like? I can't even describe it.",
                  "emotion": null,
                  "startTimeMs": 40910.0,
                  "endTimeMs": 44550.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_06.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex03",
                  "utteranceId": 7,
                  "text": "It's like pus, but like if an entire room was full of pus.",
                  "emotion": null,
                  "startTimeMs": 43370.0,
                  "endTimeMs": 50450.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_07.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 8,
                  "text": "That's gross.",
                  "emotion": null,
                  "startTimeMs": 50490.0,
                  "endTimeMs": 52550.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_08.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex03",
                  "utteranceId": 9,
                  "text": "And then like that pus like had its own pus coming out of it.",
                  "emotion": null,
                  "startTimeMs": 52280.0,
                  "endTimeMs": 58010.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_09.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 10,
                  "text": "Are you creating perception right now?",
                  "emotion": null,
                  "startTimeMs": 57900.0,
                  "endTimeMs": 60730.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_10.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex03",
                  "utteranceId": 11,
                  "text": "Well, oh man, that, ugh.",
                  "emotion": null,
                  "startTimeMs": 60570.0,
                  "endTimeMs": 64410.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_11.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex03",
                  "utteranceId": 12,
                  "text": "So... there used to be a slice of tomato there, which is turned into this weird purplish...",
                  "emotion": null,
                  "startTimeMs": 66680.0,
                  "endTimeMs": 76640.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_12.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex03",
                  "utteranceId": 13,
                  "text": "Like...",
                  "emotion": null,
                  "startTimeMs": 77650.0,
                  "endTimeMs": 78450.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_13.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex03",
                  "utteranceId": 14,
                  "text": "spots.",
                  "emotion": null,
                  "startTimeMs": 79060.0,
                  "endTimeMs": 80120.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_14.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 15,
                  "text": "What are you going to do about it?",
                  "emotion": null,
                  "startTimeMs": 80080.0,
                  "endTimeMs": 81790.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_15.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex03",
                  "utteranceId": 16,
                  "text": "I don't want to touch that thing. I think you should get one of those little nets that you use to get algae out of a fish tank or whatever. You should use one of those and just hurl it as far away as you can get.",
                  "emotion": null,
                  "startTimeMs": 81590.0,
                  "endTimeMs": 104170.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_16.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex03",
                  "utteranceId": 17,
                  "text": "fuzzy again and like a whole new terrain of fuzz just started growing on top of it and oh my goodness that is just i can't even describe how rancid that is",
                  "emotion": null,
                  "startTimeMs": 104380.0,
                  "endTimeMs": 152360.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_17.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 18,
                  "text": "It's like, how does mold become aqua like that?",
                  "emotion": null,
                  "startTimeMs": 152000.0,
                  "endTimeMs": 157140.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_18.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex03",
                  "utteranceId": 19,
                  "text": "Yeah, you know, if a scientist gave a lecture on how that happens, I would change the channel because I did not want to hear it.",
                  "emotion": null,
                  "startTimeMs": 156770.0,
                  "endTimeMs": 163450.0,
                  "audio": "assets/audio/judge/emotion/04-ex03-ex01-disgusted-004-best-case/context_turn_19.wav"
                }
              ]
            },
            {
              "id": "05-ex03-ex02-animal-animaldir-007-best-case",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "ex03-ex02_animal-animaldir_007",
              "presentationFlag": "best_case",
              "rating": 5,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio perfectly matches the transcript and delivers a highly realistic, breathy, and hesitant prosody that accurately conveys the deep shock and surprise of the context.",
              "judgeResponse": {
                "rating": 5,
                "transcript_match": true,
                "explanation": "The generated audio perfectly matches the transcript and delivers a highly realistic, breathy, and hesitant prosody that accurately conveys the deep shock and surprise of the context.",
                "presentation_flag": "best_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "Perfect transcription. The delivery vividly captures genuine shock and disbelief with breathy hesitations, appropriate pauses, and pitch variations, perfectly fitting the bizarre context."
              },
              "conversationId": "ex03-ex02_animal-animaldir_007",
              "segmentId": "ex03-ex02_animal-animaldir_007",
              "style": "animal-animaldir",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex02",
              "targetText": "Wow, you're... Whoa, um, hello. Uh, I didn't realize you could talk.",
              "contextDependency": {
                "reason": "Without context, 'I didn't realize you could talk' could be mildly surprised banter directed at a quiet human. The context of discovering a talking animal requires a vastly higher intensity of shock.",
                "failure_case": "A context-unaware TTS would likely deliver this smoothly as a polite, casual observation, completely missing the staggering shock of encountering a talking frog."
              },
              "prosodyFocus": {
                "key_words": [
                  "Wow",
                  "Whoa",
                  "didn't realize"
                ],
                "prosodic_features": "Breathy, hesitant onset, wide pitch excursions on 'Wow' and 'Whoa', and noticeable pauses between fragments indicating real-time cognitive processing.",
                "explanation": "The stuttered, fragmented sentence structure must be delivered with the breathless pacing and pitch variations of genuine shock, not as a casual observation."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Surprised",
                "justification": "A has just experienced something impossible: an animal they casually addressed in a marsh has spoken back to them in English. The disjointed, stuttering text reflects paradigm-breaking shock and disbelief.",
                "grounding_event": "B (the frog) verbally responding to A's greeting with 'Alright. We'll be right back.'"
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/emotion/05-ex03-ex02-animal-animaldir-007-best-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/emotion/05-ex03-ex02-animal-animaldir-007-best-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "Um, oh, hey over there, little guy. I have been to this marsh a million times. Look at you.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 9180.0,
                  "audio": "assets/audio/judge/emotion/05-ex03-ex02-animal-animaldir-007-best-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex03",
                  "utteranceId": 1,
                  "text": "Alright.",
                  "emotion": null,
                  "startTimeMs": 3240.0,
                  "endTimeMs": 4100.0,
                  "audio": "assets/audio/judge/emotion/05-ex03-ex02-animal-animaldir-007-best-case/context_turn_01.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex03",
                  "utteranceId": 2,
                  "text": "We'll be right back.",
                  "emotion": null,
                  "startTimeMs": 7650.0,
                  "endTimeMs": 14460.0,
                  "audio": "assets/audio/judge/emotion/05-ex03-ex02-animal-animaldir-007-best-case/context_turn_02.wav"
                }
              ]
            },
            {
              "id": "06-ex01-ex02-default-003-worst-case",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "ex01-ex02_default_003",
              "presentationFlag": "worst_case",
              "rating": 1,
              "transcriptMatch": false,
              "judgeExplanation": "The generated audio speaks the context utterance from Speaker A instead of the target transcript for Speaker B, resulting in a complete transcript mismatch.",
              "judgeResponse": {
                "rating": 1,
                "transcript_match": false,
                "explanation": "The generated audio speaks the context utterance from Speaker A instead of the target transcript for Speaker B, resulting in a complete transcript mismatch.",
                "presentation_flag": "worst_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "Perfect match. The transcription is completely accurate, and the speaker brilliantly captures the sarcastic, amused tone with laughter and dry ironic delivery."
              },
              "conversationId": "ex01-ex02_default_003",
              "segmentId": "ex01-ex02_default_003",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "B",
              "targetSpeakerId": "ex01",
              "targetText": "it sounds like you kind of want to get into it jackie well look i i've been pronouncing it z my entire life and i'm open to new ideas because my opinion is malleable like clay",
              "contextDependency": {
                "reason": "Without knowing that A just aggressively defended 'Zed' while claiming not to 'get into it', B's comment about being 'malleable like clay' sounds like an earnest declaration of open-mindedness rather than a sarcastic joke.",
                "failure_case": "A context-unaware TTS would deliver the sentence as a sincere, straightforward statement of personal philosophy, missing the conversational irony entirely."
              },
              "prosodyFocus": {
                "key_words": [
                  "kind of",
                  "malleable",
                  "clay"
                ],
                "prosodic_features": "Smirking or amused vocal tone, slight emphasis and elongation on 'kind of', dry ironic delivery on 'malleable like clay' with a slight pitch drop at the end.",
                "explanation": "The playful teasing requires an ironic, knowing tone. A literal, earnest delivery would make it seem like B genuinely believes their opinion is easily changed, completely missing the banter."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Sarcastic",
                "justification": "A claims they are 'not even going to get into it' immediately after delivering a highly specific rant on why the letter Z should be pronounced 'Zed'. B's response playfully calls out this contradiction, concluding with an exaggerated, ironic metaphor about their opinion being 'malleable like clay' to tease their own stubbornness and A's pedantry.",
                "grounding_event": "A's contradictory statement 'I'm not even going to get into it' right after explaining in detail why 'Zed' is superior to 'Z'."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/emotion/06-ex01-ex02-default-003-worst-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/emotion/06-ex01-ex02-default-003-worst-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "It is pronounced Zed. It's much more simplistic to figure that out too. I'm just, no, I'm just letting you know, like you can sing the alphabet however you want, but if you don't end it in a Zed, there's even, there's even an artist named Zed's dead. I'm not even going to get into it. It's a thing.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 17290.0,
                  "audio": "assets/audio/judge/emotion/06-ex01-ex02-default-003-worst-case/context_turn_00.wav"
                }
              ]
            },
            {
              "id": "07-ex01-ex02-default-003-worst-case",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "ex01-ex02_default_003",
              "presentationFlag": "worst_case",
              "rating": 2,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio entirely misses the laughing, playfully backpedaling tone of the reference, instead sounding serious and flatly defensive, which perfectly matches the predicted failure case.",
              "judgeResponse": {
                "rating": 2,
                "transcript_match": true,
                "explanation": "The generated audio entirely misses the laughing, playfully backpedaling tone of the reference, instead sounding serious and flatly defensive, which perfectly matches the predicted failure case.",
                "presentation_flag": "worst_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "Perfectly realizes the laughing, self-deprecating prosody and rapid backpedaling described in the hypothesis, matching the situational context flawlessly despite trivial conversational disfluencies."
              },
              "conversationId": "ex01-ex02_default_003",
              "segmentId": "ex01-ex02_default_003",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "B",
              "targetSpeakerId": "ex01",
              "targetText": "No, that's not what I'm saying. That's not what I'm saying. I guess because me, you look at me and there's like water dripping down my shirt. And, you know, I kind of have a mullet going on right now with like chipped paint nails. You know, it's a problem.",
              "contextDependency": {
                "reason": "Without the prior compliment and A's deflection, B's rapid 'No, that's not what I'm saying' sounds like an angry or defensive argument, and the description of their appearance sounds like a serious personal complaint.",
                "failure_case": "A context-unaware TTS might deliver the 'No' with aggressive or defensive anger, and the rest with depressed sadness, missing the lighthearted, amused self-deprecation entirely."
              },
              "prosodyFocus": {
                "key_words": [
                  "No",
                  "water dripping",
                  "problem"
                ],
                "prosodic_features": "Rapid, slightly panicked repetition on 'No, that's not what I'm saying', followed by a smiling, breathy delivery with audible laughter intrusions during the description of the mullet and chipped nails.",
                "explanation": "The humor comes from the contrast between B's rapid backpedaling and their subsequent amused self-roasting. Laughter and a smiling tone are necessary to show that B is playfully engaging with A's joke, not genuinely upset."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Laughing",
                "justification": "B had just earnestly complimented A's polished appearance. When A deflects with a self-deprecating joke ('The face of an earth'), B rapidly and playfully backpedals, using humorous self-deprecation to contrast their own messy appearance with A's. This prompts an amused, laughing delivery.",
                "grounding_event": "A's awkward and humorous deflection in response to B's earnest compliment about A looking polished and affable."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "It is pronounced Zed. It's much more simplistic to figure that out too. I'm just, no, I'm just letting you know, like you can sing the alphabet however you want, but if you don't end it in a Zed, there's even, there's even an artist named Zed's dead. I'm not even going to get into it. It's a thing.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 17290.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "it sounds like you kind of want to get into it jackie well look i i've been pronouncing it z my entire life and i'm open to new ideas because my opinion is malleable like clay",
                  "emotion": null,
                  "startTimeMs": 17320.0,
                  "endTimeMs": 34320.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Same. I moved to the U.S. I have to adapt.",
                  "emotion": null,
                  "startTimeMs": 33800.0,
                  "endTimeMs": 37970.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "That's kind of true. You also moved to freaking L.A., which is like, oh, you know, everything is changing all the time out here. You got to just like go with the flow. The punches are real.",
                  "emotion": null,
                  "startTimeMs": 38090.0,
                  "endTimeMs": 48650.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 4,
                  "text": "But what about you? Like, where are you from specifically?",
                  "emotion": null,
                  "startTimeMs": 50260.0,
                  "endTimeMs": 53610.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 5,
                  "text": "Where am I from?",
                  "emotion": null,
                  "startTimeMs": 53820.0,
                  "endTimeMs": 54600.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_05.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 6,
                  "text": "Thank you.",
                  "emotion": null,
                  "startTimeMs": 55790.0,
                  "endTimeMs": 161340.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_06.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 7,
                  "text": "So sorry, so are you acting now full time?",
                  "emotion": null,
                  "startTimeMs": 161720.0,
                  "endTimeMs": 166080.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_07.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 8,
                  "text": "Yeah.",
                  "emotion": null,
                  "startTimeMs": 166210.0,
                  "endTimeMs": 166600.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 9,
                  "text": "Now I am.",
                  "emotion": null,
                  "startTimeMs": 166680.0,
                  "endTimeMs": 168240.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_09.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 10,
                  "text": "It's awesome. I'm so lucky to be in this position. I get to do a lot of audio books. So that pays my rent. I was talking with a friend about like, I don't know about you. Are you acting full time as well?",
                  "emotion": null,
                  "startTimeMs": 168400.0,
                  "endTimeMs": 184950.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_10.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 11,
                  "text": "That's what I'm trying to do.",
                  "emotion": null,
                  "startTimeMs": 185760.0,
                  "endTimeMs": 188050.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_11.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 12,
                  "text": "That's fair, that's fair. I was talking with a friend that was like,",
                  "emotion": null,
                  "startTimeMs": 188360.0,
                  "endTimeMs": 193570.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 13,
                  "text": "He was trying to define voice acting or acting in general as you make it when you're famous. You make it when you're, like, you know, up in the big leagues with, you know, Zendaya and Tom Holland. And that's when you make it. And I'm like, no, you make it when you can make a little bit of money and can pay, like, half your rent, you know, doing this stuff. That's my standards. My bar is set real low.",
                  "emotion": null,
                  "startTimeMs": 195100.0,
                  "endTimeMs": 224940.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_13.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 14,
                  "text": "I don't even know if that's a low bar, though. It's realistic because only 2% of actors are working and surviving and thriving off of their successes. Success doesn't need to be measured in an accolade that you receive in front of an entire broadcast audience. That's not what acting is anyway. That's just a competition.",
                  "emotion": null,
                  "startTimeMs": 224760.0,
                  "endTimeMs": 249170.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_14.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 15,
                  "text": "Exactly. At that point, I find there's also like, I don't know, I for voiceover because you do on camera stuff as well.",
                  "emotion": null,
                  "startTimeMs": 249450.0,
                  "endTimeMs": 259740.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_15.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 16,
                  "text": "I was going to be like, you give the vibe that you do on camera stuff too. You look like polished and present and like you have a very like affable face.",
                  "emotion": null,
                  "startTimeMs": 260100.00000000003,
                  "endTimeMs": 272600.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_16.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 17,
                  "text": "The face of an earth.",
                  "emotion": null,
                  "startTimeMs": 273020.0,
                  "endTimeMs": 274180.0,
                  "audio": "assets/audio/judge/emotion/07-ex01-ex02-default-003-worst-case/context_turn_17.wav"
                }
              ]
            },
            {
              "id": "08-ex01-ex02-default-004-worst-case",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "ex01-ex02_default_004",
              "presentationFlag": "worst_case",
              "rating": 2,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio misses the required shock and surprise, delivering a flat, neutral reading instead of the elongated, high-pitched reaction seen in the reference.",
              "judgeResponse": {
                "rating": 2,
                "transcript_match": true,
                "explanation": "The generated audio misses the required shock and surprise, delivering a flat, neutral reading instead of the elongated, high-pitched reaction seen in the reference.",
                "presentation_flag": "worst_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "Perfect match; zero WER, and the prosody vividly captures the hypothesized shock with a massive pitch rise on 'Really' as described."
              },
              "conversationId": "ex01-ex02_default_004",
              "segmentId": "ex01-ex02_default_004",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex02",
              "targetText": "Really? What did you, what did you do sports wise?",
              "contextDependency": {
                "reason": "The word 'Really?' is highly context-dependent; it can be used for mild backchanneling, sarcasm, or profound shock. Only the preceding revelation of eight concussions dictates that this must be delivered with strong, genuine surprise.",
                "failure_case": "A context-unaware TTS would likely deliver 'Really?' as a mild conversational filler with neutral backchannel prosody, completely underplaying the alarming nature of B's disclosure."
              },
              "prosodyFocus": {
                "key_words": [
                  "Really",
                  "sports wise"
                ],
                "prosodic_features": "Wide pitch excursion and elongation on 'Really', followed by elevated pitch and increased energy on the subsequent question.",
                "explanation": "The stretched out, high-pitched 'Really' signals disbelief and astonishment, while the energetic follow-up shows an urgent need to make sense of the shocking information."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Surprised",
                "justification": "B has just casually dropped a shocking statistic\u2014that they have suffered eight concussions. A's 'Really?' is a reaction of genuine shock and disbelief to this abnormally high number, immediately followed by a need to understand how it happened.",
                "grounding_event": "B's casual disclosure of having had eight concussions."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/emotion/08-ex01-ex02-default-004-worst-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/emotion/08-ex01-ex02-default-004-worst-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "Well, put a stick on your back. And, you know, that's another technique that they use where they put a stick across your back and they make you stay in one spot as you're, as you're, so you don't move. And...",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 12380.0,
                  "audio": "assets/audio/judge/emotion/08-ex01-ex02-default-004-worst-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "That reminds me of ballet. Oh my god.",
                  "emotion": null,
                  "startTimeMs": 11680.0,
                  "endTimeMs": 14270.0,
                  "audio": "assets/audio/judge/emotion/08-ex01-ex02-default-004-worst-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Did you ever do dance?",
                  "emotion": null,
                  "startTimeMs": 16780.0,
                  "endTimeMs": 18100.0,
                  "audio": "assets/audio/judge/emotion/08-ex01-ex02-default-004-worst-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "Don't you dance?",
                  "emotion": null,
                  "startTimeMs": 18450.0,
                  "endTimeMs": 54400.0,
                  "audio": "assets/audio/judge/emotion/08-ex01-ex02-default-004-worst-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 4,
                  "text": "I did dance when I was young and gymnastics. So, yeah, so fun. I did that for a long time.",
                  "emotion": null,
                  "startTimeMs": 54220.0,
                  "endTimeMs": 66480.0,
                  "audio": "assets/audio/judge/emotion/08-ex01-ex02-default-004-worst-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 5,
                  "text": "I have a question to ask a gymnastics person. Did you ever get injured when you were doing gymnastics? Oh yeah? Describe it, tell me. What happened?",
                  "emotion": null,
                  "startTimeMs": 65950.0,
                  "endTimeMs": 78990.0,
                  "audio": "assets/audio/judge/emotion/08-ex01-ex02-default-004-worst-case/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 6,
                  "text": "Well, actually, I was, I watched, did you, have you seen the documentary Athlete A?",
                  "emotion": null,
                  "startTimeMs": 79180.0,
                  "endTimeMs": 88020.0,
                  "audio": "assets/audio/judge/emotion/08-ex01-ex02-default-004-worst-case/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 7,
                  "text": "No I have not.",
                  "emotion": null,
                  "startTimeMs": 88380.0,
                  "endTimeMs": 89540.0,
                  "audio": "assets/audio/judge/emotion/08-ex01-ex02-default-004-worst-case/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 8,
                  "text": "It was loud enough that you could hear it in the gymnasium.",
                  "emotion": null,
                  "startTimeMs": 89800.0,
                  "endTimeMs": 197690.0,
                  "audio": "assets/audio/judge/emotion/08-ex01-ex02-default-004-worst-case/context_turn_08.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 9,
                  "text": "And,",
                  "emotion": null,
                  "startTimeMs": 198200.0,
                  "endTimeMs": 200050.0,
                  "audio": "assets/audio/judge/emotion/08-ex01-ex02-default-004-worst-case/context_turn_09.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 10,
                  "text": "It was like a palpable sound. It's really gross. But yeah, I've injured myself a lot. I've winded myself. I've probably had concussions from it.",
                  "emotion": null,
                  "startTimeMs": 201900.0,
                  "endTimeMs": 215150.0,
                  "audio": "assets/audio/judge/emotion/08-ex01-ex02-default-004-worst-case/context_turn_10.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 11,
                  "text": "Hey, you're talking about concussions. I've had eight of them. I've had eight concussions. Yeah. Yeah.",
                  "emotion": null,
                  "startTimeMs": 214600.0,
                  "endTimeMs": 220220.0,
                  "audio": "assets/audio/judge/emotion/08-ex01-ex02-default-004-worst-case/context_turn_11.wav"
                }
              ]
            },
            {
              "id": "09-ex01-ex02-default-005-worst-case",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "ex01-ex02_default_005",
              "presentationFlag": "worst_case",
              "rating": 2,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio completely misses the intended laughing emotion, instead delivering the lines with calm, declarative pleasantness as predicted in the failure case.",
              "judgeResponse": {
                "rating": 2,
                "transcript_match": true,
                "explanation": "The generated audio completely misses the intended laughing emotion, instead delivering the lines with calm, declarative pleasantness as predicted in the failure case.",
                "presentation_flag": "worst_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The audio perfectly executes the hypothesis, featuring clear laughter intrusions and a breathy, chuckling delivery that realistically reacts to the preceding comedic anecdote."
              },
              "conversationId": "ex01-ex02_default_005",
              "segmentId": "ex01-ex02_default_005",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "B",
              "targetSpeakerId": "ex01",
              "targetText": "It's so fun. It's so fun.",
              "contextDependency": {
                "reason": "In isolation, 'It's so fun' is a generic, mild endorsement of an activity (like playing a game). Only the prior joke grounds it as a direct, reactionary expression of laughter and amusement.",
                "failure_case": "A TTS would likely read it with a calm, declarative pleasantness, entirely missing the spontaneous laughter and humor provoked by the preceding comedic anecdote."
              },
              "prosodyFocus": {
                "key_words": [
                  "fun"
                ],
                "prosodic_features": "Laughter intrusions, breathy chuckling quality throughout, elevated pitch, and an upbeat, bouncy rhythm.",
                "explanation": "The delivery must capture spontaneous amusement in response to a joke, with audible laughter actively coloring the articulation of the words rather than just being spoken cleanly."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Laughing",
                "justification": "A has just told a humorous, slightly absurd anecdote about the reality of animation production (receiving a drawing of just an arm outline). B's response is an amused, laughing reaction to the comedic punchline of A's story.",
                "grounding_event": "A recounting the funny anecdote of Bart Simpson spending $300 on an animation cel only to receive a drawing of a single arm outline."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "I don't have a favorite movie because I am a huge, probably because I'm an actor, I'm really into cinema, Criterion Channel subscriber.",
                  "emotion": null,
                  "startTimeMs": 210.0,
                  "endTimeMs": 15940.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_00.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 1,
                  "text": "Foreign film nerd. One of my favorite movies, though, is Le Samurai, which I don't know if you've ever seen it, but Alain Delon is the lead in the film, and it is one of the most incredibly well-shot movies I've ever seen in my entire life. One of the movies that made me fall in love with cinema when I was 10",
                  "emotion": null,
                  "startTimeMs": 19920.0,
                  "endTimeMs": 52580.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "so yeah so i i have a lot of movies that are at my top but um definitely the samurai is one of the ones that if you can ever watch that it's it has one of the most beautiful opening sequences i've ever seen in my entire life of a film it's just incredible",
                  "emotion": null,
                  "startTimeMs": 54700.0,
                  "endTimeMs": 74990.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "Can you describe it for me so I can imagine it?",
                  "emotion": null,
                  "startTimeMs": 74250.0,
                  "endTimeMs": 78300.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 4,
                  "text": "just by the shot it's so well set up that that he is as they say in the movie of the samurai meaning like you know he's like a he's a bounty hunter basically and it's just this incredible shot so I recommend it highly recommend it what about you though",
                  "emotion": null,
                  "startTimeMs": 78620.0,
                  "endTimeMs": 172240.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 5,
                  "text": "Well, thank you for describing that. I can imagine it. I can imagine the smoke piling up from the cigarette, the kind of of it all, you know what I mean? So French. The true raw grittiness. For me, I consume a lot of animated media. So if I were to go for my favorite film in animation...",
                  "emotion": null,
                  "startTimeMs": 174520.0,
                  "endTimeMs": 200510.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_05.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 6,
                  "text": "It's not necessarily the most well-known Ghibli film, but Nausicaa of the Valley of the Wind.",
                  "emotion": null,
                  "startTimeMs": 202060.0,
                  "endTimeMs": 212470.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 7,
                  "text": "It's so good. It's so good. I remember watching that when I was a kid. And it was the first animated movie that I distinctly remember. You know when you're like a kid consciousness? Where you're like, I know I... People...",
                  "emotion": null,
                  "startTimeMs": 213840.0,
                  "endTimeMs": 233140.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_07.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 8,
                  "text": "But if we're talking about favorite movie that's on camera or right now, have you seen Everything Everywhere all at once?",
                  "emotion": null,
                  "startTimeMs": 233960.0,
                  "endTimeMs": 277910.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_08.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 9,
                  "text": "I haven't. I want to see that. I just saw Nope, though.",
                  "emotion": null,
                  "startTimeMs": 277660.0,
                  "endTimeMs": 282820.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_09.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 10,
                  "text": "in two separate ways. You can laugh, cry, and like, this is so freaking funny. I'm losing my mind. Or you can laugh, cry, and like, I'm so sad, but I'm so happy. It made me do it both times. Both times.",
                  "emotion": null,
                  "startTimeMs": 282320.0,
                  "endTimeMs": 328940.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_10.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 11,
                  "text": "I did that with Jojo Rabbit.",
                  "emotion": null,
                  "startTimeMs": 329000.0,
                  "endTimeMs": 330920.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_11.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 12,
                  "text": "Jojo Rabbit is so good.",
                  "emotion": null,
                  "startTimeMs": 331870.0,
                  "endTimeMs": 334210.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 13,
                  "text": "It's so good. It's so freaking good. Scarlett Johansson and who is the kid that plays? Oh, the kid's so good too.",
                  "emotion": null,
                  "startTimeMs": 335610.0,
                  "endTimeMs": 343590.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_13.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 14,
                  "text": "I'm not sure. I love the kid though. It's so good. Taika Waititi is great.",
                  "emotion": null,
                  "startTimeMs": 341960.0,
                  "endTimeMs": 347740.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_14.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 15,
                  "text": "Oh, Taika Waititi is freaking phenomenal. One of my theories, though, is that the best actors nowadays are like 10-year-old kids. You know what I mean? That just might be me, but I think that's where I'm at, all right?",
                  "emotion": null,
                  "startTimeMs": 347750.0,
                  "endTimeMs": 367960.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_15.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 16,
                  "text": "I have to ask you, coming back to Nausicaa, have you ever heard of retronauts?",
                  "emotion": null,
                  "startTimeMs": 368400.0,
                  "endTimeMs": 379650.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_16.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 17,
                  "text": "Retronauts, no.",
                  "emotion": null,
                  "startTimeMs": 380110.0,
                  "endTimeMs": 382180.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_17.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 18,
                  "text": "Or crontendo. So I'm, okay, I'm really into video games. And I listen to video game podcasts. And Retronauts is a podcast dedicated to...",
                  "emotion": null,
                  "startTimeMs": 382040.0,
                  "endTimeMs": 412610.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_18.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 19,
                  "text": "Oh, are you kidding me? That's crazy. No way. Did you go? Okay. Did you go to the, um, there was in LA, there was a Ghibli exhibit.",
                  "emotion": null,
                  "startTimeMs": 412380.0,
                  "endTimeMs": 422600.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_19.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 20,
                  "text": "Oh, um, over at, um, I haven't seen it. Yeah. Um, I didn't, yeah, I didn't, yeah, I didn't get to go to it, but I wanted to.",
                  "emotion": null,
                  "startTimeMs": 422720.0,
                  "endTimeMs": 434390.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_20.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 21,
                  "text": "The MoMA, the MoMA, I think, Museum of Modern Art.",
                  "emotion": null,
                  "startTimeMs": 427840.0,
                  "endTimeMs": 430650.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_21.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 22,
                  "text": "so easy to forget that hundreds of people worked on just this one frame let alone the entire movie you know what i mean",
                  "emotion": null,
                  "startTimeMs": 433000.0,
                  "endTimeMs": 477270.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_22.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 23,
                  "text": "It reminds me of the episode of the Simpsons when, um, Bart spends like $300 on a classic picture that he thinks he's going to get this original picture, this original drawing of itchy and scratchy and he gets it and he gets the cellophane and it's literally just at the outline of an arm. I don't know if you remember that, but I love it. Um,",
                  "emotion": null,
                  "startTimeMs": 478930.0,
                  "endTimeMs": 506570.0,
                  "audio": "assets/audio/judge/emotion/09-ex01-ex02-default-005-worst-case/context_turn_23.wav"
                }
              ]
            },
            {
              "id": "10-ex01-ex02-fast-001-worst-case",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "ex01-ex02_fast_001",
              "presentationFlag": "worst_case",
              "rating": 2,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio completely misses the rushed, frantic pacing of the reference, falling exactly into the failure case by sounding calm and methodical despite the urgent context.",
              "judgeResponse": {
                "rating": 2,
                "transcript_match": true,
                "explanation": "The generated audio completely misses the rushed, frantic pacing of the reference, falling exactly into the failure case by sounding calm and methodical despite the urgent context.",
                "presentation_flag": "worst_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "Perfect WER. The exceptionally fast tempo, elevated pitch, and compressed delivery perfectly capture the frantic, anxious urgency required by the context."
              },
              "conversationId": "ex01-ex02_fast_001",
              "segmentId": "ex01-ex02_fast_001",
              "style": "fast",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex01",
              "targetText": "I got my pen, I got my paper. Well, uh, yeah. Yep.",
              "contextDependency": {
                "reason": "Without knowing about the 45-minute deadline and the lost phone, 'I got my pen, I got my paper' reads as a methodical, organized statement. Only the context reveals it as a panicked scramble.",
                "failure_case": "A context-unaware TTS would read it with calm, steady pacing, completely missing the frantic, anxious urgency that the situation demands."
              },
              "prosodyFocus": {
                "key_words": [
                  "pen",
                  "paper",
                  "Yep"
                ],
                "prosodic_features": "Rushed tempo, elevated pitch, slightly breathy or tense delivery, compressed pauses, stumbling slightly on 'Well, uh, yeah'",
                "explanation": "The tense, fast delivery conveys the anxiety of the deadline; without it, the speaker sounds relaxed, which contradicts the established emergency."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Fearful",
                "justification": "The situational context is highly urgent\u2014A has 45 minutes to cross LA without a phone. The utterance is a frantic, anxious scramble to get ready to write, not a calm confirmation of having supplies.",
                "grounding_event": "A's disclosure of the lost phone and the immediate, critical 45-minute deadline to leave right now."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/judge/emotion/10-ex01-ex02-fast-001-worst-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/emotion/10-ex01-ex02-fast-001-worst-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex01",
                  "utteranceId": 0,
                  "text": "Hey, Caroline, can I get you in here for a second?",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 2760.0,
                  "audio": "assets/audio/judge/emotion/10-ex01-ex02-fast-001-worst-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 1,
                  "text": "Absolutely Brad.",
                  "emotion": null,
                  "startTimeMs": 2380.0,
                  "endTimeMs": 3570.0,
                  "audio": "assets/audio/judge/emotion/10-ex01-ex02-fast-001-worst-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex01",
                  "utteranceId": 2,
                  "text": "Okay, so I was I can't find my phone and I need to get to Santa Monica Pier in 45 minutes and I need to leave pretty much right about now. Can you help me get there?",
                  "emotion": null,
                  "startTimeMs": 3920.0,
                  "endTimeMs": 12570.0,
                  "audio": "assets/audio/judge/emotion/10-ex01-ex02-fast-001-worst-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 3,
                  "text": "Okay, yep, absolutely. Okay, so you're just going to write this down really quick. It's not going to take you long.",
                  "emotion": null,
                  "startTimeMs": 11560.0,
                  "endTimeMs": 16160.0,
                  "audio": "assets/audio/judge/emotion/10-ex01-ex02-fast-001-worst-case/context_turn_03.wav"
                }
              ]
            }
          ]
        },
        {
          "key": "is",
          "label": "Information Structure",
          "description": "Examples focused on prominence, de-accenting, and discourse grounding.",
          "totalExamplesLoaded": 1122,
          "presentationCounts": {
            "best_case": 72,
            "worst_case": 915,
            "none": 132,
            "missing": 3
          },
          "showcaseCount": 10,
          "examples": [
            {
              "id": "01-ex01-ex02-default-004-best-case",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "ex01-ex02_default_004",
              "presentationFlag": "best_case",
              "rating": 5,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio perfectly matches the transcript and correctly de-accents the given word 'sport', placing the nuclear pitch accent on 'rough', mirroring the reference.",
              "judgeResponse": {
                "rating": 5,
                "transcript_match": true,
                "explanation": "The generated audio perfectly matches the transcript and correctly de-accents the given word 'sport', placing the nuclear pitch accent on 'rough', mirroring the reference.",
                "presentation_flag": "best_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The audio perfectly realizes the IS hypothesis, placing clear nuclear prominence on the new evaluation 'rough' while appropriately deaccenting the given word 'sport'."
              },
              "conversationId": "ex01-ex02_default_004",
              "segmentId": "ex01-ex02_default_004",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex02",
              "targetText": "Wow, that's a rough sport.",
              "contextDependency": {
                "reason": "Without the context of B talking about his sport, 'sport' would normally receive an accent as the phrase-final noun.",
                "failure_case": "A context-unaware TTS places the nuclear accent on 'sport', obscuring the actual informational focus."
              },
              "prosodyFocus": {
                "key_words": [
                  "rough",
                  "sport"
                ],
                "prosodic_features": "'rough' carries the nuclear pitch accent while 'sport' is prosodically reduced.",
                "explanation": "Because 'sport' is already active in the discourse, the prosodic prominence shifts to the adjective 'rough'. Equal stress would sound unnatural."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "MIXED",
                "subcategory": "given-new cooccurrence",
                "justification": "B just identified lacrosse as his 'main sport'. In A's response, 'sport' is GIVEN and 'rough' is the NEW descriptive information."
              },
              "wordLevelAnnotation": [
                {
                  "word": "rough",
                  "is_label": "NEW",
                  "why_context": "Introduces A's new evaluation of the sport.",
                  "expected_prosody": "H* pitch accent, prominent F0 peak",
                  "key_signal": "H* shape, F0 \u2191"
                },
                {
                  "word": "sport",
                  "is_label": "GIVEN",
                  "why_context": "Direct lexical repetition from B's preceding turn.",
                  "expected_prosody": "Deaccented, flat F0, shorter duration",
                  "key_signal": "F0 \u2193, dur \u2193"
                }
              ],
              "referenceTargetAudio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "Well, put a stick on your back. And, you know, that's another technique that they use where they put a stick across your back and they make you stay in one spot as you're, as you're, so you don't move. And...",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 12380.0,
                  "audio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "That reminds me of ballet. Oh my god.",
                  "emotion": null,
                  "startTimeMs": 11680.0,
                  "endTimeMs": 14270.0,
                  "audio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Did you ever do dance?",
                  "emotion": null,
                  "startTimeMs": 16780.0,
                  "endTimeMs": 18100.0,
                  "audio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "Don't you dance?",
                  "emotion": null,
                  "startTimeMs": 18450.0,
                  "endTimeMs": 54400.0,
                  "audio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 4,
                  "text": "I did dance when I was young and gymnastics. So, yeah, so fun. I did that for a long time.",
                  "emotion": null,
                  "startTimeMs": 54220.0,
                  "endTimeMs": 66480.0,
                  "audio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 5,
                  "text": "I have a question to ask a gymnastics person. Did you ever get injured when you were doing gymnastics? Oh yeah? Describe it, tell me. What happened?",
                  "emotion": null,
                  "startTimeMs": 65950.0,
                  "endTimeMs": 78990.0,
                  "audio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 6,
                  "text": "Well, actually, I was, I watched, did you, have you seen the documentary Athlete A?",
                  "emotion": null,
                  "startTimeMs": 79180.0,
                  "endTimeMs": 88020.0,
                  "audio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 7,
                  "text": "No I have not.",
                  "emotion": null,
                  "startTimeMs": 88380.0,
                  "endTimeMs": 89540.0,
                  "audio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 8,
                  "text": "It was loud enough that you could hear it in the gymnasium.",
                  "emotion": null,
                  "startTimeMs": 89800.0,
                  "endTimeMs": 197690.0,
                  "audio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/context_turn_08.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 9,
                  "text": "And,",
                  "emotion": null,
                  "startTimeMs": 198200.0,
                  "endTimeMs": 200050.0,
                  "audio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/context_turn_09.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 10,
                  "text": "It was like a palpable sound. It's really gross. But yeah, I've injured myself a lot. I've winded myself. I've probably had concussions from it.",
                  "emotion": null,
                  "startTimeMs": 201900.0,
                  "endTimeMs": 215150.0,
                  "audio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/context_turn_10.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 11,
                  "text": "Hey, you're talking about concussions. I've had eight of them. I've had eight concussions. Yeah. Yeah.",
                  "emotion": null,
                  "startTimeMs": 214600.0,
                  "endTimeMs": 220220.0,
                  "audio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/context_turn_11.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 12,
                  "text": "Really? What did you, what did you do sports wise?",
                  "emotion": null,
                  "startTimeMs": 218600.0,
                  "endTimeMs": 221780.0,
                  "audio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 13,
                  "text": "What didn't I do? I played... I did ballet, as you know. I did swimming, baseball, t-ball, basketball. I did football, pole vault. I trained for American Ninja Warrior. And then my main sport, though, the one that was most consistent throughout my younger years, was lacrosse. I played lacrosse for...",
                  "emotion": null,
                  "startTimeMs": 222740.0,
                  "endTimeMs": 250100.0,
                  "audio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/context_turn_13.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 14,
                  "text": "Eight years straight?",
                  "emotion": null,
                  "startTimeMs": 251470.0,
                  "endTimeMs": 253370.0,
                  "audio": "assets/audio/judge/is/01-ex01-ex02-default-004-best-case/context_turn_14.wav"
                }
              ]
            },
            {
              "id": "02-ex03-ex01-angry-001-best-case",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "ex03-ex01_angry_001",
              "presentationFlag": "best_case",
              "rating": 5,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio perfectly matches the transcript, handles disfluencies naturally, and accurately shifts prominence to '20 miles' while conveying the defensive tone.",
              "judgeResponse": {
                "rating": 5,
                "transcript_match": true,
                "explanation": "The generated audio perfectly matches the transcript, handles disfluencies naturally, and accurately shifts prominence to '20 miles' while conveying the defensive tone.",
                "presentation_flag": "best_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "No WER issues. 'Sunglasses' is appropriately deaccented as GIVEN, while '20 miles' receives a strong, prominent pitch accent as NEW information."
              },
              "conversationId": "ex03-ex01_angry_001",
              "segmentId": "ex03-ex01_angry_001",
              "style": "angry",
              "datasetSource": "espresso",
              "targetSpeaker": "B",
              "targetSpeakerId": "ex03",
              "targetText": "Yeah, well, my sunglasses don't, uh, correct for the fact that you were driving, like, like, 20 miles an hour in the 30-mile zone, so...",
              "contextDependency": {
                "reason": "Without A's prior mention of sunglasses, a TTS system would likely accent 'sunglasses' as the subject of the sentence.",
                "failure_case": "A context-unaware TTS places equal or primary stress on 'sunglasses', masking the defensive shift to A's speed."
              },
              "prosodyFocus": {
                "key_words": [
                  "sunglasses",
                  "20 miles"
                ],
                "prosodic_features": "sunglasses is deaccented; '20 miles' carries the nuclear pitch accent.",
                "explanation": "Because 'sunglasses' is already active in the discourse, the prosodic prominence shifts to the new information regarding the driving speed."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "MIXED",
                "subcategory": "given-new cooccurrence",
                "justification": "A accused B of wearing tinted sunglasses. B echoes 'sunglasses' as GIVEN, and introduces A's speed ('20 miles') as NEW information."
              },
              "wordLevelAnnotation": [
                {
                  "word": "sunglasses",
                  "is_label": "GIVEN",
                  "why_context": "A explicitly asked if B was wearing highly tinted sunglasses in the preceding turn.",
                  "expected_prosody": "Deaccented, flat F0, short duration",
                  "key_signal": "F0 \u2193, dur \u2193"
                },
                {
                  "word": "20 miles",
                  "is_label": "NEW",
                  "why_context": "B introduces the specific slow speed A was driving as a new defense for the accident.",
                  "expected_prosody": "H* pitch accent, high F0 peak, longer duration",
                  "key_signal": "H* shape, F0 peak \u2191"
                }
              ],
              "referenceTargetAudio": "assets/audio/judge/is/02-ex03-ex01-angry-001-best-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/is/02-ex03-ex01-angry-001-best-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex01",
                  "utteranceId": 0,
                  "text": "Hey, yo, what's your fucking problem?",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 2360.0,
                  "audio": "assets/audio/judge/is/02-ex03-ex01-angry-001-best-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex03",
                  "utteranceId": 1,
                  "text": "my problem apparently is you because you'd be just slamming on your brakes out of nowhere without any warning and",
                  "emotion": null,
                  "startTimeMs": 2670.0,
                  "endTimeMs": 9020.0,
                  "audio": "assets/audio/judge/is/02-ex03-ex01-angry-001-best-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex01",
                  "utteranceId": 2,
                  "text": "Oh, I'm slamming on my brakes. At least I have eyes. What did you have? Do you have like sunglasses on that are tinted 50 hundred million percent? What's your fucking deal, dude? You hit the back of my car.",
                  "emotion": null,
                  "startTimeMs": 9440.0,
                  "endTimeMs": 21510.0,
                  "audio": "assets/audio/judge/is/02-ex03-ex01-angry-001-best-case/context_turn_02.wav"
                }
              ]
            },
            {
              "id": "03-ex03-ex01-nonverbal-008-best-case",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "ex03-ex01_nonverbal_008",
              "presentationFlag": "best_case",
              "rating": 5,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio correctly places the nuclear accent on 'tank' and deaccents the given word 'Jell-O', perfectly matching the required information structure.",
              "judgeResponse": {
                "rating": 5,
                "transcript_match": true,
                "explanation": "The generated audio correctly places the nuclear accent on 'tank' and deaccents the given word 'Jell-O', perfectly matching the required information structure.",
                "presentation_flag": "best_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The speaker places a strong nuclear accent on the new word 'tank' and completely deaccents the given word 'Jell-O', perfectly realizing the information structure."
              },
              "conversationId": "ex03-ex01_nonverbal_008",
              "segmentId": "ex03-ex01_nonverbal_008",
              "style": "nonverbal",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex03",
              "targetText": "I could eat a tank of Jell-O right now.",
              "contextDependency": {
                "reason": "Without B's prior mention, 'Jell-O' would naturally receive the primary phrase stress as the final concrete noun in the sentence.",
                "failure_case": "A context-unaware TTS places a strong accent on 'Jell-O', erasing the anaphoric link to B's statement and sounding unnatural."
              },
              "prosodyFocus": {
                "key_words": [
                  "tank",
                  "Jell-O"
                ],
                "prosodic_features": "'tank' carries the nuclear accent; 'Jell-O' is completely deaccented.",
                "explanation": "Because 'Jell-O' is already active in the discourse, the primary stress must shift leftward onto the new entity ('tank')."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "MIXED",
                "subcategory": "given-new cooccurrence",
                "justification": "B introduces 'Jell-O' in the preceding turn. A reiterates 'Jell-O', making it GIVEN, while introducing 'tank' as NEW to indicate a large quantity."
              },
              "wordLevelAnnotation": [
                {
                  "word": "tank",
                  "is_label": "NEW",
                  "why_context": "Has not been mentioned previously; it represents the new concept of a massive quantity A wants to consume.",
                  "expected_prosody": "H* pitch accent, high F0 peak, longer duration",
                  "key_signal": "H* shape, F0 peak \u2191"
                },
                {
                  "word": "Jell-O",
                  "is_label": "GIVEN",
                  "why_context": "Direct lexical repetition from B's immediately preceding turn.",
                  "expected_prosody": "Deaccented, flat F0, short duration",
                  "key_signal": "F0 \u2193, dur \u2193"
                }
              ],
              "referenceTargetAudio": "assets/audio/judge/is/03-ex03-ex01-nonverbal-008-best-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/is/03-ex03-ex01-nonverbal-008-best-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex03",
                  "utteranceId": 0,
                  "text": "Oh, we made it.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 3470.0,
                  "audio": "assets/audio/judge/is/03-ex03-ex01-nonverbal-008-best-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "I feel like my legs are turning to Jell-O. Whew!",
                  "emotion": null,
                  "startTimeMs": 6650.0,
                  "endTimeMs": 11120.0,
                  "audio": "assets/audio/judge/is/03-ex03-ex01-nonverbal-008-best-case/context_turn_01.wav"
                }
              ]
            },
            {
              "id": "04-ex04-ex01-laughing-004-best-case",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "ex04-ex01_laughing_004",
              "presentationFlag": "best_case",
              "rating": 5,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio perfectly places emphatic focus on 'differently' and successfully deaccents 'sized dogs', capturing the contrastive correction exactly as required.",
              "judgeResponse": {
                "rating": 5,
                "transcript_match": true,
                "explanation": "The generated audio perfectly places emphatic focus on 'differently' and successfully deaccents 'sized dogs', capturing the contrastive correction exactly as required.",
                "presentation_flag": "best_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "Perfect WER. 'Differently' carries strong, emphatic prominence for the correction, while 'dogs' is correctly deaccented with a flat, low pitch."
              },
              "conversationId": "ex04-ex01_laughing_004",
              "segmentId": "ex04-ex01_laughing_004",
              "style": "laughing",
              "datasetSource": "espresso",
              "targetSpeaker": "B",
              "targetSpeakerId": "ex01",
              "targetText": "Very differently sized dogs.",
              "contextDependency": {
                "reason": "Without A's prior phrase 'separately sized dogs', 'dogs' would normally carry the nuclear pitch accent at the end of the phrase.",
                "failure_case": "TTS places a standard default accent on 'dogs' and insufficient emphasis on 'differently', completely obscuring the correction."
              },
              "prosodyFocus": {
                "key_words": [
                  "differently",
                  "dogs"
                ],
                "prosodic_features": "'differently' requires an emphatic L+H* accent, while the head noun 'dogs' must be completely deaccented.",
                "explanation": "Because the utterance's sole function is to correct a specific modifier, all prosodic prominence must fall on 'differently', leaving the naturally stressed head noun 'dogs' flat."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "CONTRASTIVE",
                "subcategory": "contrastive correction",
                "justification": "A uses the phrase 'separately sized dogs'. B directly corrects 'separately' to 'differently', while echoing 'sized dogs' as GIVEN."
              },
              "wordLevelAnnotation": [
                {
                  "word": "differently",
                  "is_label": "CONTRASTIVE",
                  "why_context": "Direct lexical correction of A's unusual phrase 'separately'.",
                  "expected_prosody": "L+H*, steep rise-fall, long duration",
                  "key_signal": "Steep rise + fall"
                },
                {
                  "word": "dogs",
                  "is_label": "GIVEN",
                  "why_context": "A just said 'dogs' in the immediately preceding utterance.",
                  "expected_prosody": "Completely deaccented, flat low pitch",
                  "key_signal": "F0 \u2193, dur \u2193"
                }
              ],
              "referenceTargetAudio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex04",
                  "utteranceId": 0,
                  "text": "Okay, so I'm at the park and I'm...",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 4670.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_00.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex04",
                  "utteranceId": 1,
                  "text": "Sorry, I'm at the park and I'm looking at this tiny little old man and he's walking and he's got this little, he's got this tiniest little leash linked to the biggest dog you've",
                  "emotion": null,
                  "startTimeMs": 5270.0,
                  "endTimeMs": 23670.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_01.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 2,
                  "text": "Okay?",
                  "emotion": null,
                  "startTimeMs": 20370.0,
                  "endTimeMs": 21290.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "Are you kidding me? How tall is this dude?",
                  "emotion": null,
                  "startTimeMs": 22920.0,
                  "endTimeMs": 26100.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex04",
                  "utteranceId": 4,
                  "text": "the old man he's trying and he just he just the dog takes off and goes and he falls right into the mud right smack dab his face in the mud and like",
                  "emotion": null,
                  "startTimeMs": 25280.0,
                  "endTimeMs": 71730.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 5,
                  "text": "Are they like the same height or something?",
                  "emotion": null,
                  "startTimeMs": 36120.0,
                  "endTimeMs": 38810.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_05.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 6,
                  "text": "Oh no. Oh no.",
                  "emotion": null,
                  "startTimeMs": 54390.0,
                  "endTimeMs": 57510.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 7,
                  "text": "I swear this is out of some cartoon.",
                  "emotion": null,
                  "startTimeMs": 70370.0,
                  "endTimeMs": 74430.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex04",
                  "utteranceId": 8,
                  "text": "It gets really excited and it goes after the St. Bernard and the St. Bernard, it gets in between its legs and it drips the St. Bernard. So the St. Bernard face planted in the same mud that its old man owner face planted in.",
                  "emotion": null,
                  "startTimeMs": 72720.0,
                  "endTimeMs": 157050.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 9,
                  "text": "How many people were there? How many people saw?",
                  "emotion": null,
                  "startTimeMs": 99210.0,
                  "endTimeMs": 102600.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_09.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 10,
                  "text": "You know what they say, like dog, like owner.",
                  "emotion": null,
                  "startTimeMs": 156420.0,
                  "endTimeMs": 161200.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_10.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex04",
                  "utteranceId": 11,
                  "text": "Like, owner! Yeah!",
                  "emotion": null,
                  "startTimeMs": 159320.0,
                  "endTimeMs": 161730.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_11.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 12,
                  "text": "Father like son, the apple doesn't fall far from the tree.",
                  "emotion": null,
                  "startTimeMs": 161330.0,
                  "endTimeMs": 166380.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_12.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex04",
                  "utteranceId": 13,
                  "text": "It's true. Thank goodness that little chihuahua was okay though. I was worried that it might have gotten a little freaked out getting all tangled up in the legs, but...",
                  "emotion": null,
                  "startTimeMs": 164130.0,
                  "endTimeMs": 174030.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_13.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 14,
                  "text": "Chihuahuas just always kind of look a little freaked out, right?",
                  "emotion": null,
                  "startTimeMs": 172180.0,
                  "endTimeMs": 176480.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_14.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex04",
                  "utteranceId": 15,
                  "text": "It's true, they always kind of... I think that's just kind of the nature of Chihuahuas. But I was really hopeful that this, like, old man and old woman with the tiny dogs and the big dogs would be like a coming together where they could...",
                  "emotion": null,
                  "startTimeMs": 175930.0,
                  "endTimeMs": 189740.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_15.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 16,
                  "text": "It's like a meat cute, right? Like a little meat cute.",
                  "emotion": null,
                  "startTimeMs": 188430.0,
                  "endTimeMs": 193600.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_16.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex04",
                  "utteranceId": 17,
                  "text": "Yeah, maybe they fall in love and start their lives as two people in love with two separately sized dogs.",
                  "emotion": null,
                  "startTimeMs": 190340.0,
                  "endTimeMs": 200050.0,
                  "audio": "assets/audio/judge/is/04-ex04-ex01-laughing-004-best-case/context_turn_17.wav"
                }
              ]
            },
            {
              "id": "05-ex04-ex02-awe-003-best-case",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "ex04-ex02_awe_003",
              "presentationFlag": "best_case",
              "rating": 5,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio correctly places strong contrastive emphasis on 'both' while de-stressing the given word 'hands', perfectly matching the reference prosody and discourse context.",
              "judgeResponse": {
                "rating": 5,
                "transcript_match": true,
                "explanation": "The generated audio correctly places strong contrastive emphasis on 'both' while de-stressing the given word 'hands', perfectly matching the reference prosody and discourse context.",
                "presentation_flag": "best_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The audio flawlessly matches the hypothesis. The quantifier 'both' receives clear focal emphasis with a distinct pitch rise, while the given word 'hands' is correctly deaccented."
              },
              "conversationId": "ex04-ex02_awe_003",
              "segmentId": "ex04-ex02_awe_003",
              "style": "awe",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex04",
              "targetText": "Absolutely. I love that we can see both of his hands like that, too.",
              "contextDependency": {
                "reason": "The listener only knows 'hands' is a given topic because B just highlighted them. Otherwise, the noun itself would take primary stress.",
                "failure_case": "TTS gives default phrase-final noun stress to 'hands' and ignores the necessary emphasis on 'both', flattening the conversational dynamic."
              },
              "prosodyFocus": {
                "key_words": [
                  "both",
                  "hands"
                ],
                "prosodic_features": "'both' receives contrastive/focal stress, suppressing the pitch on the following noun 'hands'.",
                "explanation": "The quantifier 'both' carries the salient new point about the hands, meaning it requires main prominence to show A is building upon B's observation."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "MIXED",
                "subcategory": "given-contrastive cooccurrence",
                "justification": "B extensively discussed 'his hands'. A treats 'hands' as GIVEN but emphasizes the quantifier 'both' to highlight a specific feature of them."
              },
              "wordLevelAnnotation": [
                {
                  "word": "hands",
                  "is_label": "GIVEN",
                  "why_context": "B just pointed out the 'hand placement' and 'his hands' in the immediately preceding turn.",
                  "expected_prosody": "Deaccented or reduced, low F0",
                  "key_signal": "F0 \u2193, dur \u2193 relative to 'both'"
                },
                {
                  "word": "both",
                  "is_label": "CONTRASTIVE",
                  "why_context": "A shifts the focus from the hands generally to the specific detail that two of them are visible.",
                  "expected_prosody": "Emphatic L+H* pitch accent, high F0, long duration",
                  "key_signal": "L+H* shape, dur \u2191"
                }
              ],
              "referenceTargetAudio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex04",
                  "utteranceId": 0,
                  "text": "Wow. This might be my favorite painting in the entire Met. I've never seen anything quite like this before.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 8940.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 1,
                  "text": "It reminds me of, do you remember the original Romeo and Juliet movie? The colors that they used to lay her down when she died and everything. It's almost like she's in a bed of, in a veil of that. They're in a veil of it together. Wow. Wow.",
                  "emotion": null,
                  "startTimeMs": 10130.0,
                  "endTimeMs": 35470.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex04",
                  "utteranceId": 2,
                  "text": "It's so flat, but there's so much depth at the same time to it. It's so beautiful with the colors and the flowers and the textures.",
                  "emotion": null,
                  "startTimeMs": 35070.0,
                  "endTimeMs": 45780.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 3,
                  "text": "I almost feel what I love about it is that she's wrapped in the vines of the flowers like she's been there for the whole time waiting for him to come to her.",
                  "emotion": null,
                  "startTimeMs": 46600.0,
                  "endTimeMs": 61460.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex04",
                  "utteranceId": 4,
                  "text": "That's beautiful. It's so intimate, their exchange, too. It feels like she's both wrapped up in him and the blanket and the flowers, and all three in one.",
                  "emotion": null,
                  "startTimeMs": 62420.0,
                  "endTimeMs": 74960.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 5,
                  "text": "Stunning.",
                  "emotion": null,
                  "startTimeMs": 78250.0,
                  "endTimeMs": 79020.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex04",
                  "utteranceId": 6,
                  "text": "Yeah.",
                  "emotion": null,
                  "startTimeMs": 79350.0,
                  "endTimeMs": 80540.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 7,
                  "text": "I wonder if what he's shrouded in is supposed to...",
                  "emotion": null,
                  "startTimeMs": 80500.0,
                  "endTimeMs": 86380.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_07.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 8,
                  "text": "represent something because the flowers go to his crown as though she's adorned him with them",
                  "emotion": null,
                  "startTimeMs": 88610.0,
                  "endTimeMs": 96450.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 9,
                  "text": "",
                  "emotion": null,
                  "startTimeMs": 96490.0,
                  "endTimeMs": 96810.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_09.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 10,
                  "text": "But you'll see with his outfit.",
                  "emotion": null,
                  "startTimeMs": 96930.0,
                  "endTimeMs": 101620.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_10.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 11,
                  "text": "It's almost like this otherworldly architecture coming into nature. Like it's marrying the two worlds.",
                  "emotion": null,
                  "startTimeMs": 102100.0,
                  "endTimeMs": 114120.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_11.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex04",
                  "utteranceId": 12,
                  "text": "That's true. I almost see sort of suns around the side of it, and it feels kind of like he's wrapping her up in his light. But I also like what you're saying about the architecture. I wouldn't have thought of it like that, but I see what you're saying with the rectangles and the shapes that kind of contrast the freedom of the flowers and the natural shapes. It's beautiful. Yeah.",
                  "emotion": null,
                  "startTimeMs": 114430.0,
                  "endTimeMs": 140380.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 13,
                  "text": "Yeah, and I love what you said about him shouting her in his light. And it's almost like the forest, the back of it being kind of darker in places. It's almost like it's contrasting the shadow that you would find in the forest.",
                  "emotion": null,
                  "startTimeMs": 140180.0,
                  "endTimeMs": 158270.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_13.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 14,
                  "text": "And his, you know, she has such delicate, like her hair color contrasted with his and her skin tone contrasted with his. Everything is just so delicate and",
                  "emotion": null,
                  "startTimeMs": 159610.0,
                  "endTimeMs": 171750.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_14.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 15,
                  "text": "Um.",
                  "emotion": null,
                  "startTimeMs": 173210.0,
                  "endTimeMs": 173620.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_15.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 16,
                  "text": "It's very... How do you say this?",
                  "emotion": null,
                  "startTimeMs": 175790.0,
                  "endTimeMs": 181230.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_16.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 17,
                  "text": "I mean, it's obviously, it reminds me of the divine feminine energy. And he's coming in with very masculine, you know, like doing actionable energy, especially with the shapes being as they are too. Stunning.",
                  "emotion": null,
                  "startTimeMs": 182460.0,
                  "endTimeMs": 198850.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_17.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex04",
                  "utteranceId": 18,
                  "text": "It's a very beautiful marriage of both, the feminine and masculine energies, and I love that it almost feels like they're laying down but standing up, and you can't quite tell what the body language is for him outside of what he's doing with her. It's all in relation to her, which makes her more of the focus of the painting almost, and it's gorgeous. It really is.",
                  "emotion": null,
                  "startTimeMs": 199550.0,
                  "endTimeMs": 228970.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_18.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex04",
                  "utteranceId": 19,
                  "text": "I'm almost certain my roommates in college made a puzzle by the same artist. The shapes look so familiar, yeah. It's the contrast of the rectangles and the flowers themselves remind me of other paintings that I think I might have seen by this artist.",
                  "emotion": null,
                  "startTimeMs": 233060.0,
                  "endTimeMs": 253710.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_19.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 20,
                  "text": "I just thought about this.",
                  "emotion": null,
                  "startTimeMs": 254850.0,
                  "endTimeMs": 256610.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_20.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 21,
                  "text": "",
                  "emotion": null,
                  "startTimeMs": 258529.99999999997,
                  "endTimeMs": 293870.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_21.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex04",
                  "utteranceId": 22,
                  "text": "It's sort of ethereal in that sense. I agree. It's almost like she's been there for so long. She's returning to the earth and he is taking her up into the heavens. And in some way you might be able to interpret it that he is sort of the angelic figure that is taking her from where she's lying in the fields and returning the circle of life back to the dead.",
                  "emotion": null,
                  "startTimeMs": 294620.0,
                  "endTimeMs": 323140.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_22.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 23,
                  "text": "Yeah. And I mean, she is very delicate. But just like you said, look at the hand placement, like his hands are so, so very delicately placed against her cheek and holding her head so, so gently. There's nothing about it that's harsh. It's just the color contrast.",
                  "emotion": null,
                  "startTimeMs": 323280.0,
                  "endTimeMs": 343280.0,
                  "audio": "assets/audio/judge/is/05-ex04-ex02-awe-003-best-case/context_turn_23.wav"
                }
              ]
            },
            {
              "id": "06-ex01-ex02-default-003-worst-case",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "ex01-ex02_default_003",
              "presentationFlag": "worst_case",
              "rating": 2,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio incorrectly places nuclear stress on the given phrase 'low bar' instead of deaccenting it, completely missing the contextual echoing present in the reference.",
              "judgeResponse": {
                "rating": 2,
                "transcript_match": true,
                "explanation": "The generated audio incorrectly places nuclear stress on the given phrase 'low bar' instead of deaccenting it, completely missing the contextual echoing present in the reference.",
                "presentation_flag": "worst_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The speaker correctly places the nuclear pitch accent on 'know' and strictly deaccents 'low bar', perfectly reflecting its GIVEN status from the preceding context."
              },
              "conversationId": "ex01-ex02_default_003",
              "segmentId": "ex01-ex02_default_003",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex02",
              "targetText": "I don't even know if that's a low bar, though.",
              "contextDependency": {
                "reason": "If isolated, 'low bar' would be the natural locus for nuclear stress as the sentence-final noun phrase.",
                "failure_case": "TTS places a strong H* accent on 'low bar', making it sound like A is originating the concept rather than echoing B."
              },
              "prosodyFocus": {
                "key_words": [
                  "know",
                  "low bar"
                ],
                "prosodic_features": "Nuclear stress falls early on 'know' (or 'that\\'s'), followed by strict post-nuclear deaccenting on 'low bar'.",
                "explanation": "Echoing a previously introduced noun phrase requires post-nuclear deaccenting to show it is already grounded in the immediate discourse."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "MIXED",
                "subcategory": "given-new cooccurrence",
                "justification": "B just established the concept of a 'low bar'. A echoes it as GIVEN while expressing a NEW cognitive stance."
              },
              "wordLevelAnnotation": [
                {
                  "word": "know",
                  "is_label": "NEW",
                  "why_context": "A introduces her own cognitive stance and reaction regarding B's previous statement.",
                  "expected_prosody": "H* pitch accent, higher F0",
                  "key_signal": "H* shape, F0 \u2191"
                },
                {
                  "word": "low bar",
                  "is_label": "GIVEN",
                  "why_context": "Directly echoes B's immediately preceding statement 'My bar is set real low.'",
                  "expected_prosody": "Deaccented, low F0, short duration",
                  "key_signal": "F0 \u2193, dur \u2193"
                }
              ],
              "referenceTargetAudio": "assets/audio/judge/is/06-ex01-ex02-default-003-worst-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/is/06-ex01-ex02-default-003-worst-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "It is pronounced Zed. It's much more simplistic to figure that out too. I'm just, no, I'm just letting you know, like you can sing the alphabet however you want, but if you don't end it in a Zed, there's even, there's even an artist named Zed's dead. I'm not even going to get into it. It's a thing.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 17290.0,
                  "audio": "assets/audio/judge/is/06-ex01-ex02-default-003-worst-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "it sounds like you kind of want to get into it jackie well look i i've been pronouncing it z my entire life and i'm open to new ideas because my opinion is malleable like clay",
                  "emotion": null,
                  "startTimeMs": 17320.0,
                  "endTimeMs": 34320.0,
                  "audio": "assets/audio/judge/is/06-ex01-ex02-default-003-worst-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Same. I moved to the U.S. I have to adapt.",
                  "emotion": null,
                  "startTimeMs": 33800.0,
                  "endTimeMs": 37970.0,
                  "audio": "assets/audio/judge/is/06-ex01-ex02-default-003-worst-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "That's kind of true. You also moved to freaking L.A., which is like, oh, you know, everything is changing all the time out here. You got to just like go with the flow. The punches are real.",
                  "emotion": null,
                  "startTimeMs": 38090.0,
                  "endTimeMs": 48650.0,
                  "audio": "assets/audio/judge/is/06-ex01-ex02-default-003-worst-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 4,
                  "text": "But what about you? Like, where are you from specifically?",
                  "emotion": null,
                  "startTimeMs": 50260.0,
                  "endTimeMs": 53610.0,
                  "audio": "assets/audio/judge/is/06-ex01-ex02-default-003-worst-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 5,
                  "text": "Where am I from?",
                  "emotion": null,
                  "startTimeMs": 53820.0,
                  "endTimeMs": 54600.0,
                  "audio": "assets/audio/judge/is/06-ex01-ex02-default-003-worst-case/context_turn_05.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 6,
                  "text": "Thank you.",
                  "emotion": null,
                  "startTimeMs": 55790.0,
                  "endTimeMs": 161340.0,
                  "audio": "assets/audio/judge/is/06-ex01-ex02-default-003-worst-case/context_turn_06.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 7,
                  "text": "So sorry, so are you acting now full time?",
                  "emotion": null,
                  "startTimeMs": 161720.0,
                  "endTimeMs": 166080.0,
                  "audio": "assets/audio/judge/is/06-ex01-ex02-default-003-worst-case/context_turn_07.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 8,
                  "text": "Yeah.",
                  "emotion": null,
                  "startTimeMs": 166210.0,
                  "endTimeMs": 166600.0,
                  "audio": "assets/audio/judge/is/06-ex01-ex02-default-003-worst-case/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 9,
                  "text": "Now I am.",
                  "emotion": null,
                  "startTimeMs": 166680.0,
                  "endTimeMs": 168240.0,
                  "audio": "assets/audio/judge/is/06-ex01-ex02-default-003-worst-case/context_turn_09.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 10,
                  "text": "It's awesome. I'm so lucky to be in this position. I get to do a lot of audio books. So that pays my rent. I was talking with a friend about like, I don't know about you. Are you acting full time as well?",
                  "emotion": null,
                  "startTimeMs": 168400.0,
                  "endTimeMs": 184950.0,
                  "audio": "assets/audio/judge/is/06-ex01-ex02-default-003-worst-case/context_turn_10.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 11,
                  "text": "That's what I'm trying to do.",
                  "emotion": null,
                  "startTimeMs": 185760.0,
                  "endTimeMs": 188050.0,
                  "audio": "assets/audio/judge/is/06-ex01-ex02-default-003-worst-case/context_turn_11.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 12,
                  "text": "That's fair, that's fair. I was talking with a friend that was like,",
                  "emotion": null,
                  "startTimeMs": 188360.0,
                  "endTimeMs": 193570.0,
                  "audio": "assets/audio/judge/is/06-ex01-ex02-default-003-worst-case/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 13,
                  "text": "He was trying to define voice acting or acting in general as you make it when you're famous. You make it when you're, like, you know, up in the big leagues with, you know, Zendaya and Tom Holland. And that's when you make it. And I'm like, no, you make it when you can make a little bit of money and can pay, like, half your rent, you know, doing this stuff. That's my standards. My bar is set real low.",
                  "emotion": null,
                  "startTimeMs": 195100.0,
                  "endTimeMs": 224940.0,
                  "audio": "assets/audio/judge/is/06-ex01-ex02-default-003-worst-case/context_turn_13.wav"
                }
              ]
            },
            {
              "id": "07-ex01-ex02-default-012-worst-case",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "ex01-ex02_default_012",
              "presentationFlag": "worst_case",
              "rating": 2,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio places primary stress on the given entities 'manchego' and 'cheddar' rather than deaccenting them, falling exactly into the predicted failure case.",
              "judgeResponse": {
                "rating": 2,
                "transcript_match": true,
                "explanation": "The generated audio places primary stress on the given entities 'manchego' and 'cheddar' rather than deaccenting them, falling exactly into the predicted failure case.",
                "presentation_flag": "worst_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The speaker correctly places primary stress on the verb 'have' while deaccenting the given cheese names 'manchego' and 'cheddar', perfectly matching the information structure."
              },
              "conversationId": "ex01-ex02_default_012",
              "segmentId": "ex01-ex02_default_012",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex02",
              "targetText": "Ooh, I have manchego and I have cheddar, so perfect.",
              "contextDependency": {
                "reason": "Without the prior turn, a TTS system would assume 'manchego' and 'cheddar' are new entities being introduced and place prominent H* accents on both.",
                "failure_case": "TTS places primary stress on the cheese names, making A sound like they are spontaneously introducing the cheese types rather than acknowledging B's list."
              },
              "prosodyFocus": {
                "key_words": [
                  "manchego",
                  "cheddar"
                ],
                "prosodic_features": "Both nouns should be deaccented or significantly reduced compared to a neutral reading.",
                "explanation": "Because these specific cheeses were just offered as options, they are given information. The new/exciting information is the fact that A already possesses them ('have') and the evaluation ('perfect')."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "GIVEN",
                "subcategory": "repeated mention",
                "justification": "B just explicitly listed 'manchego' and 'cheddar' as options in the immediately preceding turn. A is confirming possession of those exact items."
              },
              "wordLevelAnnotation": [
                {
                  "word": "manchego",
                  "is_label": "GIVEN",
                  "why_context": "Directly repeats B's suggestion.",
                  "expected_prosody": "Deaccented, lower F0, flatter contour",
                  "key_signal": "F0 \u2193, dur \u2193"
                },
                {
                  "word": "cheddar",
                  "is_label": "GIVEN",
                  "why_context": "Directly repeats B's suggestion.",
                  "expected_prosody": "Deaccented, lower F0, flatter contour",
                  "key_signal": "F0 \u2193, dur \u2193"
                }
              ],
              "referenceTargetAudio": "assets/audio/judge/is/07-ex01-ex02-default-012-worst-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/is/07-ex01-ex02-default-012-worst-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "Hey Kyle, how's it going?",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 1460.0,
                  "audio": "assets/audio/judge/is/07-ex01-ex02-default-012-worst-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "Oh, hey, Barbara. Haven't heard from you in a little bit. What's going on?",
                  "emotion": null,
                  "startTimeMs": 1590.0,
                  "endTimeMs": 4920.0,
                  "audio": "assets/audio/judge/is/07-ex01-ex02-default-012-worst-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Um, I didn't want to bother you, but I was really hoping I could start cooking your favorite dish that you made for me. Oh my gosh, yeah, I love grilled cheese, yeah.",
                  "emotion": null,
                  "startTimeMs": 4950.0,
                  "endTimeMs": 16420.0,
                  "audio": "assets/audio/judge/is/07-ex01-ex02-default-012-worst-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "The grilled cheese, right?",
                  "emotion": null,
                  "startTimeMs": 11530.0,
                  "endTimeMs": 13870.0,
                  "audio": "assets/audio/judge/is/07-ex01-ex02-default-012-worst-case/context_turn_03.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 4,
                  "text": "Oh, it was, okay, yeah. I am so willing to help you. Do you have your ingredients?",
                  "emotion": null,
                  "startTimeMs": 15560.0,
                  "endTimeMs": 20770.0,
                  "audio": "assets/audio/judge/is/07-ex01-ex02-default-012-worst-case/context_turn_04.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 5,
                  "text": "Yeah, you have to remind me. I just want to make sure I have everything.",
                  "emotion": null,
                  "startTimeMs": 21720.0,
                  "endTimeMs": 24940.0,
                  "audio": "assets/audio/judge/is/07-ex01-ex02-default-012-worst-case/context_turn_05.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 6,
                  "text": "Okay, okay. So you want to get a good sourdough bread. You want to get your two cheeses. You can get cheddar Swiss. You can get manchego. You can also get goat.",
                  "emotion": null,
                  "startTimeMs": 25180.0,
                  "endTimeMs": 36180.0,
                  "audio": "assets/audio/judge/is/07-ex01-ex02-default-012-worst-case/context_turn_06.wav"
                }
              ]
            },
            {
              "id": "08-ex01-ex02-fast-002-worst-case",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "ex01-ex02_fast_002",
              "presentationFlag": "worst_case",
              "rating": 2,
              "transcriptMatch": true,
              "judgeExplanation": "TTS incorrectly places strong emphasis on the given entity 'food truck' and renders the repeated words very unnaturally.",
              "judgeResponse": {
                "rating": 2,
                "transcript_match": true,
                "explanation": "TTS incorrectly places strong emphasis on the given entity 'food truck' and renders the repeated words very unnaturally.",
                "presentation_flag": "worst_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "No WER issues. 'Food truck' is appropriately deaccented and spoken quickly, while 'theme' receives a clear pitch accent and duration lengthening, perfectly matching the hypothesis."
              },
              "conversationId": "ex01-ex02_fast_002",
              "segmentId": "ex01-ex02_fast_002",
              "style": "fast",
              "datasetSource": "espresso",
              "targetSpeaker": "B",
              "targetSpeakerId": "ex01",
              "targetText": "Great food truck. It's all, it's all, it's all got a airplane food theme. You'll love it.",
              "contextDependency": {
                "reason": "Without the preceding exchange, 'food truck' would be treated as an important new entity.",
                "failure_case": "TTS accents 'food truck' strongly, disrupting the conversational flow by treating a highly salient background entity as a new focal point."
              },
              "prosodyFocus": {
                "key_words": [
                  "food truck",
                  "theme"
                ],
                "prosodic_features": "Minimal pitch movement on 'food truck' followed by a significant accentuation on the noun phrase 'airplane food theme'.",
                "explanation": "By deaccenting 'food truck', the speaker signals continuity of the topic, allowing the listener's attention to be drawn entirely to the novel description."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "MIXED",
                "subcategory": "given-new cooccurrence",
                "justification": "The entity 'food truck' is heavily established as GIVEN. The concept of an 'airplane food theme' is the NEW descriptive information."
              },
              "wordLevelAnnotation": [
                {
                  "word": "food truck",
                  "is_label": "GIVEN",
                  "why_context": "The speakers have been exclusively discussing food trucks for the past three turns.",
                  "expected_prosody": "Deaccented, low pitch, spoken relatively quickly",
                  "key_signal": "F0 \u2193"
                },
                {
                  "word": "theme",
                  "is_label": "NEW",
                  "why_context": "The defining characteristic of the specific food truck is newly introduced.",
                  "expected_prosody": "H* pitch accent, distinct pitch peak, longer duration",
                  "key_signal": "H* shape, F0 peak \u2191"
                }
              ],
              "referenceTargetAudio": "assets/audio/judge/is/08-ex01-ex02-fast-002-worst-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/is/08-ex01-ex02-fast-002-worst-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "Hey, Tim.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 1750.0,
                  "audio": "assets/audio/judge/is/08-ex01-ex02-fast-002-worst-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "Yo, what's up?",
                  "emotion": null,
                  "startTimeMs": 1340.0,
                  "endTimeMs": 2120.0,
                  "audio": "assets/audio/judge/is/08-ex01-ex02-fast-002-worst-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Um, this is so silly. I left my phone at home and I didn't mean to leave it on the charger. I meant to bring it with me. Yeah, I, so I need to get down to Balboa Park. Um, and I'm going down there to see my friend and I just really need some assistance. So do you think you could, um, I have pen and paper ready to go. If you wouldn't mind, I'm just going to take some notes so that I can get onto the highway and get down there. I usually know once I'm like down in the area, it's just hard from here to there.",
                  "emotion": null,
                  "startTimeMs": 1810.0,
                  "endTimeMs": 31770.0,
                  "audio": "assets/audio/judge/is/08-ex01-ex02-fast-002-worst-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "Oh, that happens to the best of us.",
                  "emotion": null,
                  "startTimeMs": 8510.0,
                  "endTimeMs": 11120.0,
                  "audio": "assets/audio/judge/is/08-ex01-ex02-fast-002-worst-case/context_turn_03.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 4,
                  "text": "Bumblebuck, what you doing down there?",
                  "emotion": null,
                  "startTimeMs": 14520.0,
                  "endTimeMs": 16160.0,
                  "audio": "assets/audio/judge/is/08-ex01-ex02-fast-002-worst-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 5,
                  "text": "Gotcha. All right. Also, if you have a camera, bring a camera as well because Balboa Park is absolutely gorgeous. Absolutely gorgeous.",
                  "emotion": null,
                  "startTimeMs": 32030.0,
                  "endTimeMs": 38020.0,
                  "audio": "assets/audio/judge/is/08-ex01-ex02-fast-002-worst-case/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 6,
                  "text": "I do have a small camera in the car. Thank you for mentioning that.",
                  "emotion": null,
                  "startTimeMs": 36880.0,
                  "endTimeMs": 40310.0,
                  "audio": "assets/audio/judge/is/08-ex01-ex02-fast-002-worst-case/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 7,
                  "text": "want to get stuck in that traffic for three hours that sucks um so weave and dodge and all that stuff because i assume your friend's waiting for you down there in balboa um yeah okay so once you once you're down there you're going to get off on uh 12th street and once you're on 12th street you're going to take that straight all the way down past the arch on your right hand side and then take a right on zoo entrance and we need to take a right on zoo entrance that's right next to the san diego zoo is balboa park um don't confuse the two",
                  "emotion": null,
                  "startTimeMs": 39220.0,
                  "endTimeMs": 100120.0,
                  "audio": "assets/audio/judge/is/08-ex01-ex02-fast-002-worst-case/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 8,
                  "text": "Yeah yeah yeah.",
                  "emotion": null,
                  "startTimeMs": 50170.0,
                  "endTimeMs": 50760.0,
                  "audio": "assets/audio/judge/is/08-ex01-ex02-fast-002-worst-case/context_turn_08.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 9,
                  "text": "Is there another way around it in case there's a lot of traffic on the side?",
                  "emotion": null,
                  "startTimeMs": 99030.0,
                  "endTimeMs": 102360.0,
                  "audio": "assets/audio/judge/is/08-ex01-ex02-fast-002-worst-case/context_turn_09.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 10,
                  "text": "Sorry about that, but it's a wonderful, wonderful experience.",
                  "emotion": null,
                  "startTimeMs": 102790.0,
                  "endTimeMs": 141320.0,
                  "audio": "assets/audio/judge/is/08-ex01-ex02-fast-002-worst-case/context_turn_10.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 11,
                  "text": "Oh, thank you so much for giving me all of that. Okay, I've got everything written down. And do you have any recommendations for food in the area or the food trucks there?",
                  "emotion": null,
                  "startTimeMs": 141280.0,
                  "endTimeMs": 149090.0,
                  "audio": "assets/audio/judge/is/08-ex01-ex02-fast-002-worst-case/context_turn_11.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 12,
                  "text": "Yeah, there's going to be food trucks there. You want to go to this one called La Guardia.",
                  "emotion": null,
                  "startTimeMs": 149450.0,
                  "endTimeMs": 153310.0,
                  "audio": "assets/audio/judge/is/08-ex01-ex02-fast-002-worst-case/context_turn_12.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 13,
                  "text": "Okay.",
                  "emotion": null,
                  "startTimeMs": 153300.0,
                  "endTimeMs": 154100.0,
                  "audio": "assets/audio/judge/is/08-ex01-ex02-fast-002-worst-case/context_turn_13.wav"
                }
              ]
            },
            {
              "id": "09-ex01-ex02-fast-006-worst-case",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "ex01-ex02_fast_006",
              "presentationFlag": "worst_case",
              "rating": 2,
              "transcriptMatch": true,
              "judgeExplanation": "The generated audio places primary stress on 'first' instead of the contrastive focus on 'chorus', failing to signal the correction.",
              "judgeResponse": {
                "rating": 2,
                "transcript_match": true,
                "explanation": "The generated audio places primary stress on 'first' instead of the contrastive focus on 'chorus', failing to signal the correction.",
                "presentation_flag": "worst_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The speaker places clear, emphatic contrastive stress on 'chorus' and heavily deaccents the given word 'first', perfectly executing the corrective IS hypothesis."
              },
              "conversationId": "ex01-ex02_fast_006",
              "segmentId": "ex01-ex02_fast_006",
              "style": "fast",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex02",
              "targetText": "No, chorus is first.",
              "contextDependency": {
                "reason": "Without B's setup, 'first' would likely be accented as new information.",
                "failure_case": "TTS places primary stress on 'first', missing the corrective focal shift to 'chorus'."
              },
              "prosodyFocus": {
                "key_words": [
                  "chorus",
                  "first"
                ],
                "prosodic_features": "'chorus' carries emphatic contrastive stress; 'first' is heavily reduced.",
                "explanation": "The contrastive focus on 'chorus' combined with the deaccentuation of 'first' signals a direct correction of B's sequence."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "CONTRASTIVE",
                "subcategory": "contrastive correction",
                "justification": "B mistakenly assumes Blanche and her sister are the first out on the set. A directly contradicts this by asserting that the chorus is first."
              },
              "wordLevelAnnotation": [
                {
                  "word": "chorus",
                  "is_label": "CONTRASTIVE",
                  "why_context": "Replaces the incorrect assumption of 'Blanche and her sister'.",
                  "expected_prosody": "L+H* pitch accent, steep rise-fall, long duration",
                  "key_signal": "L+H* shape, high F0"
                },
                {
                  "word": "first",
                  "is_label": "GIVEN",
                  "why_context": "Echoes B's immediately preceding phrase 'first person out'.",
                  "expected_prosody": "Deaccented, flat F0, short duration",
                  "key_signal": "F0 \u2193, dur \u2193"
                }
              ],
              "referenceTargetAudio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "Hey, Frank, I really need you to just put down the broom and I need you over here right now.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 3620.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "Right now? But I was sweeping the back. Okay, okay, I'm coming. What's up?",
                  "emotion": null,
                  "startTimeMs": 3550.0,
                  "endTimeMs": 9060.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Yeah. No, now. Thank you so much. Okay. So here's the thing. Um, our Stanley's gone. So it looks like you're going to be filling in for Stanley.",
                  "emotion": null,
                  "startTimeMs": 5880.0,
                  "endTimeMs": 14410.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "Oh no, really?",
                  "emotion": null,
                  "startTimeMs": 14770.0,
                  "endTimeMs": 15640.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 4,
                  "text": "Yep. Wardrobe is already going to be ready for you. It's very straightforward. All you're going to be wearing is a white tank top and some pants that come up to your navel. And that's it.",
                  "emotion": null,
                  "startTimeMs": 15460.0,
                  "endTimeMs": 25380.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 5,
                  "text": "Well, thank God I've been friggin' acting, huh? Not acting, I've been working out. I've never acted one day in my life. Okay, okay, okay, okay, okay, okay.",
                  "emotion": null,
                  "startTimeMs": 24570.0,
                  "endTimeMs": 33800.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 6,
                  "text": "Yeah, you look great.",
                  "emotion": null,
                  "startTimeMs": 27860.0,
                  "endTimeMs": 29650.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_06.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 7,
                  "text": "that but when she comes into the house when what that's when you're you got to be sitting there okay",
                  "emotion": null,
                  "startTimeMs": 30130.0,
                  "endTimeMs": 71210.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_07.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 8,
                  "text": "The polka music, yeah?",
                  "emotion": null,
                  "startTimeMs": 41210.0,
                  "endTimeMs": 42290.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 9,
                  "text": "I don't know how to pronounce it anyway.",
                  "emotion": null,
                  "startTimeMs": 52110.0,
                  "endTimeMs": 53460.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_09.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 10,
                  "text": "Is that what my cue is?",
                  "emotion": null,
                  "startTimeMs": 70810.0,
                  "endTimeMs": 72200.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_10.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 11,
                  "text": "Yeah, didn't mean to clap. Just got really excited about it. Okay, so you're going to be sitting there, you're going to be at the table, and you're already going to have some whiskey in hand. So it's just going to be a bottle. It's not actual alcohol.",
                  "emotion": null,
                  "startTimeMs": 72480.0,
                  "endTimeMs": 84320.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_11.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 12,
                  "text": "Oh really? That's unfortunate.",
                  "emotion": null,
                  "startTimeMs": 83650.0,
                  "endTimeMs": 85840.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_12.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 13,
                  "text": "Okay? It's not going to be any actual alcohol. It's just going to be, um, it's just going to be water in a bottle and it's going to be colored.",
                  "emotion": null,
                  "startTimeMs": 84460.0,
                  "endTimeMs": 90770.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_13.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 14,
                  "text": "Okay. Understood.",
                  "emotion": null,
                  "startTimeMs": 90080.0,
                  "endTimeMs": 91460.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_14.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 15,
                  "text": "Okay, so you're just going to be sitting there at the front table. You can tell that it's a little bit dingy. The entire impetus for you of this entire play is just how you can antagonize Blanche.",
                  "emotion": null,
                  "startTimeMs": 91160.0,
                  "endTimeMs": 102340.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_15.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 16,
                  "text": "Ultimately, you're just trying to torture her and make her really suffer because you think that she's just a terrible person because you don't like her ethics. You don't like anything about her. You don't agree with anything that she does in her life. You don't like the fact that she is a teacher. You don't like the fact that she does anything. You think that she just kind of floats through the world and gets everything that she wants. So ultimately, you're just trying to antagonize her to the point. So you have to be rough with her. This is going to be a rough role. Do you think you can handle that?",
                  "emotion": null,
                  "startTimeMs": 102490.0,
                  "endTimeMs": 163010.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_16.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 17,
                  "text": "I think I can handle it. Let me just recount it real quick, um, because there's a lot of things to handle at once. Okay, so first things first, I'm not going to be the first person out on the set because Blanche and her sister are going to be out on the set.",
                  "emotion": null,
                  "startTimeMs": 162900.0,
                  "endTimeMs": 172290.0,
                  "audio": "assets/audio/judge/is/09-ex01-ex02-fast-006-worst-case/context_turn_17.wav"
                }
              ]
            },
            {
              "id": "10-ex03-ex01-angry-001-worst-case",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "ex03-ex01_angry_001",
              "presentationFlag": "worst_case",
              "rating": 2,
              "transcriptMatch": true,
              "judgeExplanation": "The TTS incorrectly places a pitch accent on the given word 'concussion', failing to deaccent it as the reference does.",
              "judgeResponse": {
                "rating": 2,
                "transcript_match": true,
                "explanation": "The TTS incorrectly places a pitch accent on the given word 'concussion', failing to deaccent it as the reference does.",
                "presentation_flag": "worst_case"
              },
              "modelOutput": {
                "rating": 5,
                "explanation": "The speaker flawlessly realizes the information structure, placing emphatic stress on 'Bullshit' and completely deaccenting the given word 'concussion'."
              },
              "conversationId": "ex03-ex01_angry_001",
              "segmentId": "ex03-ex01_angry_001",
              "style": "angry",
              "datasetSource": "espresso",
              "targetSpeaker": "B",
              "targetSpeakerId": "ex03",
              "targetText": "Bullshit, you don't have a concussion.",
              "contextDependency": {
                "reason": "Out of context, 'concussion' is the key content noun and would normally receive sentence-final nuclear stress.",
                "failure_case": "TTS places a primary pitch accent on 'concussion', making it sound like an objective medical statement rather than an aggressive dismissal of A's claim."
              },
              "prosodyFocus": {
                "key_words": [
                  "Bullshit",
                  "concussion"
                ],
                "prosodic_features": "Heavy contrastive stress on 'Bullshit', with 'concussion' completely deaccented.",
                "explanation": "Because 'concussion' is the topic just raised by A, the prosodic weight must shift entirely to B's rejection of it."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "MIXED",
                "subcategory": "given-contrastive cooccurrence",
                "justification": "A just stated 'I think I have a concussion'. B emphatically rejects this, rendering 'concussion' GIVEN and the rejection CONTRASTIVE."
              },
              "wordLevelAnnotation": [
                {
                  "word": "Bullshit",
                  "is_label": "CONTRASTIVE",
                  "why_context": "Directly and emphatically rejects A's immediately preceding claim.",
                  "expected_prosody": "Emphatic L+H*, very high F0, long duration",
                  "key_signal": "L+H* shape, steep fall"
                },
                {
                  "word": "concussion",
                  "is_label": "GIVEN",
                  "why_context": "A just introduced the claim of having a concussion.",
                  "expected_prosody": "Completely deaccented, flat F0 contour",
                  "key_signal": "F0 \u2193, dur \u2193"
                }
              ],
              "referenceTargetAudio": "assets/audio/judge/is/10-ex03-ex01-angry-001-worst-case/reference_target.wav",
              "generatedAudio": "assets/audio/judge/is/10-ex03-ex01-angry-001-worst-case/generated_output.wav",
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex01",
                  "utteranceId": 0,
                  "text": "Hey, yo, what's your fucking problem?",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 2360.0,
                  "audio": "assets/audio/judge/is/10-ex03-ex01-angry-001-worst-case/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex03",
                  "utteranceId": 1,
                  "text": "my problem apparently is you because you'd be just slamming on your brakes out of nowhere without any warning and",
                  "emotion": null,
                  "startTimeMs": 2670.0,
                  "endTimeMs": 9020.0,
                  "audio": "assets/audio/judge/is/10-ex03-ex01-angry-001-worst-case/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex01",
                  "utteranceId": 2,
                  "text": "Oh, I'm slamming on my brakes. At least I have eyes. What did you have? Do you have like sunglasses on that are tinted 50 hundred million percent? What's your fucking deal, dude? You hit the back of my car.",
                  "emotion": null,
                  "startTimeMs": 9440.0,
                  "endTimeMs": 21510.0,
                  "audio": "assets/audio/judge/is/10-ex03-ex01-angry-001-worst-case/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex03",
                  "utteranceId": 3,
                  "text": "Yeah, well, my sunglasses don't, uh, correct for the fact that you were driving, like, like, 20 miles an hour in the 30-mile zone, so...",
                  "emotion": null,
                  "startTimeMs": 21810.0,
                  "endTimeMs": 28680.0,
                  "audio": "assets/audio/judge/is/10-ex03-ex01-angry-001-worst-case/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex01",
                  "utteranceId": 4,
                  "text": "Oh, so you sped up into me. Is that the story? Is that the story?",
                  "emotion": null,
                  "startTimeMs": 28420.0,
                  "endTimeMs": 32360.0,
                  "audio": "assets/audio/judge/is/10-ex03-ex01-angry-001-worst-case/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex03",
                  "utteranceId": 5,
                  "text": "If you would drive like a reasonable person, then maybe I wouldn't have to be on your ass trying to nudge you to speed up so I can get where I'm going because other people, not everyone in the world runs on your schedule, asshole. Sometimes people need to get to work.",
                  "emotion": null,
                  "startTimeMs": 32890.0,
                  "endTimeMs": 48480.0,
                  "audio": "assets/audio/judge/is/10-ex03-ex01-angry-001-worst-case/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex01",
                  "utteranceId": 6,
                  "text": "Well, maybe, maybe...",
                  "emotion": null,
                  "startTimeMs": 48920.0,
                  "endTimeMs": 50770.0,
                  "audio": "assets/audio/judge/is/10-ex03-ex01-angry-001-worst-case/context_turn_06.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex01",
                  "utteranceId": 7,
                  "text": "Maybe you like the smell of my ass because you were just up there. Just like your nose was in the exhaust pipe of my fucking car, dude. I was going the speed limit and you just ran right into me. It's not like I'm trying to get like $5,000 in damage to my rear bumper. That's not my fucking priority. My fucking priority is getting to work on time and making the money so I can live, which you are currently a boulder in the way of my life.",
                  "emotion": null,
                  "startTimeMs": 51050.0,
                  "endTimeMs": 81330.0,
                  "audio": "assets/audio/judge/is/10-ex03-ex01-angry-001-worst-case/context_turn_07.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex03",
                  "utteranceId": 8,
                  "text": "Hey, look.",
                  "emotion": null,
                  "startTimeMs": 81360.0,
                  "endTimeMs": 83580.0,
                  "audio": "assets/audio/judge/is/10-ex03-ex01-angry-001-worst-case/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex03",
                  "utteranceId": 9,
                  "text": "Maybe your first priority should be call AAA and get your speedometer fixed because you clearly are impaired if you think you were going the speed limit.",
                  "emotion": null,
                  "startTimeMs": 84700.0,
                  "endTimeMs": 93300.0,
                  "audio": "assets/audio/judge/is/10-ex03-ex01-angry-001-worst-case/context_turn_09.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex01",
                  "utteranceId": 10,
                  "text": "Oh, you think I'm impaired. Okay.",
                  "emotion": null,
                  "startTimeMs": 93100.0,
                  "endTimeMs": 95210.0,
                  "audio": "assets/audio/judge/is/10-ex03-ex01-angry-001-worst-case/context_turn_10.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex03",
                  "utteranceId": 11,
                  "text": "You either read the sign wrong or your speedometer needs some repair. Because if you're not going to let people pass you, then I don't know what you think you're doing on the road. If you're going to go below the speed limit and someone's behind you, you'll let them pass. Because maybe people got places to go.",
                  "emotion": null,
                  "startTimeMs": 95450.0,
                  "endTimeMs": 111300.0,
                  "audio": "assets/audio/judge/is/10-ex03-ex01-angry-001-worst-case/context_turn_11.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex01",
                  "utteranceId": 12,
                  "text": "I understand that you have places to go. I have places to go too, buddy. Don't worry. I'm not just driving for no reason. I'm not an idiot. But what I am is patient. And I let the road and the scenery filter through my eyes. And I love it. I love looking at the road. I love looking at the scenery. And you hit the back of me as I think I have a concussion.",
                  "emotion": null,
                  "startTimeMs": 110960.0,
                  "endTimeMs": 133780.0,
                  "audio": "assets/audio/judge/is/10-ex03-ex01-angry-001-worst-case/context_turn_12.wav"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "auto-eval",
      "label": "Automatic Eval Pipeline",
      "kind": "auto-eval",
      "description": "Reference audio graded by the Automatic Eval Pipeline. 10 diverse examples per dataset.",
      "datasets": [
        {
          "key": "ci",
          "label": "Communicative Intent",
          "description": "Reference audio graded by the Automatic Eval Pipeline.",
          "totalExamplesLoaded": 1192,
          "ratingCounts": {
            "5": 1191,
            "None": 1
          },
          "sourceCounts": {
            "multiturn": 569,
            "swdb": 502,
            "espresso": 121
          },
          "selectedSourceCounts": {
            "multiturn": 4,
            "swdb": 3,
            "espresso": 3
          },
          "showcaseCount": 10,
          "examples": [
            {
              "id": "01-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "t_04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d",
              "rating": 5,
              "judgeExplanation": "The audio perfectly captures the contrastive stress on 'didn't' and 'did', correctly realizing the intended information structure without any WER issues.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The audio perfectly captures the contrastive stress on 'didn't' and 'did', correctly realizing the intended information structure without any WER issues."
              },
              "conversationId": "t_04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "B",
              "targetSpeakerId": null,
              "targetText": "I didn't. I did see the ABC would not let him retire at 70!",
              "contextDependency": {
                "reason": "Without the preceding question asking if B saw a specific thing, 'I didn't' lacks an antecedent, and the contrastive nature of the follow-up 'I did see' is completely lost.",
                "failure_case": "A default TTS might emphasize 'ABC' or 'retire' and leave the auxiliary verb 'did' unaccented, missing the crucial pragmatic contrast of 'I didn't see X, but I DID see Y'."
              },
              "prosodyFocus": {
                "key_words": [
                  "didn't",
                  "did"
                ],
                "prosodic_features": "contrastive stress on 'didn't' and 'did', full falling intonation on 'didn't', brief pause and pitch reset before 'I did see'",
                "explanation": "The utterance requires contrastive stress to highlight the difference between the commercial B didn't see and the fact B actually did see. A neutral reading would miss this parallel structure."
              },
              "communicativeIntent": {
                "category": "statement",
                "subcategory": "assertion",
                "justification": "B directly answers A's yes/no question with a negative, then immediately follows with an affirmative statement about what they DID see, creating a strong informational contrast."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/ci/01-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "What do you think about Keith Jacksons death?",
                  "emotion": "Sad",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/01-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "It's sad. I wonder how many people grew up hearing his voice?",
                  "emotion": "Sad",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/01-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "I imagine this number in the millions taking into account he had a 54 year broadcasting carreer, so sad, but he was old.",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/01-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "I like that he used this phrase alot Whoa, Nellie!",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/01-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "That was a good phrase I liked it as well, did you see the beer comercial, the one in which he used this phrase?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/01-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_04.wav"
                }
              ]
            },
            {
              "id": "02-sw02326-seg-0010-rating-5",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "sw02326_seg_0010",
              "rating": 5,
              "judgeExplanation": "Perfect WER, and the prosody perfectly realizes the hypothesized low energy, lowered pitch, and falling contour to signal grounding and receipt of information.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "Perfect WER, and the prosody perfectly realizes the hypothesized low energy, lowered pitch, and falling contour to signal grounding and receipt of information."
              },
              "conversationId": "sw02326",
              "segmentId": "sw02326_seg_0010",
              "style": null,
              "datasetSource": "swdb",
              "targetSpeaker": "B",
              "targetSpeakerId": null,
              "targetText": "georgetown",
              "contextDependency": {
                "reason": "In isolation, a single proper noun could be an answer to a question, a topic introduction, or a surprised inquiry. Only the preceding clarification exchange establishes it as a grounding repetition.",
                "failure_case": "A context-unaware TTS would likely pronounce it with a neutral, prominent declarative intonation (as if stating a fact), which would sound unnaturally assertive for a simple conversational receipt token."
              },
              "prosodyFocus": {
                "key_words": [
                  "georgetown"
                ],
                "prosodic_features": "lowered pitch range, falling boundary tone, moderate to low energy",
                "explanation": "When repeating a word to acknowledge receipt (echoing), the speaker typically uses a lower, flatter pitch with a falling contour to indicate that the information has been grounded. A prominent pitch accent would falsely signal new information."
              },
              "communicativeIntent": {
                "category": "grounding",
                "subcategory": "acceptance of info",
                "justification": "B previously asked for the missing location. A provided it. B repeats the town's name to signal successful receipt and integration of the information, rather than to ask a question or introduce a new topic."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/ci/02-sw02326-seg-0010-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "um well watch it coming down south down when you get through uh round round georgetown and roundrock they got a highway patrol that just patrols up and down that thing in those little fast mustangs",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/02-sw02326-seg-0010-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "i'll have to keep that in mind because uh",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/02-sw02326-seg-0010-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "he just he just lives out there he makes his living on the road out there",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/02-sw02326-seg-0010-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "roundrock and where",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": null
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "georgetown georgetown or [noise] georgetown",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": null
                }
              ]
            },
            {
              "id": "03-ex01-ex02-default-003-rating-5",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "ex01-ex02_default_003",
              "rating": 5,
              "judgeExplanation": "Perfect match. The utterance correctly uses a sustained/rising pitch contour and slight elongation to convey the stalling and echoing intent.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "Perfect match. The utterance correctly uses a sustained/rising pitch contour and slight elongation to convey the stalling and echoing intent."
              },
              "conversationId": "ex01-ex02_default_003",
              "segmentId": "ex01-ex02_default_003",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "B",
              "targetSpeakerId": "ex01",
              "targetText": "Where am I from?",
              "contextDependency": {
                "reason": "In isolation, this text implies existential confusion or amnesia (asking someone else where you yourself were born). Context dictates it as a structural echoing tactic.",
                "failure_case": "A context-unaware TTS would apply a standard wh-question falling intonation, making the speaker sound genuinely confused about their own origins."
              },
              "prosodyFocus": {
                "key_words": [
                  "Where",
                  "from"
                ],
                "prosodic_features": "rising or sustained boundary tone, elongated syllables, mid-pitch plateau",
                "explanation": "Standard wh-questions typically have a falling pitch contour. As an echoing/stalling device, it needs a rising or sustained pitch to indicate holding the conversational floor."
              },
              "communicativeIntent": {
                "category": "Grounding",
                "subcategory": "check",
                "justification": "B is echoing A's question to stall for time and process the topic shift before answering, not genuinely asking A for information about B's own birthplace."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/ci/03-ex01-ex02-default-003-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "It is pronounced Zed. It's much more simplistic to figure that out too. I'm just, no, I'm just letting you know, like you can sing the alphabet however you want, but if you don't end it in a Zed, there's even, there's even an artist named Zed's dead. I'm not even going to get into it. It's a thing.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 17290.0,
                  "audio": "assets/audio/auto-eval/ci/03-ex01-ex02-default-003-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "it sounds like you kind of want to get into it jackie well look i i've been pronouncing it z my entire life and i'm open to new ideas because my opinion is malleable like clay",
                  "emotion": null,
                  "startTimeMs": 17320.0,
                  "endTimeMs": 34320.0,
                  "audio": "assets/audio/auto-eval/ci/03-ex01-ex02-default-003-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Same. I moved to the U.S. I have to adapt.",
                  "emotion": null,
                  "startTimeMs": 33800.0,
                  "endTimeMs": 37970.0,
                  "audio": "assets/audio/auto-eval/ci/03-ex01-ex02-default-003-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "That's kind of true. You also moved to freaking L.A., which is like, oh, you know, everything is changing all the time out here. You got to just like go with the flow. The punches are real.",
                  "emotion": null,
                  "startTimeMs": 38090.0,
                  "endTimeMs": 48650.0,
                  "audio": "assets/audio/auto-eval/ci/03-ex01-ex02-default-003-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 4,
                  "text": "But what about you? Like, where are you from specifically?",
                  "emotion": null,
                  "startTimeMs": 50260.0,
                  "endTimeMs": 53610.0,
                  "audio": "assets/audio/auto-eval/ci/03-ex01-ex02-default-003-rating-5/context_turn_04.wav"
                }
              ]
            },
            {
              "id": "04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "t_f6789857-c30c-423a-bdf5-d6207dc7db9d",
              "rating": 5,
              "judgeExplanation": "Accurate transcription with clear prominence on 'news' and a distinct rising boundary tone on 'right', perfectly conveying the intended confirmation question.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "Accurate transcription with clear prominence on 'news' and a distinct rising boundary tone on 'right', perfectly conveying the intended confirmation question."
              },
              "conversationId": "t_f6789857-c30c-423a-bdf5-d6207dc7db9d",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "B",
              "targetSpeakerId": null,
              "targetText": "The one that gives the news in latin right?",
              "contextDependency": {
                "reason": "Without interrogative syntax (e.g., 'Is that the one...'), the phrase relies entirely on the final rising contour to act as a question.",
                "failure_case": "A context-unaware TTS might render this as a flat statement, making it sound like B is stating a fact rather than asking A to confirm."
              },
              "prosodyFocus": {
                "key_words": [
                  "news",
                  "right"
                ],
                "prosodic_features": "high pitch accent on 'news', continuous rising boundary tone on 'right'",
                "explanation": "The rising intonation on 'right' is essential to shift the declarative structure into an interrogative confirmation check."
              },
              "communicativeIntent": {
                "category": "Question",
                "subcategory": "confirmation-seeking",
                "justification": "B believes they know the specific program A is referring to and appends 'right?' to a declarative phrase to seek confirmation."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "Do you watch or keep up on much basketball?It's definitely a team sport I didn't play much of ",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "I watch it from time to time as I enjoy it. do you have a favorite player?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "I haven't really had a favorite since Michael Jordan. The guy who invented the sport was a coach at the University of Kansas, and the only losing one at that",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "Go figure. do you know who kareem abdul-jabaar was?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "I heard he was good at dunking. It was banned from college basketball for over ten years from how frequently he used it",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "yeah so strange. do you know what the nz basketball team is called?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 6,
                  "text": "Do they have an official name, or are you referencing the nickname Tall Blacks?",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 7,
                  "text": "Yeah I am not too sure but that is certainly what they are called",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 8,
                  "text": "Apparently the Supreme Court enjoys a game of basketball too. On the top floor of the building they shoot hoops at what has been called \"the highest court in the land.\"",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 9,
                  "text": "Good for them, how handy to play there at work. ",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_09.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 10,
                  "text": "Many of my friends growing up were big basketball and footballs fans. The highest paid state employee in 39 of the 50 states coaches one of those two states at the college level",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_10.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 11,
                  "text": "I guess it pays to be a coach then. the players themselves also get paid quite a bit too. do you listen to the radio much?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_11.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 12,
                  "text": "I don't, actually, but I use other things that utilize radio waves. It's pretty crazy how the sound can be extracted and transformed over miles",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 13,
                  "text": "Actually if you turn it to am you can catch Jupiter's storms",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_13.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 14,
                  "text": "Those are some strong storms! Considering how many artists are from Canada, I wouldn't mind tuning into stations that have to play at least 40% Canadian music by law",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_14.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 15,
                  "text": "Yes very true. do you know how soldiers used to make radios during WWII?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_15.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 16,
                  "text": "From what I remember, all it would take is a pencil and razorblade, though I'm not sure how it would make sound",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_16.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 17,
                  "text": "I do not even know what channels they would be able to listen to",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_17.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 18,
                  "text": "If they were in Europe, it would be interesting if they could pick up Finnish stations. One of them has a new program in classical Latin",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_18.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 19,
                  "text": "The one that gives the news in latin right?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_19.wav"
                }
              ]
            },
            {
              "id": "05-sw02488-seg-0007-rating-5",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "sw02488_seg_0007",
              "rating": 5,
              "judgeExplanation": "The transcript is exact, and the prosody features low volume with a compressed duration, perfectly realizing the intended unobtrusive backchannel intent.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The transcript is exact, and the prosody features low volume with a compressed duration, perfectly realizing the intended unobtrusive backchannel intent."
              },
              "conversationId": "sw02488",
              "segmentId": "sw02488_seg_0007",
              "style": null,
              "datasetSource": "swdb",
              "targetSpeaker": "A",
              "targetSpeakerId": null,
              "targetText": "right uh-huh",
              "contextDependency": {
                "reason": "In isolation, 'right uh-huh' could be interpreted as an enthusiastic or definitive agreement to a completed proposition. Context reveals it is merely a continuous listening cue.",
                "failure_case": "A context-unaware TTS might pronounce 'right' with a strong pitch accent and a full falling boundary tone, making it sound inappropriately assertive and disruptive to B's ongoing story."
              },
              "prosodyFocus": {
                "key_words": [
                  "right",
                  "uh-huh"
                ],
                "prosodic_features": "low volume, flat or mildly rising pitch contour, compressed duration",
                "explanation": "To function effectively as a backchannel, the prosody must be unobtrusive, signaling active listening without forcefully taking the conversational floor."
              },
              "communicativeIntent": {
                "category": "agreement",
                "subcategory": "backchannel",
                "justification": "B is mid-sentence in a narrative, ending abruptly on 'it's'. A's response is intended solely to show they are following the description and yielding the floor back to B."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/ci/05-sw02488-seg-0007-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "oh man",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/05-sw02488-seg-0007-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "this is too scary that is just too scary you know i let brian play here in the back yard and we've got",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/05-sw02488-seg-0007-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "there's two gates that go into the back yard and we've got one of those big eight foot privacy fences and one of the gates has a padlock on it and then the other gate just has one of those slide bar things but it's on the inside it's",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/05-sw02488-seg-0007-rating-5/context_turn_02.wav"
                }
              ]
            },
            {
              "id": "06-ex01-ex02-default-005-rating-5",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "ex01-ex02_default_005",
              "rating": 5,
              "judgeExplanation": "The audio perfectly realizes the hypothesis, using continuous phrasing and pitch accent on 'Nope' to clearly convey it as a movie title.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The audio perfectly realizes the hypothesis, using continuous phrasing and pitch accent on 'Nope' to clearly convey it as a movie title."
              },
              "conversationId": "ex01-ex02_default_005",
              "segmentId": "ex01-ex02_default_005",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex02",
              "targetText": "I haven't. I want to see that. I just saw Nope, though.",
              "contextDependency": {
                "reason": "The word 'Nope' is overwhelmingly used as a negative interjection. Only the preceding question about movies reveals it is actually a proper noun (a film title).",
                "failure_case": "A context-unaware TTS would likely treat 'Nope' as an interjection, inserting unnatural pauses and an emphatic falling pitch that entirely breaks the semantic meaning of the sentence."
              },
              "prosodyFocus": {
                "key_words": [
                  "saw",
                  "Nope"
                ],
                "prosodic_features": "continuous phrasing, pitch accent on 'Nope' as a noun object, absence of pauses around the word",
                "explanation": "Because 'Nope' is a movie title acting as the direct object of 'saw', it must flow smoothly in the sentence without the pauses or sharp pitch drop typical of the negative particle."
              },
              "communicativeIntent": {
                "category": "statement",
                "subcategory": "assertion",
                "justification": "A is directly answering B's question about recent movie viewings, offering an alternative film they recently watched."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/ci/06-ex01-ex02-default-005-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "I don't have a favorite movie because I am a huge, probably because I'm an actor, I'm really into cinema, Criterion Channel subscriber.",
                  "emotion": null,
                  "startTimeMs": 210.0,
                  "endTimeMs": 15940.0,
                  "audio": "assets/audio/auto-eval/ci/06-ex01-ex02-default-005-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 1,
                  "text": "Foreign film nerd. One of my favorite movies, though, is Le Samurai, which I don't know if you've ever seen it, but Alain Delon is the lead in the film, and it is one of the most incredibly well-shot movies I've ever seen in my entire life. One of the movies that made me fall in love with cinema when I was 10",
                  "emotion": null,
                  "startTimeMs": 19920.0,
                  "endTimeMs": 52580.0,
                  "audio": "assets/audio/auto-eval/ci/06-ex01-ex02-default-005-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "so yeah so i i have a lot of movies that are at my top but um definitely the samurai is one of the ones that if you can ever watch that it's it has one of the most beautiful opening sequences i've ever seen in my entire life of a film it's just incredible",
                  "emotion": null,
                  "startTimeMs": 54700.0,
                  "endTimeMs": 74990.0,
                  "audio": "assets/audio/auto-eval/ci/06-ex01-ex02-default-005-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "Can you describe it for me so I can imagine it?",
                  "emotion": null,
                  "startTimeMs": 74250.0,
                  "endTimeMs": 78300.0,
                  "audio": "assets/audio/auto-eval/ci/06-ex01-ex02-default-005-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 4,
                  "text": "just by the shot it's so well set up that that he is as they say in the movie of the samurai meaning like you know he's like a he's a bounty hunter basically and it's just this incredible shot so I recommend it highly recommend it what about you though",
                  "emotion": null,
                  "startTimeMs": 78620.0,
                  "endTimeMs": 172240.0,
                  "audio": "assets/audio/auto-eval/ci/06-ex01-ex02-default-005-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 5,
                  "text": "Well, thank you for describing that. I can imagine it. I can imagine the smoke piling up from the cigarette, the kind of of it all, you know what I mean? So French. The true raw grittiness. For me, I consume a lot of animated media. So if I were to go for my favorite film in animation...",
                  "emotion": null,
                  "startTimeMs": 174520.0,
                  "endTimeMs": 200510.0,
                  "audio": "assets/audio/auto-eval/ci/06-ex01-ex02-default-005-rating-5/context_turn_05.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 6,
                  "text": "It's not necessarily the most well-known Ghibli film, but Nausicaa of the Valley of the Wind.",
                  "emotion": null,
                  "startTimeMs": 202060.0,
                  "endTimeMs": 212470.0,
                  "audio": "assets/audio/auto-eval/ci/06-ex01-ex02-default-005-rating-5/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 7,
                  "text": "It's so good. It's so good. I remember watching that when I was a kid. And it was the first animated movie that I distinctly remember. You know when you're like a kid consciousness? Where you're like, I know I... People...",
                  "emotion": null,
                  "startTimeMs": 213840.0,
                  "endTimeMs": 233140.0,
                  "audio": "assets/audio/auto-eval/ci/06-ex01-ex02-default-005-rating-5/context_turn_07.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 8,
                  "text": "But if we're talking about favorite movie that's on camera or right now, have you seen Everything Everywhere all at once?",
                  "emotion": null,
                  "startTimeMs": 233960.0,
                  "endTimeMs": 277910.0,
                  "audio": "assets/audio/auto-eval/ci/06-ex01-ex02-default-005-rating-5/context_turn_08.wav"
                }
              ]
            },
            {
              "id": "07-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-rating-5",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "t_c0f787a2-1a4a-47c3-95aa-50b5567504e8",
              "rating": 5,
              "judgeExplanation": "The audio perfectly matches the transcript and hypothesis, featuring an elongated, exclamatory pitch fall on 'know' and strong emphasis on 'milk'.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The audio perfectly matches the transcript and hypothesis, featuring an elongated, exclamatory pitch fall on 'know' and strong emphasis on 'milk'."
              },
              "conversationId": "t_c0f787a2-1a4a-47c3-95aa-50b5567504e8",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "B",
              "targetSpeakerId": null,
              "targetText": "I know! They sure do milk it for all its worth.",
              "contextDependency": {
                "reason": "The phrase 'I know' is highly ambiguous in isolation and is often just a factual declarative. A's prior complaint provides the critical trigger for the empathetic agreement reading.",
                "failure_case": "A baseline TTS might render 'I know' with a flat, neutral declarative tone, missing the enthusiastic solidarity the context demands."
              },
              "prosodyFocus": {
                "key_words": [
                  "know",
                  "milk"
                ],
                "prosodic_features": "high initial pitch on 'know' with an elongated exclamatory fall, and strong emphatic stress on 'milk'",
                "explanation": "The strong affective prosody on 'know' transforms what is structurally a standard declarative into an expression of vigorous, shared sentiment."
              },
              "communicativeIntent": {
                "category": "Agreement",
                "subcategory": "strong-agreement",
                "justification": "A uses a rhetorical question to express frustration. B's 'I know!' serves as an empathetic validation of A's opinion, rather than a literal claim to prior knowledge."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/ci/07-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "Hi are you a football fan?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/07-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "Hi, no not really.  Are you?",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/07-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "I watch it during the season because I don't have anything better to do.  Especially for the Monday and Thursday night games.",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/07-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "I get that, especially when there is only 11 minutes of action in a game.  I guess the rest is commercials?",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/07-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "Isn't that crazy that it's such a short amount of time for something they drag out of 3 hours?",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/07-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-rating-5/context_turn_04.wav"
                }
              ]
            },
            {
              "id": "08-sw02472-seg-0013-rating-5",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "sw02472_seg_0013",
              "rating": 5,
              "judgeExplanation": "The target is a clear, unobtrusive 'uh-huh' with reduced volume and a gentle contour, perfectly functioning as a backchannel continuer.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The target is a clear, unobtrusive 'uh-huh' with reduced volume and a gentle contour, perfectly functioning as a backchannel continuer."
              },
              "conversationId": "sw02472",
              "segmentId": "sw02472_seg_0013",
              "style": null,
              "datasetSource": "swdb",
              "targetSpeaker": "A",
              "targetSpeakerId": null,
              "targetText": "uh-huh",
              "contextDependency": {
                "reason": "The particle 'uh-huh' is highly ambiguous and can mean strong affirmation, sudden realization, or passive acknowledgment. The context of B's casual anecdote requires it to be a gentle, continuous listening signal.",
                "failure_case": "A context-unaware TTS might render it with a bright, enthusiastic falling contour (meaning a strong 'Yes'), which would sound unnatural and disruptive in this conversational slot."
              },
              "prosodyFocus": {
                "key_words": [
                  "uh-huh"
                ],
                "prosodic_features": "low pitch, reduced volume, flat or slight rising contour",
                "explanation": "A backchannel needs to be unobtrusive. High energy or a sharp falling boundary tone would sound like a forceful interruption rather than passive listening."
              },
              "communicativeIntent": {
                "category": "agreement",
                "subcategory": "backchannel",
                "justification": "B provides a lengthy explanation of their personal reading and eating habits. A's 'uh-huh' acts as a conversational continuer to show attentive listening, rather than a strong assertion of agreement."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/ci/08-sw02472-seg-0013-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "gastro lamink the creative cooking course",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/08-sw02472-seg-0013-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "i might have to visit the state book store and see wh-",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/08-sw02472-seg-0013-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "[laughter] i was trying to see who it's published by ottenheimer i've never heard of it",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/08-sw02472-seg-0013-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "i haven't either",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/08-sw02472-seg-0013-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "this edition is published by bonanza books it's a big book but it was not expensive",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/08-sw02472-seg-0013-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "well the ones that i've been i've been wanting to get um i guess you've seen the 365 ways to cook chicken and 365 ways to cook pasta i've been i've been wanting to get those because we eat a lot of chicken",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/08-sw02472-seg-0013-rating-5/context_turn_05.wav"
                }
              ]
            },
            {
              "id": "09-ex01-ex02-default-012-rating-5",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "ex01-ex02_default_012",
              "rating": 5,
              "judgeExplanation": "The audio accurately matches the transcript and realizes the specified prosody with a low-pitch, narrow-range falling contour, functioning perfectly as an information receipt.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The audio accurately matches the transcript and realizes the specified prosody with a low-pitch, narrow-range falling contour, functioning perfectly as an information receipt."
              },
              "conversationId": "ex01-ex02_default_012",
              "segmentId": "ex01-ex02_default_012",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex02",
              "targetText": "Okay, cool.",
              "contextDependency": {
                "reason": "'Okay, cool' can express excitement, sarcasm, or simple receipt of information. The preceding instructional dump requires it to be a low-energy cognitive receipt token.",
                "failure_case": "A context-unaware TTS might over-animate the phrase, making A sound inappropriately excited about the sequence of bread and mayo."
              },
              "prosodyFocus": {
                "key_words": [
                  "Okay",
                  "cool"
                ],
                "prosodic_features": "mid-low pitch, narrow pitch range, falling boundary tone",
                "explanation": "The phrase functions as an information receipt, requiring a neutral, concluding contour rather than high-pitched enthusiasm."
              },
              "communicativeIntent": {
                "category": "grounding",
                "subcategory": "acknowledgement",
                "justification": "B provides a complex sequence of instructions and appends a question at the end. A uses 'Okay, cool' to cognitively acknowledge the instructions before answering the question in the next breath."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/ci/09-ex01-ex02-default-012-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "Hey Kyle, how's it going?",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 1460.0,
                  "audio": "assets/audio/auto-eval/ci/09-ex01-ex02-default-012-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "Oh, hey, Barbara. Haven't heard from you in a little bit. What's going on?",
                  "emotion": null,
                  "startTimeMs": 1590.0,
                  "endTimeMs": 4920.0,
                  "audio": "assets/audio/auto-eval/ci/09-ex01-ex02-default-012-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Um, I didn't want to bother you, but I was really hoping I could start cooking your favorite dish that you made for me. Oh my gosh, yeah, I love grilled cheese, yeah.",
                  "emotion": null,
                  "startTimeMs": 4950.0,
                  "endTimeMs": 16420.0,
                  "audio": "assets/audio/auto-eval/ci/09-ex01-ex02-default-012-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "The grilled cheese, right?",
                  "emotion": null,
                  "startTimeMs": 11530.0,
                  "endTimeMs": 13870.0,
                  "audio": "assets/audio/auto-eval/ci/09-ex01-ex02-default-012-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 4,
                  "text": "Oh, it was, okay, yeah. I am so willing to help you. Do you have your ingredients?",
                  "emotion": null,
                  "startTimeMs": 15560.0,
                  "endTimeMs": 20770.0,
                  "audio": "assets/audio/auto-eval/ci/09-ex01-ex02-default-012-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 5,
                  "text": "Yeah, you have to remind me. I just want to make sure I have everything.",
                  "emotion": null,
                  "startTimeMs": 21720.0,
                  "endTimeMs": 24940.0,
                  "audio": "assets/audio/auto-eval/ci/09-ex01-ex02-default-012-rating-5/context_turn_05.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 6,
                  "text": "Okay, okay. So you want to get a good sourdough bread. You want to get your two cheeses. You can get cheddar Swiss. You can get manchego. You can also get goat.",
                  "emotion": null,
                  "startTimeMs": 25180.0,
                  "endTimeMs": 36180.0,
                  "audio": "assets/audio/auto-eval/ci/09-ex01-ex02-default-012-rating-5/context_turn_06.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 7,
                  "text": "Ooh, I have manchego and I have cheddar, so perfect.",
                  "emotion": null,
                  "startTimeMs": 35470.0,
                  "endTimeMs": 38640.0,
                  "audio": "assets/audio/auto-eval/ci/09-ex01-ex02-default-012-rating-5/context_turn_07.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 8,
                  "text": "Okay, great. Yeah, you're going to want to get those two. Make sure they're sliced into manageable sizes. And then the next thing...",
                  "emotion": null,
                  "startTimeMs": 38210.0,
                  "endTimeMs": 47250.0,
                  "audio": "assets/audio/auto-eval/ci/09-ex01-ex02-default-012-rating-5/context_turn_08.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 9,
                  "text": "Wait, do you cut those long way or do you cut them shorter? Does it matter?",
                  "emotion": null,
                  "startTimeMs": 45680.0,
                  "endTimeMs": 53680.0,
                  "audio": "assets/audio/auto-eval/ci/09-ex01-ex02-default-012-rating-5/context_turn_09.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 10,
                  "text": "that's touching the cheese with mayonnaise, and then it's gonna, so you'll think butter, bread, mayo, cheese, cheese, mayo, bread, butter, right? And if you're feeling really fancy, I don't know, did you get the honey smoked ham?",
                  "emotion": null,
                  "startTimeMs": 52400.0,
                  "endTimeMs": 102600.0,
                  "audio": "assets/audio/auto-eval/ci/09-ex01-ex02-default-012-rating-5/context_turn_10.wav"
                }
              ]
            },
            {
              "id": "10-t-36066ee7-42fb-413c-bce1-25a6933b938a-rating-5",
              "datasetKey": "ci",
              "datasetLabel": "Communicative Intent",
              "title": "t_36066ee7-42fb-413c-bce1-25a6933b938a",
              "rating": 5,
              "judgeExplanation": "The audio perfectly matches the transcript, featuring the required rising confirmation-seeking intonation on 'right' and clear focal stress on 'broadcast'.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The audio perfectly matches the transcript, featuring the required rising confirmation-seeking intonation on 'right' and clear focal stress on 'broadcast'."
              },
              "conversationId": "t_36066ee7-42fb-413c-bce1-25a6933b938a",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "B",
              "targetSpeakerId": null,
              "targetText": "Yes, he is the voice of college football right?  Do you know what broadcast he was on?",
              "contextDependency": {
                "reason": "Without the context of A prompting B's knowledge, B's response could be interpreted as a rhetorical question or a confident statement. The context frames B as tentatively recalling information.",
                "failure_case": "A default TTS might apply a falling, assertive contour on 'right' due to the declarative syntax, completely missing the tentative, checking nature of the utterance."
              },
              "prosodyFocus": {
                "key_words": [
                  "right",
                  "broadcast"
                ],
                "prosodic_features": "rising intonation on 'right', slight pause, followed by pitch reset and focal stress on 'broadcast'",
                "explanation": "Because the first sentence has a declarative structure ending with 'right', it absolutely requires a rising boundary tone to function as a confirmation-seeking tag question rather than an assertion."
              },
              "communicativeIntent": {
                "category": "Question",
                "subcategory": "confirmation-seeking",
                "justification": "B recognizes the name but isn't entirely certain. They answer 'Yes' but immediately append the tag 'right' to a declarative clause to verify their memory with A."
              },
              "emotion": null,
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/ci/10-t-36066ee7-42fb-413c-bce1-25a6933b938a-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "Have you heard of Keith Jackson?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/ci/10-t-36066ee7-42fb-413c-bce1-25a6933b938a-rating-5/context_turn_00.wav"
                }
              ]
            }
          ]
        },
        {
          "key": "emotion",
          "label": "Emotion",
          "description": "Reference audio graded by the Automatic Eval Pipeline.",
          "totalExamplesLoaded": 800,
          "ratingCounts": {
            "5": 795,
            "None": 5
          },
          "sourceCounts": {
            "espresso": 119,
            "multiturn": 681
          },
          "selectedSourceCounts": {
            "espresso": 5,
            "multiturn": 5
          },
          "showcaseCount": 10,
          "examples": [
            {
              "id": "01-ex01-ex02-default-003-rating-5",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "ex01-ex02_default_003",
              "rating": 5,
              "judgeExplanation": "Perfect match. The transcription is completely accurate, and the speaker brilliantly captures the sarcastic, amused tone with laughter and dry ironic delivery.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "Perfect match. The transcription is completely accurate, and the speaker brilliantly captures the sarcastic, amused tone with laughter and dry ironic delivery."
              },
              "conversationId": "ex01-ex02_default_003",
              "segmentId": "ex01-ex02_default_003",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "B",
              "targetSpeakerId": "ex01",
              "targetText": "it sounds like you kind of want to get into it jackie well look i i've been pronouncing it z my entire life and i'm open to new ideas because my opinion is malleable like clay",
              "contextDependency": {
                "reason": "Without knowing that A just aggressively defended 'Zed' while claiming not to 'get into it', B's comment about being 'malleable like clay' sounds like an earnest declaration of open-mindedness rather than a sarcastic joke.",
                "failure_case": "A context-unaware TTS would deliver the sentence as a sincere, straightforward statement of personal philosophy, missing the conversational irony entirely."
              },
              "prosodyFocus": {
                "key_words": [
                  "kind of",
                  "malleable",
                  "clay"
                ],
                "prosodic_features": "Smirking or amused vocal tone, slight emphasis and elongation on 'kind of', dry ironic delivery on 'malleable like clay' with a slight pitch drop at the end.",
                "explanation": "The playful teasing requires an ironic, knowing tone. A literal, earnest delivery would make it seem like B genuinely believes their opinion is easily changed, completely missing the banter."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Sarcastic",
                "justification": "A claims they are 'not even going to get into it' immediately after delivering a highly specific rant on why the letter Z should be pronounced 'Zed'. B's response playfully calls out this contradiction, concluding with an exaggerated, ironic metaphor about their opinion being 'malleable like clay' to tease their own stubbornness and A's pedantry.",
                "grounding_event": "A's contradictory statement 'I'm not even going to get into it' right after explaining in detail why 'Zed' is superior to 'Z'."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/emotion/01-ex01-ex02-default-003-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "It is pronounced Zed. It's much more simplistic to figure that out too. I'm just, no, I'm just letting you know, like you can sing the alphabet however you want, but if you don't end it in a Zed, there's even, there's even an artist named Zed's dead. I'm not even going to get into it. It's a thing.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 17290.0,
                  "audio": "assets/audio/auto-eval/emotion/01-ex01-ex02-default-003-rating-5/context_turn_00.wav"
                }
              ]
            },
            {
              "id": "02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "t_04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d",
              "rating": 5,
              "judgeExplanation": "Perfect WER, and the prosody excellently captures the bright, amused curiosity demanded by the abrupt topic shift, landing perfectly on the key words.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "Perfect WER, and the prosody excellently captures the bright, amused curiosity demanded by the abrupt topic shift, landing perfectly on the key words."
              },
              "conversationId": "t_04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "A",
              "targetSpeakerId": null,
              "targetText": "Thats nice from Snoop Dogg, can you tell me more about that song?",
              "contextDependency": {
                "reason": "Without the preceding abrupt context shift from grieving grandchildren to Snoop Dogg, this utterance might be delivered as a mundane, polite conversational filler. The whiplash of the topic change demands an active, curious delivery.",
                "failure_case": "A context-unaware TTS would likely sound monotonous or strictly transactional, missing the pleasant surprise and spark of intrigue that the conversational pivot creates."
              },
              "prosodyFocus": {
                "key_words": [
                  "nice",
                  "more",
                  "song"
                ],
                "prosodic_features": "Slightly amused, brighter tone on the first clause, followed by an engaged, leaning-in upward pitch contour on the question",
                "explanation": "The prosody must capture the pleasant surprise and genuine intrigue sparked by such a random celebrity fact, avoiding a flat or transactional delivery."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Curious to dive deeper",
                "justification": "B abruptly shifts from the somber topic of Jackson's grieving family to a completely unexpected piece of trivia about Snoop Dogg. A's response is driven by genuine, engaged curiosity about this bizarre and sudden new topic.",
                "grounding_event": "B's unexpected disclosure that Snoop Dogg wrote a fight song for a high school football team."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "What do you think about Keith Jacksons death?",
                  "emotion": "Sad",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "It's sad. I wonder how many people grew up hearing his voice?",
                  "emotion": "Sad",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "I imagine this number in the millions taking into account he had a 54 year broadcasting carreer, so sad, but he was old.",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "I like that he used this phrase alot Whoa, Nellie!",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "That was a good phrase I liked it as well, did you see the beer comercial, the one in which he used this phrase?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "I didn't. I did see the ABC would not let him retire at 70!",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 6,
                  "text": "Yeah I think he ended his carreer in 2006, he got lured and decided to stay, he had a great voice.",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 7,
                  "text": "He was also a marine. Looks like he had been calling games since he was young. ",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 8,
                  "text": "Wow this guy sure is full with suprises, he didnt only call football games but also pro basketball games as well as other sports.",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 9,
                  "text": "Crazy busy it seems. He didn't say anything when Woody Hayes punched a clemson player either!",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_09.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 10,
                  "text": "Yeah I heard he was criticized because of this, wonder why he did that, maybe he had it coming. ",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_10.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 11,
                  "text": "I don't think he saw the punch. He also won an Emmy!",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_11.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 12,
                  "text": "Do you happen to know why he won the emmy?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 13,
                  "text": "apparently for the work he did calling the games. He was inducted into the sportscasters hall of fame too.",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_13.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 14,
                  "text": "Yeah I can see why, the guy has a big resume its sad that his wife and children are left behind, as well as three grandchildren, they must be crying a lot.",
                  "emotion": "Sad",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_14.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 15,
                  "text": "probably so. Snoop dogg wrote a fight song for his son's high school football team.",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/02-t-04eea955-7ad7-4c3c-aa0b-0fc16e89ae1d-rating-5/context_turn_15.wav"
                }
              ]
            },
            {
              "id": "03-ex01-ex02-default-004-rating-5",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "ex01-ex02_default_004",
              "rating": 5,
              "judgeExplanation": "Perfect match; zero WER, and the prosody vividly captures the hypothesized shock with a massive pitch rise on 'Really' as described.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "Perfect match; zero WER, and the prosody vividly captures the hypothesized shock with a massive pitch rise on 'Really' as described."
              },
              "conversationId": "ex01-ex02_default_004",
              "segmentId": "ex01-ex02_default_004",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex02",
              "targetText": "Really? What did you, what did you do sports wise?",
              "contextDependency": {
                "reason": "The word 'Really?' is highly context-dependent; it can be used for mild backchanneling, sarcasm, or profound shock. Only the preceding revelation of eight concussions dictates that this must be delivered with strong, genuine surprise.",
                "failure_case": "A context-unaware TTS would likely deliver 'Really?' as a mild conversational filler with neutral backchannel prosody, completely underplaying the alarming nature of B's disclosure."
              },
              "prosodyFocus": {
                "key_words": [
                  "Really",
                  "sports wise"
                ],
                "prosodic_features": "Wide pitch excursion and elongation on 'Really', followed by elevated pitch and increased energy on the subsequent question.",
                "explanation": "The stretched out, high-pitched 'Really' signals disbelief and astonishment, while the energetic follow-up shows an urgent need to make sense of the shocking information."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Surprised",
                "justification": "B has just casually dropped a shocking statistic\u2014that they have suffered eight concussions. A's 'Really?' is a reaction of genuine shock and disbelief to this abnormally high number, immediately followed by a need to understand how it happened.",
                "grounding_event": "B's casual disclosure of having had eight concussions."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/emotion/03-ex01-ex02-default-004-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "Well, put a stick on your back. And, you know, that's another technique that they use where they put a stick across your back and they make you stay in one spot as you're, as you're, so you don't move. And...",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 12380.0,
                  "audio": "assets/audio/auto-eval/emotion/03-ex01-ex02-default-004-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "That reminds me of ballet. Oh my god.",
                  "emotion": null,
                  "startTimeMs": 11680.0,
                  "endTimeMs": 14270.0,
                  "audio": "assets/audio/auto-eval/emotion/03-ex01-ex02-default-004-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Did you ever do dance?",
                  "emotion": null,
                  "startTimeMs": 16780.0,
                  "endTimeMs": 18100.0,
                  "audio": "assets/audio/auto-eval/emotion/03-ex01-ex02-default-004-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "Don't you dance?",
                  "emotion": null,
                  "startTimeMs": 18450.0,
                  "endTimeMs": 54400.0,
                  "audio": "assets/audio/auto-eval/emotion/03-ex01-ex02-default-004-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 4,
                  "text": "I did dance when I was young and gymnastics. So, yeah, so fun. I did that for a long time.",
                  "emotion": null,
                  "startTimeMs": 54220.0,
                  "endTimeMs": 66480.0,
                  "audio": "assets/audio/auto-eval/emotion/03-ex01-ex02-default-004-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 5,
                  "text": "I have a question to ask a gymnastics person. Did you ever get injured when you were doing gymnastics? Oh yeah? Describe it, tell me. What happened?",
                  "emotion": null,
                  "startTimeMs": 65950.0,
                  "endTimeMs": 78990.0,
                  "audio": "assets/audio/auto-eval/emotion/03-ex01-ex02-default-004-rating-5/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 6,
                  "text": "Well, actually, I was, I watched, did you, have you seen the documentary Athlete A?",
                  "emotion": null,
                  "startTimeMs": 79180.0,
                  "endTimeMs": 88020.0,
                  "audio": "assets/audio/auto-eval/emotion/03-ex01-ex02-default-004-rating-5/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 7,
                  "text": "No I have not.",
                  "emotion": null,
                  "startTimeMs": 88380.0,
                  "endTimeMs": 89540.0,
                  "audio": "assets/audio/auto-eval/emotion/03-ex01-ex02-default-004-rating-5/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 8,
                  "text": "It was loud enough that you could hear it in the gymnasium.",
                  "emotion": null,
                  "startTimeMs": 89800.0,
                  "endTimeMs": 197690.0,
                  "audio": "assets/audio/auto-eval/emotion/03-ex01-ex02-default-004-rating-5/context_turn_08.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 9,
                  "text": "And,",
                  "emotion": null,
                  "startTimeMs": 198200.0,
                  "endTimeMs": 200050.0,
                  "audio": "assets/audio/auto-eval/emotion/03-ex01-ex02-default-004-rating-5/context_turn_09.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 10,
                  "text": "It was like a palpable sound. It's really gross. But yeah, I've injured myself a lot. I've winded myself. I've probably had concussions from it.",
                  "emotion": null,
                  "startTimeMs": 201900.0,
                  "endTimeMs": 215150.0,
                  "audio": "assets/audio/auto-eval/emotion/03-ex01-ex02-default-004-rating-5/context_turn_10.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 11,
                  "text": "Hey, you're talking about concussions. I've had eight of them. I've had eight concussions. Yeah. Yeah.",
                  "emotion": null,
                  "startTimeMs": 214600.0,
                  "endTimeMs": 220220.0,
                  "audio": "assets/audio/auto-eval/emotion/03-ex01-ex02-default-004-rating-5/context_turn_11.wav"
                }
              ]
            },
            {
              "id": "04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "t_f6789857-c30c-423a-bdf5-d6207dc7db9d",
              "rating": 5,
              "judgeExplanation": "Perfect transcript match. The speaker delivers 'Go figure' with the hypothesized wry, breathy tone and falling pitch, perfectly capturing the amused surprise.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "Perfect transcript match. The speaker delivers 'Go figure' with the hypothesized wry, breathy tone and falling pitch, perfectly capturing the amused surprise."
              },
              "conversationId": "t_f6789857-c30c-423a-bdf5-d6207dc7db9d",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "B",
              "targetSpeakerId": null,
              "targetText": "Go figure. do you know who kareem abdul-jabaar was?",
              "contextDependency": {
                "reason": "'Go figure' is an idiom used to acknowledge something ironic or unexpectedly contradictory. Without knowing the paradox of the losing inventor, the phrase has no clear situational anchor and its delivery is ambiguous.",
                "failure_case": "A context-unaware TTS might deliver 'Go figure' with a literal, flat, or imperative tone, completely missing the wry amusement required by the conversational irony."
              },
              "prosodyFocus": {
                "key_words": [
                  "Go",
                  "figure"
                ],
                "prosodic_features": "Slight chuckle or breathy exhalation on 'Go', with a falling pitch contour and slower tempo on 'figure' to express ironic realization",
                "explanation": "The phrase 'Go figure' requires a wry, slightly amused delivery to acknowledge the irony of the preceding fact. A flat delivery would sound robotic and disconnected."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Surprised",
                "justification": "A has just revealed an ironic paradox: the person who invented basketball was the only losing coach in the history of the University of Kansas. B's 'Go figure' is a reaction of amused surprise at this irony, before pivoting to a new question.",
                "grounding_event": "A's disclosure that the inventor of basketball was a losing coach at the University of Kansas."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/emotion/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "Do you watch or keep up on much basketball?It's definitely a team sport I didn't play much of ",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "I watch it from time to time as I enjoy it. do you have a favorite player?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "I haven't really had a favorite since Michael Jordan. The guy who invented the sport was a coach at the University of Kansas, and the only losing one at that",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/04-t-f6789857-c30c-423a-bdf5-d6207dc7db9d-rating-5/context_turn_02.wav"
                }
              ]
            },
            {
              "id": "05-ex01-ex02-default-005-rating-5",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "ex01-ex02_default_005",
              "rating": 5,
              "judgeExplanation": "The audio perfectly executes the hypothesis, featuring clear laughter intrusions and a breathy, chuckling delivery that realistically reacts to the preceding comedic anecdote.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The audio perfectly executes the hypothesis, featuring clear laughter intrusions and a breathy, chuckling delivery that realistically reacts to the preceding comedic anecdote."
              },
              "conversationId": "ex01-ex02_default_005",
              "segmentId": "ex01-ex02_default_005",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "B",
              "targetSpeakerId": "ex01",
              "targetText": "It's so fun. It's so fun.",
              "contextDependency": {
                "reason": "In isolation, 'It's so fun' is a generic, mild endorsement of an activity (like playing a game). Only the prior joke grounds it as a direct, reactionary expression of laughter and amusement.",
                "failure_case": "A TTS would likely read it with a calm, declarative pleasantness, entirely missing the spontaneous laughter and humor provoked by the preceding comedic anecdote."
              },
              "prosodyFocus": {
                "key_words": [
                  "fun"
                ],
                "prosodic_features": "Laughter intrusions, breathy chuckling quality throughout, elevated pitch, and an upbeat, bouncy rhythm.",
                "explanation": "The delivery must capture spontaneous amusement in response to a joke, with audible laughter actively coloring the articulation of the words rather than just being spoken cleanly."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Laughing",
                "justification": "A has just told a humorous, slightly absurd anecdote about the reality of animation production (receiving a drawing of just an arm outline). B's response is an amused, laughing reaction to the comedic punchline of A's story.",
                "grounding_event": "A recounting the funny anecdote of Bart Simpson spending $300 on an animation cel only to receive a drawing of a single arm outline."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "I don't have a favorite movie because I am a huge, probably because I'm an actor, I'm really into cinema, Criterion Channel subscriber.",
                  "emotion": null,
                  "startTimeMs": 210.0,
                  "endTimeMs": 15940.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 1,
                  "text": "Foreign film nerd. One of my favorite movies, though, is Le Samurai, which I don't know if you've ever seen it, but Alain Delon is the lead in the film, and it is one of the most incredibly well-shot movies I've ever seen in my entire life. One of the movies that made me fall in love with cinema when I was 10",
                  "emotion": null,
                  "startTimeMs": 19920.0,
                  "endTimeMs": 52580.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "so yeah so i i have a lot of movies that are at my top but um definitely the samurai is one of the ones that if you can ever watch that it's it has one of the most beautiful opening sequences i've ever seen in my entire life of a film it's just incredible",
                  "emotion": null,
                  "startTimeMs": 54700.0,
                  "endTimeMs": 74990.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "Can you describe it for me so I can imagine it?",
                  "emotion": null,
                  "startTimeMs": 74250.0,
                  "endTimeMs": 78300.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 4,
                  "text": "just by the shot it's so well set up that that he is as they say in the movie of the samurai meaning like you know he's like a he's a bounty hunter basically and it's just this incredible shot so I recommend it highly recommend it what about you though",
                  "emotion": null,
                  "startTimeMs": 78620.0,
                  "endTimeMs": 172240.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 5,
                  "text": "Well, thank you for describing that. I can imagine it. I can imagine the smoke piling up from the cigarette, the kind of of it all, you know what I mean? So French. The true raw grittiness. For me, I consume a lot of animated media. So if I were to go for my favorite film in animation...",
                  "emotion": null,
                  "startTimeMs": 174520.0,
                  "endTimeMs": 200510.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_05.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 6,
                  "text": "It's not necessarily the most well-known Ghibli film, but Nausicaa of the Valley of the Wind.",
                  "emotion": null,
                  "startTimeMs": 202060.0,
                  "endTimeMs": 212470.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 7,
                  "text": "It's so good. It's so good. I remember watching that when I was a kid. And it was the first animated movie that I distinctly remember. You know when you're like a kid consciousness? Where you're like, I know I... People...",
                  "emotion": null,
                  "startTimeMs": 213840.0,
                  "endTimeMs": 233140.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_07.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 8,
                  "text": "But if we're talking about favorite movie that's on camera or right now, have you seen Everything Everywhere all at once?",
                  "emotion": null,
                  "startTimeMs": 233960.0,
                  "endTimeMs": 277910.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_08.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 9,
                  "text": "I haven't. I want to see that. I just saw Nope, though.",
                  "emotion": null,
                  "startTimeMs": 277660.0,
                  "endTimeMs": 282820.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_09.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 10,
                  "text": "in two separate ways. You can laugh, cry, and like, this is so freaking funny. I'm losing my mind. Or you can laugh, cry, and like, I'm so sad, but I'm so happy. It made me do it both times. Both times.",
                  "emotion": null,
                  "startTimeMs": 282320.0,
                  "endTimeMs": 328940.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_10.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 11,
                  "text": "I did that with Jojo Rabbit.",
                  "emotion": null,
                  "startTimeMs": 329000.0,
                  "endTimeMs": 330920.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_11.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 12,
                  "text": "Jojo Rabbit is so good.",
                  "emotion": null,
                  "startTimeMs": 331870.0,
                  "endTimeMs": 334210.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 13,
                  "text": "It's so good. It's so freaking good. Scarlett Johansson and who is the kid that plays? Oh, the kid's so good too.",
                  "emotion": null,
                  "startTimeMs": 335610.0,
                  "endTimeMs": 343590.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_13.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 14,
                  "text": "I'm not sure. I love the kid though. It's so good. Taika Waititi is great.",
                  "emotion": null,
                  "startTimeMs": 341960.0,
                  "endTimeMs": 347740.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_14.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 15,
                  "text": "Oh, Taika Waititi is freaking phenomenal. One of my theories, though, is that the best actors nowadays are like 10-year-old kids. You know what I mean? That just might be me, but I think that's where I'm at, all right?",
                  "emotion": null,
                  "startTimeMs": 347750.0,
                  "endTimeMs": 367960.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_15.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 16,
                  "text": "I have to ask you, coming back to Nausicaa, have you ever heard of retronauts?",
                  "emotion": null,
                  "startTimeMs": 368400.0,
                  "endTimeMs": 379650.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_16.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 17,
                  "text": "Retronauts, no.",
                  "emotion": null,
                  "startTimeMs": 380110.0,
                  "endTimeMs": 382180.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_17.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 18,
                  "text": "Or crontendo. So I'm, okay, I'm really into video games. And I listen to video game podcasts. And Retronauts is a podcast dedicated to...",
                  "emotion": null,
                  "startTimeMs": 382040.0,
                  "endTimeMs": 412610.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_18.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 19,
                  "text": "Oh, are you kidding me? That's crazy. No way. Did you go? Okay. Did you go to the, um, there was in LA, there was a Ghibli exhibit.",
                  "emotion": null,
                  "startTimeMs": 412380.0,
                  "endTimeMs": 422600.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_19.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 20,
                  "text": "Oh, um, over at, um, I haven't seen it. Yeah. Um, I didn't, yeah, I didn't, yeah, I didn't get to go to it, but I wanted to.",
                  "emotion": null,
                  "startTimeMs": 422720.0,
                  "endTimeMs": 434390.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_20.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 21,
                  "text": "The MoMA, the MoMA, I think, Museum of Modern Art.",
                  "emotion": null,
                  "startTimeMs": 427840.0,
                  "endTimeMs": 430650.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_21.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 22,
                  "text": "so easy to forget that hundreds of people worked on just this one frame let alone the entire movie you know what i mean",
                  "emotion": null,
                  "startTimeMs": 433000.0,
                  "endTimeMs": 477270.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_22.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 23,
                  "text": "It reminds me of the episode of the Simpsons when, um, Bart spends like $300 on a classic picture that he thinks he's going to get this original picture, this original drawing of itchy and scratchy and he gets it and he gets the cellophane and it's literally just at the outline of an arm. I don't know if you remember that, but I love it. Um,",
                  "emotion": null,
                  "startTimeMs": 478930.0,
                  "endTimeMs": 506570.0,
                  "audio": "assets/audio/auto-eval/emotion/05-ex01-ex02-default-005-rating-5/context_turn_23.wav"
                }
              ]
            },
            {
              "id": "06-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-rating-5",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "t_c0f787a2-1a4a-47c3-95aa-50b5567504e8",
              "rating": 5,
              "judgeExplanation": "Perfect transcription and the audio excellently captures the elongated, exasperated 'I know' and irritated tone required by the complaining context.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "Perfect transcription and the audio excellently captures the elongated, exasperated 'I know' and irritated tone required by the complaining context."
              },
              "conversationId": "t_c0f787a2-1a4a-47c3-95aa-50b5567504e8",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "B",
              "targetSpeakerId": null,
              "targetText": "I know! They sure do milk it for all its worth.",
              "contextDependency": {
                "reason": "The phrase 'I know!' can be spoken with joy, surprise, or exasperation. Similarly, 'milk it for all its worth' could be an expression of admiration for a clever business strategy. Only A's preceding complaint establishes the tone as mutual irritation.",
                "failure_case": "A context-unaware TTS might deliver this with a cheerful, upbeat tone and genuine admiration, completely clashing with the frustrated tone established by A's previous turn."
              },
              "prosodyFocus": {
                "key_words": [
                  "know",
                  "milk",
                  "all"
                ],
                "prosodic_features": "Emphatic, elongated 'know' with a falling pitch contour, tense or slightly pressed voice quality on 'milk it', conveying exasperation rather than joy.",
                "explanation": "The delivery must convey shared annoyance. A heavy, falling pitch on 'I know' signals 'I agree with your frustration', whereas a bright or rising pitch would mistakenly sound like a happy realization."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Angry",
                "justification": "B is expressing irritation and exasperation in strong agreement with A's complaint about how long football games take. The sentiment is a shared annoyance at corporate greed, which falls under the 'Angry' category (irritated/annoyed) rather than genuine rage.",
                "grounding_event": "A's frustrated observation that the NFL drags out a mere 11 minutes of actual game time into a 3-hour television broadcast."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/emotion/06-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "Hi are you a football fan?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/06-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "Hi, no not really.  Are you?",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/06-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "I watch it during the season because I don't have anything better to do.  Especially for the Monday and Thursday night games.",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/06-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "I get that, especially when there is only 11 minutes of action in a game.  I guess the rest is commercials?",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/06-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "Isn't that crazy that it's such a short amount of time for something they drag out of 3 hours?",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/06-t-c0f787a2-1a4a-47c3-95aa-50b5567504e8-rating-5/context_turn_04.wav"
                }
              ]
            },
            {
              "id": "07-ex01-ex02-fast-001-rating-5",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "ex01-ex02_fast_001",
              "rating": 5,
              "judgeExplanation": "Perfect WER. The exceptionally fast tempo, elevated pitch, and compressed delivery perfectly capture the frantic, anxious urgency required by the context.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "Perfect WER. The exceptionally fast tempo, elevated pitch, and compressed delivery perfectly capture the frantic, anxious urgency required by the context."
              },
              "conversationId": "ex01-ex02_fast_001",
              "segmentId": "ex01-ex02_fast_001",
              "style": "fast",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex01",
              "targetText": "I got my pen, I got my paper. Well, uh, yeah. Yep.",
              "contextDependency": {
                "reason": "Without knowing about the 45-minute deadline and the lost phone, 'I got my pen, I got my paper' reads as a methodical, organized statement. Only the context reveals it as a panicked scramble.",
                "failure_case": "A context-unaware TTS would read it with calm, steady pacing, completely missing the frantic, anxious urgency that the situation demands."
              },
              "prosodyFocus": {
                "key_words": [
                  "pen",
                  "paper",
                  "Yep"
                ],
                "prosodic_features": "Rushed tempo, elevated pitch, slightly breathy or tense delivery, compressed pauses, stumbling slightly on 'Well, uh, yeah'",
                "explanation": "The tense, fast delivery conveys the anxiety of the deadline; without it, the speaker sounds relaxed, which contradicts the established emergency."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Fearful",
                "justification": "The situational context is highly urgent\u2014A has 45 minutes to cross LA without a phone. The utterance is a frantic, anxious scramble to get ready to write, not a calm confirmation of having supplies.",
                "grounding_event": "A's disclosure of the lost phone and the immediate, critical 45-minute deadline to leave right now."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/emotion/07-ex01-ex02-fast-001-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex01",
                  "utteranceId": 0,
                  "text": "Hey, Caroline, can I get you in here for a second?",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 2760.0,
                  "audio": "assets/audio/auto-eval/emotion/07-ex01-ex02-fast-001-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 1,
                  "text": "Absolutely Brad.",
                  "emotion": null,
                  "startTimeMs": 2380.0,
                  "endTimeMs": 3570.0,
                  "audio": "assets/audio/auto-eval/emotion/07-ex01-ex02-fast-001-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex01",
                  "utteranceId": 2,
                  "text": "Okay, so I was I can't find my phone and I need to get to Santa Monica Pier in 45 minutes and I need to leave pretty much right about now. Can you help me get there?",
                  "emotion": null,
                  "startTimeMs": 3920.0,
                  "endTimeMs": 12570.0,
                  "audio": "assets/audio/auto-eval/emotion/07-ex01-ex02-fast-001-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex02",
                  "utteranceId": 3,
                  "text": "Okay, yep, absolutely. Okay, so you're just going to write this down really quick. It's not going to take you long.",
                  "emotion": null,
                  "startTimeMs": 11560.0,
                  "endTimeMs": 16160.0,
                  "audio": "assets/audio/auto-eval/emotion/07-ex01-ex02-fast-001-rating-5/context_turn_03.wav"
                }
              ]
            },
            {
              "id": "08-t-36066ee7-42fb-413c-bce1-25a6933b938a-rating-5",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "t_36066ee7-42fb-413c-bce1-25a6933b938a",
              "rating": 5,
              "judgeExplanation": "The transcript is perfect, and the delivery features the described high pitch on 'Wow!' and clear emphasis on 'never', successfully capturing genuine surprise.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The transcript is perfect, and the delivery features the described high pitch on 'Wow!' and clear emphasis on 'never', successfully capturing genuine surprise."
              },
              "conversationId": "t_36066ee7-42fb-413c-bce1-25a6933b938a",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "A",
              "targetSpeakerId": null,
              "targetText": "Wow! Probably would not have been the case if Benjarvus Green Ellis was on their team. He has never fumbled the ball.",
              "contextDependency": {
                "reason": "Without knowing the preceding trivia about the 222-0 score, 'Wow!' could easily be interpreted as sarcastic, mildly impressed, or feigned interest. The context of an impossibly high score dictates genuine, bright surprise.",
                "failure_case": "A context-unaware TTS might produce a flat, uninvested 'Wow' that makes the speaker sound bored or sarcastic rather than genuinely shocked by the 222-0 score."
              },
              "prosodyFocus": {
                "key_words": [
                  "Wow",
                  "never"
                ],
                "prosodic_features": "High pitch excursion on 'Wow' with an energized onset, followed by enthusiastic emphasis on 'never'",
                "explanation": "The 'Wow!' requires a sharp, elevated pitch contour to signal genuine surprise at the incredible score. Without it, the reaction feels disconnected from the magnitude of a 222-0 game."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Surprised",
                "justification": "B has just shared an astonishing piece of sports trivia: a football score of 222 to 0. A's 'Wow!' is a genuine expression of shock and amazement at this extreme, unbelievable number.",
                "grounding_event": "B's disclosure that in 1916, a football game ended with a score of 222 to 0."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/emotion/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "Have you heard of Keith Jackson?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "Yes, he is the voice of college football right?  Do you know what broadcast he was on?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "He did Saturday afternoon broadcasts on ABC. Seemed he had a long fulfilling life. He was 89.",
                  "emotion": "Sad",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "I do recall him covering a wide variety of sports for radio and television.  Do you recall what he would call the linemen guards?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "He had a lot of funny terminology. Like a \"bantam rooster\" and \"Whoa Nellie!\"",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "He was a very funny and interesting man.  Something else that is funny is the University of Iowa painted the visiting locker room pink.  I wonder what the visiting football teams thought about that.  ",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-rating-5/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 6,
                  "text": "Yeah it was probably before pink became popular for professional football players to support breast cancer",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-rating-5/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 7,
                  "text": "Do you watch a lot of football?",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-rating-5/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 8,
                  "text": "Not really. How about you? I know that football has really grown in popularity. In the 60s, top bowlers made twice as much as football stars.",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-rating-5/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 9,
                  "text": "Yes.  I am a big fan.  I love researching about the history of football.  I just read the other day that in 1916, the highest score ever in a football game was 222 to 0.  Georgia Tech vs. Cumberland.  We don't see such a high number like this.  ",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/08-t-36066ee7-42fb-413c-bce1-25a6933b938a-rating-5/context_turn_09.wav"
                }
              ]
            },
            {
              "id": "09-ex01-ex02-fast-002-rating-5",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "ex01-ex02_fast_002",
              "rating": 5,
              "judgeExplanation": "The utterance is perfectly transcribed and delivered with the required warm, softened, and sympathetic tone, matching the contextual need for reassurance.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The utterance is perfectly transcribed and delivered with the required warm, softened, and sympathetic tone, matching the contextual need for reassurance."
              },
              "conversationId": "ex01-ex02_fast_002",
              "segmentId": "ex01-ex02_fast_002",
              "style": "fast",
              "datasetSource": "espresso",
              "targetSpeaker": "B",
              "targetSpeakerId": "ex01",
              "targetText": "Oh, that happens to the best of us.",
              "contextDependency": {
                "reason": "Without the context of A's embarrassment, this common idiom could easily be delivered as a dismissive, rushed, or even sarcastic platitude. The specific situational context demands sincere sympathy.",
                "failure_case": "A context-unaware TTS might deliver this with a flat, rushed, or purely factual tone, failing to provide the intended emotional comfort that A's prior turn solicits."
              },
              "prosodyFocus": {
                "key_words": [
                  "Oh",
                  "best"
                ],
                "prosodic_features": "Warm, softened vocal tone, gentle falling pitch contour on 'best of us', and a slightly slower, more deliberate tempo compared to the surrounding fast speech.",
                "explanation": "To convey genuine reassurance, the delivery must be warm and comforting. A fast or flat delivery would sound dismissive rather than empathetic."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Sympathetic / Sympathetic-Sad",
                "justification": "Speaker A has just vulnerably admitted a 'silly' mistake\u2014leaving their phone at home\u2014and is asking for manual directions. B responds with a reassuring, comforting idiom to alleviate A's embarrassment and stress.",
                "grounding_event": "A's anxious admission of feeling silly for leaving their phone on the charger and needing to write down physical directions."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/emotion/09-ex01-ex02-fast-002-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "Hey, Tim.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 1750.0,
                  "audio": "assets/audio/auto-eval/emotion/09-ex01-ex02-fast-002-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "Yo, what's up?",
                  "emotion": null,
                  "startTimeMs": 1340.0,
                  "endTimeMs": 2120.0,
                  "audio": "assets/audio/auto-eval/emotion/09-ex01-ex02-fast-002-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Um, this is so silly. I left my phone at home and I didn't mean to leave it on the charger. I meant to bring it with me. Yeah, I, so I need to get down to Balboa Park. Um, and I'm going down there to see my friend and I just really need some assistance. So do you think you could, um, I have pen and paper ready to go. If you wouldn't mind, I'm just going to take some notes so that I can get onto the highway and get down there. I usually know once I'm like down in the area, it's just hard from here to there.",
                  "emotion": null,
                  "startTimeMs": 1810.0,
                  "endTimeMs": 31770.0,
                  "audio": "assets/audio/auto-eval/emotion/09-ex01-ex02-fast-002-rating-5/context_turn_02.wav"
                }
              ]
            },
            {
              "id": "10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5",
              "datasetKey": "emotion",
              "datasetLabel": "Emotion",
              "title": "t_3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1",
              "rating": 5,
              "judgeExplanation": "Flawless transcription and excellent prosody. The elevated pitch on 'wow' and engaged, curious tempo perfectly capture the genuine surprise required by the preceding trivia context.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "Flawless transcription and excellent prosody. The elevated pitch on 'wow' and engaged, curious tempo perfectly capture the genuine surprise required by the preceding trivia context."
              },
              "conversationId": "t_3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "B",
              "targetSpeakerId": null,
              "targetText": "Wow, no I didn't know that. Have there been any female players?",
              "contextDependency": {
                "reason": "Without the prior context of the surprising NFL trivia, the text could be a polite, low-energy acknowledgment of a mundane fact.",
                "failure_case": "A context-unaware TTS would likely deliver a flat, perfunctory 'Wow' and a neutral question, completely failing to capture the shock and enthusiastic engagement provoked by the trivia."
              },
              "prosodyFocus": {
                "key_words": [
                  "Wow",
                  "didn't know",
                  "female"
                ],
                "prosodic_features": "Elevated pitch and widened F0 range on 'Wow', slightly faster tempo on the follow-up question, higher register indicating engagement",
                "explanation": "The delivery needs to convey a 'mind-blown' reaction. If 'Wow' is delivered with low energy, it sounds dismissive rather than genuinely shocked by the new fact."
              },
              "communicativeIntent": null,
              "emotion": {
                "label": "Surprised",
                "justification": "A shares a highly unexpected fact about the NFL having no rule against female players. B's 'Wow' and follow-up question reflect genuine astonishment and immediate engagement with this surprising new information.",
                "grounding_event": "A's revelation that the NFL would theoretically allow a woman to play because there is no rule against it."
              },
              "informationStructure": null,
              "wordLevelAnnotation": null,
              "referenceTargetAudio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "Do you like cats?",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "Yeah, cats are cool. Do you own one? ",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "No,but many of my friends do have one or more, they sleep a lot",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "Apparently, after living for 15 years, 10 of it is from sleeping. ",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "That is a lot. Did you know there is a town , where the Mayor is a cat?",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "I think that is in Alaska, right? ",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 6,
                  "text": "Yes, the town is Talkeetna, and the cat has been major since 1997",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 7,
                  "text": "Wow, I wonder if he has to make a lot of executive decisions? ",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 8,
                  "text": "I guess he is a very honest major. I would like to go to a cafe where one can play with cats!",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 9,
                  "text": "yeah, me too. They had a cat in the opening scene of the godfather. ",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_09.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 10,
                  "text": "Did you know a cat was once named co-author of a book?",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_10.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 11,
                  "text": "Yeah, but a physicist right? I wonder why though? ",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_11.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 12,
                  "text": "That is right! Hey do you like football?",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 13,
                  "text": "I do. I watched the superbowl a few weeks ago, kind of boring for the big game. ",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_13.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 14,
                  "text": "Season is over!! when the season starts they only rest one weekend!",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_14.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 15,
                  "text": "Yeah, well apparently Iowa paints their locker room pink for visiting teams. ",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_15.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 16,
                  "text": "That is so funny, they want to intimidate the visitors, right?",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_16.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 17,
                  "text": "Yeah, it sounds like it. I'm surprised it is allowed, aren't you? ",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_17.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 18,
                  "text": "They allow many things, did you know the NFL would allow a woman to play, there is no rule against",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/emotion/10-t-3c4b17af-eb78-4ad0-a5a6-fca2c14aa4c1-rating-5/context_turn_18.wav"
                }
              ]
            }
          ]
        },
        {
          "key": "is",
          "label": "Information Structure",
          "description": "Reference audio graded by the Automatic Eval Pipeline.",
          "totalExamplesLoaded": 1122,
          "ratingCounts": {
            "5": 1112,
            "None": 10
          },
          "sourceCounts": {
            "espresso": 77,
            "multiturn": 304,
            "swdb": 741
          },
          "selectedSourceCounts": {
            "espresso": 4,
            "multiturn": 3,
            "swdb": 3
          },
          "showcaseCount": 10,
          "examples": [
            {
              "id": "01-ex01-ex02-default-003-rating-5",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "ex01-ex02_default_003",
              "rating": 5,
              "judgeExplanation": "The speaker correctly places the nuclear pitch accent on 'know' and strictly deaccents 'low bar', perfectly reflecting its GIVEN status from the preceding context.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The speaker correctly places the nuclear pitch accent on 'know' and strictly deaccents 'low bar', perfectly reflecting its GIVEN status from the preceding context."
              },
              "conversationId": "ex01-ex02_default_003",
              "segmentId": "ex01-ex02_default_003",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex02",
              "targetText": "I don't even know if that's a low bar, though.",
              "contextDependency": {
                "reason": "If isolated, 'low bar' would be the natural locus for nuclear stress as the sentence-final noun phrase.",
                "failure_case": "TTS places a strong H* accent on 'low bar', making it sound like A is originating the concept rather than echoing B."
              },
              "prosodyFocus": {
                "key_words": [
                  "know",
                  "low bar"
                ],
                "prosodic_features": "Nuclear stress falls early on 'know' (or 'that\\'s'), followed by strict post-nuclear deaccenting on 'low bar'.",
                "explanation": "Echoing a previously introduced noun phrase requires post-nuclear deaccenting to show it is already grounded in the immediate discourse."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "MIXED",
                "subcategory": "given-new cooccurrence",
                "justification": "B just established the concept of a 'low bar'. A echoes it as GIVEN while expressing a NEW cognitive stance."
              },
              "wordLevelAnnotation": [
                {
                  "word": "know",
                  "is_label": "NEW",
                  "why_context": "A introduces her own cognitive stance and reaction regarding B's previous statement.",
                  "expected_prosody": "H* pitch accent, higher F0",
                  "key_signal": "H* shape, F0 \u2191"
                },
                {
                  "word": "low bar",
                  "is_label": "GIVEN",
                  "why_context": "Directly echoes B's immediately preceding statement 'My bar is set real low.'",
                  "expected_prosody": "Deaccented, low F0, short duration",
                  "key_signal": "F0 \u2193, dur \u2193"
                }
              ],
              "referenceTargetAudio": "assets/audio/auto-eval/is/01-ex01-ex02-default-003-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "It is pronounced Zed. It's much more simplistic to figure that out too. I'm just, no, I'm just letting you know, like you can sing the alphabet however you want, but if you don't end it in a Zed, there's even, there's even an artist named Zed's dead. I'm not even going to get into it. It's a thing.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 17290.0,
                  "audio": "assets/audio/auto-eval/is/01-ex01-ex02-default-003-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "it sounds like you kind of want to get into it jackie well look i i've been pronouncing it z my entire life and i'm open to new ideas because my opinion is malleable like clay",
                  "emotion": null,
                  "startTimeMs": 17320.0,
                  "endTimeMs": 34320.0,
                  "audio": "assets/audio/auto-eval/is/01-ex01-ex02-default-003-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Same. I moved to the U.S. I have to adapt.",
                  "emotion": null,
                  "startTimeMs": 33800.0,
                  "endTimeMs": 37970.0,
                  "audio": "assets/audio/auto-eval/is/01-ex01-ex02-default-003-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "That's kind of true. You also moved to freaking L.A., which is like, oh, you know, everything is changing all the time out here. You got to just like go with the flow. The punches are real.",
                  "emotion": null,
                  "startTimeMs": 38090.0,
                  "endTimeMs": 48650.0,
                  "audio": "assets/audio/auto-eval/is/01-ex01-ex02-default-003-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 4,
                  "text": "But what about you? Like, where are you from specifically?",
                  "emotion": null,
                  "startTimeMs": 50260.0,
                  "endTimeMs": 53610.0,
                  "audio": "assets/audio/auto-eval/is/01-ex01-ex02-default-003-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 5,
                  "text": "Where am I from?",
                  "emotion": null,
                  "startTimeMs": 53820.0,
                  "endTimeMs": 54600.0,
                  "audio": "assets/audio/auto-eval/is/01-ex01-ex02-default-003-rating-5/context_turn_05.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 6,
                  "text": "Thank you.",
                  "emotion": null,
                  "startTimeMs": 55790.0,
                  "endTimeMs": 161340.0,
                  "audio": "assets/audio/auto-eval/is/01-ex01-ex02-default-003-rating-5/context_turn_06.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 7,
                  "text": "So sorry, so are you acting now full time?",
                  "emotion": null,
                  "startTimeMs": 161720.0,
                  "endTimeMs": 166080.0,
                  "audio": "assets/audio/auto-eval/is/01-ex01-ex02-default-003-rating-5/context_turn_07.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 8,
                  "text": "Yeah.",
                  "emotion": null,
                  "startTimeMs": 166210.0,
                  "endTimeMs": 166600.0,
                  "audio": "assets/audio/auto-eval/is/01-ex01-ex02-default-003-rating-5/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 9,
                  "text": "Now I am.",
                  "emotion": null,
                  "startTimeMs": 166680.0,
                  "endTimeMs": 168240.0,
                  "audio": "assets/audio/auto-eval/is/01-ex01-ex02-default-003-rating-5/context_turn_09.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 10,
                  "text": "It's awesome. I'm so lucky to be in this position. I get to do a lot of audio books. So that pays my rent. I was talking with a friend about like, I don't know about you. Are you acting full time as well?",
                  "emotion": null,
                  "startTimeMs": 168400.0,
                  "endTimeMs": 184950.0,
                  "audio": "assets/audio/auto-eval/is/01-ex01-ex02-default-003-rating-5/context_turn_10.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 11,
                  "text": "That's what I'm trying to do.",
                  "emotion": null,
                  "startTimeMs": 185760.0,
                  "endTimeMs": 188050.0,
                  "audio": "assets/audio/auto-eval/is/01-ex01-ex02-default-003-rating-5/context_turn_11.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 12,
                  "text": "That's fair, that's fair. I was talking with a friend that was like,",
                  "emotion": null,
                  "startTimeMs": 188360.0,
                  "endTimeMs": 193570.0,
                  "audio": "assets/audio/auto-eval/is/01-ex01-ex02-default-003-rating-5/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 13,
                  "text": "He was trying to define voice acting or acting in general as you make it when you're famous. You make it when you're, like, you know, up in the big leagues with, you know, Zendaya and Tom Holland. And that's when you make it. And I'm like, no, you make it when you can make a little bit of money and can pay, like, half your rent, you know, doing this stuff. That's my standards. My bar is set real low.",
                  "emotion": null,
                  "startTimeMs": 195100.0,
                  "endTimeMs": 224940.0,
                  "audio": "assets/audio/auto-eval/is/01-ex01-ex02-default-003-rating-5/context_turn_13.wav"
                }
              ]
            },
            {
              "id": "02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "t_399c885a-60fc-4b7f-aa17-744208ee80a5",
              "rating": 5,
              "judgeExplanation": "Perfect match. 'Thomas Jefferson' receives heavy contrastive stress, while the given concepts 'TB12 method' and 'bible' are correctly deaccented and completely flat.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "Perfect match. 'Thomas Jefferson' receives heavy contrastive stress, while the given concepts 'TB12 method' and 'bible' are correctly deaccented and completely flat."
              },
              "conversationId": "t_399c885a-60fc-4b7f-aa17-744208ee80a5",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "A",
              "targetSpeakerId": null,
              "targetText": "I bet Thomas Jefferson would create his own TB12 method just like how he created his own version of the bible",
              "contextDependency": {
                "reason": "Only prior dialogue reveals that 'TB12 method' and 'bible' are already mutually understood concepts rather than new topics.",
                "failure_case": "TTS applies default sentence-level stress, inappropriately accenting 'method' and 'bible' while under-emphasizing 'Thomas Jefferson'."
              },
              "prosodyFocus": {
                "key_words": [
                  "Thomas Jefferson",
                  "TB12 method",
                  "bible"
                ],
                "prosodic_features": "Heavy contrastive stress on 'Thomas Jefferson', followed by global deaccentuation on the lexical nouns 'TB12 method' and 'bible'.",
                "explanation": "The utterance is built entirely on given concepts except for the new subject ('Thomas Jefferson') and the modifier ('own'), which must carry all the prosodic weight."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "MIXED",
                "subcategory": "given-contrastive cooccurrence",
                "justification": "Both 'TB12 method' and 'bible' have been heavily established in prior turns. 'Thomas Jefferson' is introduced as a CONTRASTIVE alternative to 'Teddy Roosevelt and John Quincy'."
              },
              "wordLevelAnnotation": [
                {
                  "word": "Thomas Jefferson",
                  "is_label": "CONTRASTIVE",
                  "why_context": "Directly contrasts with the previously discussed US presidents (TR and JQ).",
                  "expected_prosody": "L+H* pitch accent, steep rise-fall, very prominent",
                  "key_signal": "L+H* shape, max F0 \u2191"
                },
                {
                  "word": "TB12 method",
                  "is_label": "GIVEN",
                  "why_context": "Echoed repeatedly throughout the conversation, including the immediate prior turns.",
                  "expected_prosody": "Deaccented, low F0, compressed pitch range",
                  "key_signal": "F0 \u2193, flattened contour"
                },
                {
                  "word": "bible",
                  "is_label": "GIVEN",
                  "why_context": "Mentioned two turns prior by A as the book presidents normally swear on.",
                  "expected_prosody": "Deaccented, low phrase-final boundary tone",
                  "key_signal": "Low F0, lack of pitch accent"
                }
              ],
              "referenceTargetAudio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "How's it going, are you a football fan? Tom Brady recently released a book of his TB12 Method detailing his workouts and diet",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "He did? I bet it's a best seller. That guy has so many followers and fans. I don't know the TB12 Method though.",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "Yea the TB12 method is pretty popular, I guess he considers it part of his spiritual quest",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "He is on a spiritual quest? Isn't he already fully committed to a faith of some sort?",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "I guess Tom Brady considers football as his religion",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "He is both a devout worshipper and deity.",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 6,
                  "text": "I can see how sport shares some things with religion like community and rituals",
                  "emotion": "Disgusted",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 7,
                  "text": "I think the people are thirsty for something to believe in. They crave it, like ice cream.",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 8,
                  "text": "Well avocado ice cream might be nice but it's not as good as the real thing",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 9,
                  "text": "I don't understand why someone would ruin something as wholesome as ice cream. Children's ice cream.",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/context_turn_09.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 10,
                  "text": "I don't know but apparently it's a major reason why Tom Brady still thinks he is playing at 40 years old",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/context_turn_10.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 11,
                  "text": "I guess everybody has faith in their own flavor of ice cream. I have stuck my 31 my whole life.",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/context_turn_11.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 12,
                  "text": "Yea, it's unfortunate Brady is preaching his TB12 method to others",
                  "emotion": "Sad",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 13,
                  "text": "That is the nature of preachery. It cannot be stopped. It spreads, like someone's waistline after eating lots of ice cream.",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/context_turn_13.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 14,
                  "text": "I wonder if Tom Brady makes teammates swear on his TB12 method like US presidents are sworn in on a bible, except for Teddy Roosevelt and John Quincy",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/context_turn_14.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 15,
                  "text": "I bet TR and JQ would have sworn on TB's TB12.",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/02-t-399c885a-60fc-4b7f-aa17-744208ee80a5-rating-5/context_turn_15.wav"
                }
              ]
            },
            {
              "id": "03-sw02326-seg-0010-rating-5",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "sw02326_seg_0010",
              "rating": 5,
              "judgeExplanation": "The audio perfectly deaccents the given words 'area' and 'car', placing clear and prominent nuclear stress on the new evaluative adjective 'neat'.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The audio perfectly deaccents the given words 'area' and 'car', placing clear and prominent nuclear stress on the new evaluative adjective 'neat'."
              },
              "conversationId": "sw02326",
              "segmentId": "sw02326_seg_0010",
              "style": null,
              "datasetSource": "swdb",
              "targetSpeaker": "A",
              "targetSpeakerId": null,
              "targetText": "on down through roundrock he just he just patrols up and down through that area now that's a neat little car",
              "contextDependency": {
                "reason": "By default, English phrasing places nuclear accents on the last content noun of a phrase (e.g., 'AREA', 'CAR').",
                "failure_case": "TTS heavily stresses 'area' and 'car' as new concepts, breaking the anaphoric links to the preceding discourse and making the speech sound disjointed."
              },
              "prosodyFocus": {
                "key_words": [
                  "area",
                  "neat",
                  "car"
                ],
                "prosodic_features": "Nuclear stress shifts back to 'neat', leaving the final noun 'car' fully deaccented. 'Area' is also deaccented.",
                "explanation": "Because both 'area' and 'car' are accessible from prior context, the standard right-edge sentence stress is blocked, shifting the prosodic prominence to the adjective."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "MIXED",
                "subcategory": "given-new cooccurrence via lexical substitution",
                "justification": "The utterance is heavily loaded with GIVEN concepts ('roundrock', 'area', 'car') that refer back to the established discourse, contrasted with NEW evaluative information ('neat')."
              },
              "wordLevelAnnotation": [
                {
                  "word": "area",
                  "is_label": "GIVEN",
                  "why_context": "Summarizes the previously discussed locations (Georgetown and Roundrock).",
                  "expected_prosody": "Deaccented, low F0, lacks the typical phrase-final stress",
                  "key_signal": "F0 \u2193, completely flat"
                },
                {
                  "word": "neat",
                  "is_label": "NEW",
                  "why_context": "Introduces a new evaluative opinion about the vehicle.",
                  "expected_prosody": "H* pitch accent, higher F0 peak",
                  "key_signal": "H* shape, F0 peak \u2191"
                },
                {
                  "word": "car",
                  "is_label": "GIVEN",
                  "why_context": "Lexical substitution referring back to the 'mustangs' mentioned in A's first turn.",
                  "expected_prosody": "Deaccented, low F0, short duration",
                  "key_signal": "F0 \u2193, dur \u2193 relative to 'neat'"
                }
              ],
              "referenceTargetAudio": "assets/audio/auto-eval/is/03-sw02326-seg-0010-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "um well watch it coming down south down when you get through uh round round georgetown and roundrock they got a highway patrol that just patrols up and down that thing in those little fast mustangs",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/03-sw02326-seg-0010-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "i'll have to keep that in mind because uh",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/03-sw02326-seg-0010-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "he just he just lives out there he makes his living on the road out there",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/03-sw02326-seg-0010-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "roundrock and where",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/03-sw02326-seg-0010-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "georgetown georgetown or [noise] georgetown",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/03-sw02326-seg-0010-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "georgetown",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/03-sw02326-seg-0010-rating-5/context_turn_05.wav"
                }
              ]
            },
            {
              "id": "04-ex01-ex02-default-004-rating-5",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "ex01-ex02_default_004",
              "rating": 5,
              "judgeExplanation": "The audio perfectly realizes the IS hypothesis, placing clear nuclear prominence on the new evaluation 'rough' while appropriately deaccenting the given word 'sport'.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The audio perfectly realizes the IS hypothesis, placing clear nuclear prominence on the new evaluation 'rough' while appropriately deaccenting the given word 'sport'."
              },
              "conversationId": "ex01-ex02_default_004",
              "segmentId": "ex01-ex02_default_004",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex02",
              "targetText": "Wow, that's a rough sport.",
              "contextDependency": {
                "reason": "Without the context of B talking about his sport, 'sport' would normally receive an accent as the phrase-final noun.",
                "failure_case": "A context-unaware TTS places the nuclear accent on 'sport', obscuring the actual informational focus."
              },
              "prosodyFocus": {
                "key_words": [
                  "rough",
                  "sport"
                ],
                "prosodic_features": "'rough' carries the nuclear pitch accent while 'sport' is prosodically reduced.",
                "explanation": "Because 'sport' is already active in the discourse, the prosodic prominence shifts to the adjective 'rough'. Equal stress would sound unnatural."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "MIXED",
                "subcategory": "given-new cooccurrence",
                "justification": "B just identified lacrosse as his 'main sport'. In A's response, 'sport' is GIVEN and 'rough' is the NEW descriptive information."
              },
              "wordLevelAnnotation": [
                {
                  "word": "rough",
                  "is_label": "NEW",
                  "why_context": "Introduces A's new evaluation of the sport.",
                  "expected_prosody": "H* pitch accent, prominent F0 peak",
                  "key_signal": "H* shape, F0 \u2191"
                },
                {
                  "word": "sport",
                  "is_label": "GIVEN",
                  "why_context": "Direct lexical repetition from B's preceding turn.",
                  "expected_prosody": "Deaccented, flat F0, shorter duration",
                  "key_signal": "F0 \u2193, dur \u2193"
                }
              ],
              "referenceTargetAudio": "assets/audio/auto-eval/is/04-ex01-ex02-default-004-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "Well, put a stick on your back. And, you know, that's another technique that they use where they put a stick across your back and they make you stay in one spot as you're, as you're, so you don't move. And...",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 12380.0,
                  "audio": "assets/audio/auto-eval/is/04-ex01-ex02-default-004-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "That reminds me of ballet. Oh my god.",
                  "emotion": null,
                  "startTimeMs": 11680.0,
                  "endTimeMs": 14270.0,
                  "audio": "assets/audio/auto-eval/is/04-ex01-ex02-default-004-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Did you ever do dance?",
                  "emotion": null,
                  "startTimeMs": 16780.0,
                  "endTimeMs": 18100.0,
                  "audio": "assets/audio/auto-eval/is/04-ex01-ex02-default-004-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "Don't you dance?",
                  "emotion": null,
                  "startTimeMs": 18450.0,
                  "endTimeMs": 54400.0,
                  "audio": "assets/audio/auto-eval/is/04-ex01-ex02-default-004-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 4,
                  "text": "I did dance when I was young and gymnastics. So, yeah, so fun. I did that for a long time.",
                  "emotion": null,
                  "startTimeMs": 54220.0,
                  "endTimeMs": 66480.0,
                  "audio": "assets/audio/auto-eval/is/04-ex01-ex02-default-004-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 5,
                  "text": "I have a question to ask a gymnastics person. Did you ever get injured when you were doing gymnastics? Oh yeah? Describe it, tell me. What happened?",
                  "emotion": null,
                  "startTimeMs": 65950.0,
                  "endTimeMs": 78990.0,
                  "audio": "assets/audio/auto-eval/is/04-ex01-ex02-default-004-rating-5/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 6,
                  "text": "Well, actually, I was, I watched, did you, have you seen the documentary Athlete A?",
                  "emotion": null,
                  "startTimeMs": 79180.0,
                  "endTimeMs": 88020.0,
                  "audio": "assets/audio/auto-eval/is/04-ex01-ex02-default-004-rating-5/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 7,
                  "text": "No I have not.",
                  "emotion": null,
                  "startTimeMs": 88380.0,
                  "endTimeMs": 89540.0,
                  "audio": "assets/audio/auto-eval/is/04-ex01-ex02-default-004-rating-5/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 8,
                  "text": "It was loud enough that you could hear it in the gymnasium.",
                  "emotion": null,
                  "startTimeMs": 89800.0,
                  "endTimeMs": 197690.0,
                  "audio": "assets/audio/auto-eval/is/04-ex01-ex02-default-004-rating-5/context_turn_08.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 9,
                  "text": "And,",
                  "emotion": null,
                  "startTimeMs": 198200.0,
                  "endTimeMs": 200050.0,
                  "audio": "assets/audio/auto-eval/is/04-ex01-ex02-default-004-rating-5/context_turn_09.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 10,
                  "text": "It was like a palpable sound. It's really gross. But yeah, I've injured myself a lot. I've winded myself. I've probably had concussions from it.",
                  "emotion": null,
                  "startTimeMs": 201900.0,
                  "endTimeMs": 215150.0,
                  "audio": "assets/audio/auto-eval/is/04-ex01-ex02-default-004-rating-5/context_turn_10.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 11,
                  "text": "Hey, you're talking about concussions. I've had eight of them. I've had eight concussions. Yeah. Yeah.",
                  "emotion": null,
                  "startTimeMs": 214600.0,
                  "endTimeMs": 220220.0,
                  "audio": "assets/audio/auto-eval/is/04-ex01-ex02-default-004-rating-5/context_turn_11.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 12,
                  "text": "Really? What did you, what did you do sports wise?",
                  "emotion": null,
                  "startTimeMs": 218600.0,
                  "endTimeMs": 221780.0,
                  "audio": "assets/audio/auto-eval/is/04-ex01-ex02-default-004-rating-5/context_turn_12.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 13,
                  "text": "What didn't I do? I played... I did ballet, as you know. I did swimming, baseball, t-ball, basketball. I did football, pole vault. I trained for American Ninja Warrior. And then my main sport, though, the one that was most consistent throughout my younger years, was lacrosse. I played lacrosse for...",
                  "emotion": null,
                  "startTimeMs": 222740.0,
                  "endTimeMs": 250100.0,
                  "audio": "assets/audio/auto-eval/is/04-ex01-ex02-default-004-rating-5/context_turn_13.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 14,
                  "text": "Eight years straight?",
                  "emotion": null,
                  "startTimeMs": 251470.0,
                  "endTimeMs": 253370.0,
                  "audio": "assets/audio/auto-eval/is/04-ex01-ex02-default-004-rating-5/context_turn_14.wav"
                }
              ]
            },
            {
              "id": "05-t-a6e5f7c8-4390-499c-8750-3330a7579a85-rating-5",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "t_a6e5f7c8-4390-499c-8750-3330a7579a85",
              "rating": 5,
              "judgeExplanation": "The audio perfectly places strong contrastive prominence on 'Jesus' while correctly deaccenting the given word 'figure', exactly matching the hypothesis.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The audio perfectly places strong contrastive prominence on 'Jesus' while correctly deaccenting the given word 'figure', exactly matching the hypothesis."
              },
              "conversationId": "t_a6e5f7c8-4390-499c-8750-3330a7579a85",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "B",
              "targetSpeakerId": null,
              "targetText": "He sounds like a Jesus figure. Does he have long hair and flowing robes?",
              "contextDependency": {
                "reason": "Without A's prior use of 'messiah figure', 'figure' would not be treated as grounded background information.",
                "failure_case": "A context-unaware TTS places equal or primary pitch accent on 'figure', missing the substitution dynamic."
              },
              "prosodyFocus": {
                "key_words": [
                  "Jesus",
                  "figure"
                ],
                "prosodic_features": "'Jesus' receives strong contrastive prominence while the head noun 'figure' is completely deaccented.",
                "explanation": "In default prosody, the compound 'Jesus figure' would often have accentuation on 'figure'. Contextual repetition dictates complete anaphoric reduction of 'figure', throwing all weight onto 'Jesus'."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "MIXED",
                "subcategory": "contrastive-given cooccurrence",
                "justification": "A introduces the concept of a 'messiah figure'. B echoes this concept, substituting 'Jesus' for 'messiah'. This makes 'Jesus' CONTRASTIVE/NEW while 'figure' is explicitly GIVEN."
              },
              "wordLevelAnnotation": [
                {
                  "word": "Jesus",
                  "is_label": "CONTRASTIVE",
                  "why_context": "Directly substitutes and specifies A's previous term 'messiah'.",
                  "expected_prosody": "L+H* pitch accent, prominent F0 peak, longer duration",
                  "key_signal": "L+H* shape, F0 peak \u2191"
                },
                {
                  "word": "figure",
                  "is_label": "GIVEN",
                  "why_context": "Directly repeated from A's phrase 'messiah figure' in the preceding turn.",
                  "expected_prosody": "Deaccented, low and flat F0, short duration",
                  "key_signal": "F0 \u2193, dur \u2193"
                }
              ],
              "referenceTargetAudio": "assets/audio/auto-eval/is/05-t-a6e5f7c8-4390-499c-8750-3330a7579a85-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "Hi how are you today? Do you like football?",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/05-t-a6e5f7c8-4390-499c-8750-3330a7579a85-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "Yes! It is a very popular sport around the world! Some of best male and female athletes in the world play football.",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/05-t-a6e5f7c8-4390-499c-8750-3330a7579a85-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "Tom brady has show on facebook watch. Its interesting.",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/05-t-a6e5f7c8-4390-499c-8750-3330a7579a85-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "Tom Brady? Who is he? What country does he play for?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/05-t-a6e5f7c8-4390-499c-8750-3330a7579a85-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "Ton Brady is an american foot ball player. He played with the new england patriots. Do you know who they are? ",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/05-t-a6e5f7c8-4390-499c-8750-3330a7579a85-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "There are not many Americans that play football. He must be quite good. I didn't know that there was a soccer team in New England. ",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/05-t-a6e5f7c8-4390-499c-8750-3330a7579a85-rating-5/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 6,
                  "text": "No they are in the United States. They are just named for the new england colonized states.",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/05-t-a6e5f7c8-4390-499c-8750-3330a7579a85-rating-5/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 7,
                  "text": "The United States is a very big country, so it should have many soccer teams. The Tom Brady player is famous for his soccer skills? Has he scored many goals? ",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/05-t-a6e5f7c8-4390-499c-8750-3330a7579a85-rating-5/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 8,
                  "text": "Yes Brady is sort of a messiah figure for a lot of his fans. He is known for his gruff demeanor and ragamuffin fashion sense.",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/05-t-a6e5f7c8-4390-499c-8750-3330a7579a85-rating-5/context_turn_08.wav"
                }
              ]
            },
            {
              "id": "06-sw02569-seg-0010-rating-5",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "sw02569_seg_0010",
              "rating": 5,
              "judgeExplanation": "The audio accurately reflects the IS hypothesis, clearly deaccenting the given word 'water' while placing prominent pitch accents on the new concept 'foundation problems'.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The audio accurately reflects the IS hypothesis, clearly deaccenting the given word 'water' while placing prominent pitch accents on the new concept 'foundation problems'."
              },
              "conversationId": "sw02569",
              "segmentId": "sw02569_seg_0010",
              "style": null,
              "datasetSource": "swdb",
              "targetSpeaker": "B",
              "targetSpeakerId": null,
              "targetText": "uh pretty much and our landlord always asks us to uh continue doing that even though we pay for the water because of you know foundation problems around here",
              "contextDependency": {
                "reason": "Without A's question establishing watering as the topic, 'water' would naturally receive an accent as new information in 'pay for the water'.",
                "failure_case": "A context-unaware TTS places an H* accent on 'water', ignoring its established status in the discourse and confusing the listener."
              },
              "prosodyFocus": {
                "key_words": [
                  "water",
                  "foundation problems"
                ],
                "prosodic_features": "'water' is deaccented despite being the object of 'pay for'; 'foundation problems' carries the nuclear pitch accent.",
                "explanation": "Because watering is the active discourse topic, 'water' must be prosodically reduced, allowing the new focal point ('foundation problems') to stand out."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "MIXED",
                "subcategory": "given-new cooccurrence",
                "justification": "A asks about 'watering a lot', making 'water' GIVEN in B's response. B introduces 'foundation problems' as NEW information explaining why."
              },
              "wordLevelAnnotation": [
                {
                  "word": "water",
                  "is_label": "GIVEN",
                  "why_context": "A asked if they have to 'water a lot' in the immediately preceding turn.",
                  "expected_prosody": "Deaccented, low flat F0, shorter duration",
                  "key_signal": "F0 \u2193, dur \u2193"
                },
                {
                  "word": "foundation problems",
                  "is_label": "NEW",
                  "why_context": "This is the first mention of the structural issue necessitating the watering.",
                  "expected_prosody": "H* pitch accent, higher F0 peak, longer duration",
                  "key_signal": "H* shape, F0 peak \u2191"
                }
              ],
              "referenceTargetAudio": "assets/audio/auto-eval/is/06-sw02569-seg-0010-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "shopping on sunday i said it's a little hard to do everything on saturday no pass no play uh kind of thing i said you know we had that for years in ohio and pennsylvania",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/06-sw02569-seg-0010-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "yeah huh",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/06-sw02569-seg-0010-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "huh [laughter]",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/06-sw02569-seg-0010-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "uh i- yeah that's true that's true we did we did and uh do you all do you all uh do you all have to water a lot over there",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/06-sw02569-seg-0010-rating-5/context_turn_03.wav"
                }
              ]
            },
            {
              "id": "07-ex01-ex02-default-012-rating-5",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "ex01-ex02_default_012",
              "rating": 5,
              "judgeExplanation": "The speaker correctly places primary stress on the verb 'have' while deaccenting the given cheese names 'manchego' and 'cheddar', perfectly matching the information structure.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The speaker correctly places primary stress on the verb 'have' while deaccenting the given cheese names 'manchego' and 'cheddar', perfectly matching the information structure."
              },
              "conversationId": "ex01-ex02_default_012",
              "segmentId": "ex01-ex02_default_012",
              "style": "default",
              "datasetSource": "espresso",
              "targetSpeaker": "A",
              "targetSpeakerId": "ex02",
              "targetText": "Ooh, I have manchego and I have cheddar, so perfect.",
              "contextDependency": {
                "reason": "Without the prior turn, a TTS system would assume 'manchego' and 'cheddar' are new entities being introduced and place prominent H* accents on both.",
                "failure_case": "TTS places primary stress on the cheese names, making A sound like they are spontaneously introducing the cheese types rather than acknowledging B's list."
              },
              "prosodyFocus": {
                "key_words": [
                  "manchego",
                  "cheddar"
                ],
                "prosodic_features": "Both nouns should be deaccented or significantly reduced compared to a neutral reading.",
                "explanation": "Because these specific cheeses were just offered as options, they are given information. The new/exciting information is the fact that A already possesses them ('have') and the evaluation ('perfect')."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "GIVEN",
                "subcategory": "repeated mention",
                "justification": "B just explicitly listed 'manchego' and 'cheddar' as options in the immediately preceding turn. A is confirming possession of those exact items."
              },
              "wordLevelAnnotation": [
                {
                  "word": "manchego",
                  "is_label": "GIVEN",
                  "why_context": "Directly repeats B's suggestion.",
                  "expected_prosody": "Deaccented, lower F0, flatter contour",
                  "key_signal": "F0 \u2193, dur \u2193"
                },
                {
                  "word": "cheddar",
                  "is_label": "GIVEN",
                  "why_context": "Directly repeats B's suggestion.",
                  "expected_prosody": "Deaccented, lower F0, flatter contour",
                  "key_signal": "F0 \u2193, dur \u2193"
                }
              ],
              "referenceTargetAudio": "assets/audio/auto-eval/is/07-ex01-ex02-default-012-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "Hey Kyle, how's it going?",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 1460.0,
                  "audio": "assets/audio/auto-eval/is/07-ex01-ex02-default-012-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "Oh, hey, Barbara. Haven't heard from you in a little bit. What's going on?",
                  "emotion": null,
                  "startTimeMs": 1590.0,
                  "endTimeMs": 4920.0,
                  "audio": "assets/audio/auto-eval/is/07-ex01-ex02-default-012-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Um, I didn't want to bother you, but I was really hoping I could start cooking your favorite dish that you made for me. Oh my gosh, yeah, I love grilled cheese, yeah.",
                  "emotion": null,
                  "startTimeMs": 4950.0,
                  "endTimeMs": 16420.0,
                  "audio": "assets/audio/auto-eval/is/07-ex01-ex02-default-012-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "The grilled cheese, right?",
                  "emotion": null,
                  "startTimeMs": 11530.0,
                  "endTimeMs": 13870.0,
                  "audio": "assets/audio/auto-eval/is/07-ex01-ex02-default-012-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 4,
                  "text": "Oh, it was, okay, yeah. I am so willing to help you. Do you have your ingredients?",
                  "emotion": null,
                  "startTimeMs": 15560.0,
                  "endTimeMs": 20770.0,
                  "audio": "assets/audio/auto-eval/is/07-ex01-ex02-default-012-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 5,
                  "text": "Yeah, you have to remind me. I just want to make sure I have everything.",
                  "emotion": null,
                  "startTimeMs": 21720.0,
                  "endTimeMs": 24940.0,
                  "audio": "assets/audio/auto-eval/is/07-ex01-ex02-default-012-rating-5/context_turn_05.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 6,
                  "text": "Okay, okay. So you want to get a good sourdough bread. You want to get your two cheeses. You can get cheddar Swiss. You can get manchego. You can also get goat.",
                  "emotion": null,
                  "startTimeMs": 25180.0,
                  "endTimeMs": 36180.0,
                  "audio": "assets/audio/auto-eval/is/07-ex01-ex02-default-012-rating-5/context_turn_06.wav"
                }
              ]
            },
            {
              "id": "08-t-4c8e31cb-e68a-46de-b1b3-aade6d735b7f-rating-5",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "t_4c8e31cb-e68a-46de-b1b3-aade6d735b7f",
              "rating": 5,
              "judgeExplanation": "The audio accurately backgrounds the given phrase 'human error' with lower prominence, while placing the clear nuclear accent on the new topic 'politics'.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The audio accurately backgrounds the given phrase 'human error' with lower prominence, while placing the clear nuclear accent on the new topic 'politics'."
              },
              "conversationId": "t_4c8e31cb-e68a-46de-b1b3-aade6d735b7f",
              "segmentId": null,
              "style": null,
              "datasetSource": "multiturn",
              "targetSpeaker": "A",
              "targetSpeakerId": null,
              "targetText": "Speaking of \"human error\", are you interested in politics?",
              "contextDependency": {
                "reason": "Without knowing 'human error' was just spoken by B, a system would treat the quote as a new, highly salient concept to be stressed.",
                "failure_case": "TTS applies strong emphasis to 'human error', obscuring the fact that it is merely a transitional bridge to the actual focus: 'politics'."
              },
              "prosodyFocus": {
                "key_words": [
                  "error",
                  "politics"
                ],
                "prosodic_features": "The echoed phrase 'human error' is spoken at a lower pitch and deaccented, saving the full focal prominence for 'politics'.",
                "explanation": "Echoing a conversational partner's exact words requires prosodic reduction to signal that the information is already grounded before pivoting to the new subject."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "MIXED",
                "subcategory": "given-new cooccurrence",
                "justification": "The phrase 'human error' is explicitly echoed from B's turn to frame the topic, making it GIVEN. 'Politics' is introduced as a completely NEW topic."
              },
              "wordLevelAnnotation": [
                {
                  "word": "error",
                  "is_label": "GIVEN",
                  "why_context": "Directly repeated from B's prior statement about taking 'human error' out of the game.",
                  "expected_prosody": "Deaccented, flat/low F0, faster speaking rate",
                  "key_signal": "F0 \u2193, dur \u2193"
                },
                {
                  "word": "politics",
                  "is_label": "NEW",
                  "why_context": "Introduced as an abrupt topic shift out of nowhere.",
                  "expected_prosody": "H* pitch accent, high F0 peak, longer duration",
                  "key_signal": "H* shape, F0 peak \u2191"
                }
              ],
              "referenceTargetAudio": "assets/audio/auto-eval/is/08-t-4c8e31cb-e68a-46de-b1b3-aade6d735b7f-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "Hello, are you a fan of football?",
                  "emotion": "Curious to dive deeper",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/08-t-4c8e31cb-e68a-46de-b1b3-aade6d735b7f-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "Not really mostly college football at my Alma mater.",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/08-t-4c8e31cb-e68a-46de-b1b3-aade6d735b7f-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "I wonder if your school's team is good. I know the highest score in college football ever was 222-0. ",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/08-t-4c8e31cb-e68a-46de-b1b3-aade6d735b7f-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "My team, WVU Mountaineers, good or bad get my support and they do well but have ups and downs. I think it's just the fan support and community support that we all share for our state.",
                  "emotion": "Happy",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/08-t-4c8e31cb-e68a-46de-b1b3-aade6d735b7f-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "That's fair, hopefully they support other teams to some extent as well. I know the University of Iowa doesn't, they even paint visiting locker rooms pink.",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/08-t-4c8e31cb-e68a-46de-b1b3-aade6d735b7f-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 5,
                  "text": "Well that's the competition mentality taken to extreme, so prevalent today, I think at these times we are missing the point really.",
                  "emotion": "Sad",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/08-t-4c8e31cb-e68a-46de-b1b3-aade6d735b7f-rating-5/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 6,
                  "text": "That's a fair point, competition inspires people to be better. I'm sure Benjarvus Green-Ellis faced a decent amount to inspire him, probably how he never fumbled the football ever.",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/08-t-4c8e31cb-e68a-46de-b1b3-aade6d735b7f-rating-5/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 7,
                  "text": "Yes, I agree, when he played it was probably a completely different game.",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/08-t-4c8e31cb-e68a-46de-b1b3-aade6d735b7f-rating-5/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 8,
                  "text": "I think it's good that competition inspires innovation though. ESPN even won an emmy for creating the superimposed yellow line for first downs.",
                  "emotion": "Surprised",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/08-t-4c8e31cb-e68a-46de-b1b3-aade6d735b7f-rating-5/context_turn_08.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 9,
                  "text": "Yes, that was a good one, but I really think it was an effort to take the \"human error\" part out of the game. Most people have a problem with officiating in such a fluid game.",
                  "emotion": "Neutral",
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/08-t-4c8e31cb-e68a-46de-b1b3-aade6d735b7f-rating-5/context_turn_09.wav"
                }
              ]
            },
            {
              "id": "09-sw02472-seg-0013-rating-5",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "sw02472_seg_0013",
              "rating": 5,
              "judgeExplanation": "The audio perfectly realizes the information structure by placing a strong nuclear accent on 'lot' and completely deaccenting the final given word 'chicken'.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "The audio perfectly realizes the information structure by placing a strong nuclear accent on 'lot' and completely deaccenting the final given word 'chicken'."
              },
              "conversationId": "sw02472",
              "segmentId": "sw02472_seg_0013",
              "style": null,
              "datasetSource": "swdb",
              "targetSpeaker": "B",
              "targetSpeakerId": null,
              "targetText": "well the ones that i've been i've been wanting to get um i guess you've seen the 365 ways to cook chicken and 365 ways to cook pasta i've been i've been wanting to get those because we eat a lot of chicken",
              "contextDependency": {
                "reason": "Intra-turn context is required to know that 'chicken' at the end of the sentence is already given.",
                "failure_case": "A default TTS applies phrase-final nuclear stress to the last noun ('chicken'), ignoring that it was just mentioned, resulting in an unnatural robotic cadence."
              },
              "prosodyFocus": {
                "key_words": [
                  "pasta",
                  "lot",
                  "chicken"
                ],
                "prosodic_features": "'pasta' receives an accent; in the final clause, 'lot' takes the nuclear accent while the final word 'chicken' is completely deaccented.",
                "explanation": "The final phrase 'we eat a lot of chicken' requires the stress to fall on 'lot' rather than 'chicken' because chicken is already active in the discourse."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "MIXED",
                "subcategory": "given-new cooccurrence",
                "justification": "The utterance contains internal IS shifts. 'chicken' is introduced, 'pasta' is contrasted with it, and the final 'chicken' is highly GIVEN, shifting the final accent to 'lot'."
              },
              "wordLevelAnnotation": [
                {
                  "word": "pasta",
                  "is_label": "NEW",
                  "why_context": "Introduced as a new alternative to the previously mentioned 'chicken' within the parallel book titles.",
                  "expected_prosody": "H* pitch accent, prominent F0",
                  "key_signal": "H* shape"
                },
                {
                  "word": "lot",
                  "is_label": "NEW",
                  "why_context": "Introduces the new reason (quantity) for why they want the book.",
                  "expected_prosody": "H* or L+H* pitch accent, high F0",
                  "key_signal": "F0 peak \u2191"
                },
                {
                  "word": "chicken",
                  "is_label": "GIVEN",
                  "why_context": "Appears at the very end of the utterance, but was already established earlier in the same turn.",
                  "expected_prosody": "Deaccented, flat F0 tail",
                  "key_signal": "F0 \u2193, post-nuclear flat pitch"
                }
              ],
              "referenceTargetAudio": "assets/audio/auto-eval/is/09-sw02472-seg-0013-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 0,
                  "text": "gastro lamink the creative cooking course",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/09-sw02472-seg-0013-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 1,
                  "text": "i might have to visit the state book store and see wh-",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/09-sw02472-seg-0013-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 2,
                  "text": "[laughter] i was trying to see who it's published by ottenheimer i've never heard of it",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/09-sw02472-seg-0013-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": null,
                  "utteranceId": 3,
                  "text": "i haven't either",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/09-sw02472-seg-0013-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": null,
                  "utteranceId": 4,
                  "text": "this edition is published by bonanza books it's a big book but it was not expensive",
                  "emotion": null,
                  "startTimeMs": null,
                  "endTimeMs": null,
                  "audio": "assets/audio/auto-eval/is/09-sw02472-seg-0013-rating-5/context_turn_04.wav"
                }
              ]
            },
            {
              "id": "10-ex01-ex02-fast-002-rating-5",
              "datasetKey": "is",
              "datasetLabel": "Information Structure",
              "title": "ex01-ex02_fast_002",
              "rating": 5,
              "judgeExplanation": "No WER issues. 'Food truck' is appropriately deaccented and spoken quickly, while 'theme' receives a clear pitch accent and duration lengthening, perfectly matching the hypothesis.",
              "judgeResponse": {
                "rating": 5,
                "explanation": "No WER issues. 'Food truck' is appropriately deaccented and spoken quickly, while 'theme' receives a clear pitch accent and duration lengthening, perfectly matching the hypothesis."
              },
              "conversationId": "ex01-ex02_fast_002",
              "segmentId": "ex01-ex02_fast_002",
              "style": "fast",
              "datasetSource": "espresso",
              "targetSpeaker": "B",
              "targetSpeakerId": "ex01",
              "targetText": "Great food truck. It's all, it's all, it's all got a airplane food theme. You'll love it.",
              "contextDependency": {
                "reason": "Without the preceding exchange, 'food truck' would be treated as an important new entity.",
                "failure_case": "TTS accents 'food truck' strongly, disrupting the conversational flow by treating a highly salient background entity as a new focal point."
              },
              "prosodyFocus": {
                "key_words": [
                  "food truck",
                  "theme"
                ],
                "prosodic_features": "Minimal pitch movement on 'food truck' followed by a significant accentuation on the noun phrase 'airplane food theme'.",
                "explanation": "By deaccenting 'food truck', the speaker signals continuity of the topic, allowing the listener's attention to be drawn entirely to the novel description."
              },
              "communicativeIntent": null,
              "emotion": null,
              "informationStructure": {
                "category": "MIXED",
                "subcategory": "given-new cooccurrence",
                "justification": "The entity 'food truck' is heavily established as GIVEN. The concept of an 'airplane food theme' is the NEW descriptive information."
              },
              "wordLevelAnnotation": [
                {
                  "word": "food truck",
                  "is_label": "GIVEN",
                  "why_context": "The speakers have been exclusively discussing food trucks for the past three turns.",
                  "expected_prosody": "Deaccented, low pitch, spoken relatively quickly",
                  "key_signal": "F0 \u2193"
                },
                {
                  "word": "theme",
                  "is_label": "NEW",
                  "why_context": "The defining characteristic of the specific food truck is newly introduced.",
                  "expected_prosody": "H* pitch accent, distinct pitch peak, longer duration",
                  "key_signal": "H* shape, F0 peak \u2191"
                }
              ],
              "referenceTargetAudio": "assets/audio/auto-eval/is/10-ex01-ex02-fast-002-rating-5/reference_target.wav",
              "generatedAudio": null,
              "contextTurns": [
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 0,
                  "text": "Hey, Tim.",
                  "emotion": null,
                  "startTimeMs": 0.0,
                  "endTimeMs": 1750.0,
                  "audio": "assets/audio/auto-eval/is/10-ex01-ex02-fast-002-rating-5/context_turn_00.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 1,
                  "text": "Yo, what's up?",
                  "emotion": null,
                  "startTimeMs": 1340.0,
                  "endTimeMs": 2120.0,
                  "audio": "assets/audio/auto-eval/is/10-ex01-ex02-fast-002-rating-5/context_turn_01.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 2,
                  "text": "Um, this is so silly. I left my phone at home and I didn't mean to leave it on the charger. I meant to bring it with me. Yeah, I, so I need to get down to Balboa Park. Um, and I'm going down there to see my friend and I just really need some assistance. So do you think you could, um, I have pen and paper ready to go. If you wouldn't mind, I'm just going to take some notes so that I can get onto the highway and get down there. I usually know once I'm like down in the area, it's just hard from here to there.",
                  "emotion": null,
                  "startTimeMs": 1810.0,
                  "endTimeMs": 31770.0,
                  "audio": "assets/audio/auto-eval/is/10-ex01-ex02-fast-002-rating-5/context_turn_02.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 3,
                  "text": "Oh, that happens to the best of us.",
                  "emotion": null,
                  "startTimeMs": 8510.0,
                  "endTimeMs": 11120.0,
                  "audio": "assets/audio/auto-eval/is/10-ex01-ex02-fast-002-rating-5/context_turn_03.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 4,
                  "text": "Bumblebuck, what you doing down there?",
                  "emotion": null,
                  "startTimeMs": 14520.0,
                  "endTimeMs": 16160.0,
                  "audio": "assets/audio/auto-eval/is/10-ex01-ex02-fast-002-rating-5/context_turn_04.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 5,
                  "text": "Gotcha. All right. Also, if you have a camera, bring a camera as well because Balboa Park is absolutely gorgeous. Absolutely gorgeous.",
                  "emotion": null,
                  "startTimeMs": 32030.0,
                  "endTimeMs": 38020.0,
                  "audio": "assets/audio/auto-eval/is/10-ex01-ex02-fast-002-rating-5/context_turn_05.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 6,
                  "text": "I do have a small camera in the car. Thank you for mentioning that.",
                  "emotion": null,
                  "startTimeMs": 36880.0,
                  "endTimeMs": 40310.0,
                  "audio": "assets/audio/auto-eval/is/10-ex01-ex02-fast-002-rating-5/context_turn_06.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 7,
                  "text": "want to get stuck in that traffic for three hours that sucks um so weave and dodge and all that stuff because i assume your friend's waiting for you down there in balboa um yeah okay so once you once you're down there you're going to get off on uh 12th street and once you're on 12th street you're going to take that straight all the way down past the arch on your right hand side and then take a right on zoo entrance and we need to take a right on zoo entrance that's right next to the san diego zoo is balboa park um don't confuse the two",
                  "emotion": null,
                  "startTimeMs": 39220.0,
                  "endTimeMs": 100120.0,
                  "audio": "assets/audio/auto-eval/is/10-ex01-ex02-fast-002-rating-5/context_turn_07.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 8,
                  "text": "Yeah yeah yeah.",
                  "emotion": null,
                  "startTimeMs": 50170.0,
                  "endTimeMs": 50760.0,
                  "audio": "assets/audio/auto-eval/is/10-ex01-ex02-fast-002-rating-5/context_turn_08.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 9,
                  "text": "Is there another way around it in case there's a lot of traffic on the side?",
                  "emotion": null,
                  "startTimeMs": 99030.0,
                  "endTimeMs": 102360.0,
                  "audio": "assets/audio/auto-eval/is/10-ex01-ex02-fast-002-rating-5/context_turn_09.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 10,
                  "text": "Sorry about that, but it's a wonderful, wonderful experience.",
                  "emotion": null,
                  "startTimeMs": 102790.0,
                  "endTimeMs": 141320.0,
                  "audio": "assets/audio/auto-eval/is/10-ex01-ex02-fast-002-rating-5/context_turn_10.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 11,
                  "text": "Oh, thank you so much for giving me all of that. Okay, I've got everything written down. And do you have any recommendations for food in the area or the food trucks there?",
                  "emotion": null,
                  "startTimeMs": 141280.0,
                  "endTimeMs": 149090.0,
                  "audio": "assets/audio/auto-eval/is/10-ex01-ex02-fast-002-rating-5/context_turn_11.wav"
                },
                {
                  "speaker": "B",
                  "speakerId": "ex01",
                  "utteranceId": 12,
                  "text": "Yeah, there's going to be food trucks there. You want to go to this one called La Guardia.",
                  "emotion": null,
                  "startTimeMs": 149450.0,
                  "endTimeMs": 153310.0,
                  "audio": "assets/audio/auto-eval/is/10-ex01-ex02-fast-002-rating-5/context_turn_12.wav"
                },
                {
                  "speaker": "A",
                  "speakerId": "ex02",
                  "utteranceId": 13,
                  "text": "Okay.",
                  "emotion": null,
                  "startTimeMs": 153300.0,
                  "endTimeMs": 154100.0,
                  "audio": "assets/audio/auto-eval/is/10-ex01-ex02-fast-002-rating-5/context_turn_13.wav"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
