# Shorter pages, same understanding: what research says

Date: 2026-11-14. Question: how can an instructional text be made shorter and faster to read
without losing comprehension? This report builds on `docs/research/writing-rules-evidence.md`
(called "the earlier report" below). Where that report already covers a finding, I cite its
section and do not repeat it.

## How to read this report

- Marks and effect sizes work as in the earlier report. **[F]** I read the full text or the
  relevant pages; **[A]** I read the abstract from the publisher, ERIC, Crossref, OpenAlex or
  Europe PMC; **[S]** I saw it only through a search summary or a secondary source, so treat
  details with care; **[U]** unverified. A number appears only if I saw it in one of these.
- `d`, `g` and `r` measure how far apart two groups are. For `d` and `g`: 0.2 is small, 0.5
  medium, 0.8 large. `r = 0.17` is roughly `d = 0.35`.
- **Short-text warning.** Almost every experiment below used texts of 300–5,000 words, read in
  6–20 minutes, by Western university students, tested soon after. CEDTAN pages are Thai, read
  on a phone, 25–70 minutes long. I say where a finding is most likely to break on long pages.

## 0. What a CEDTAN page is made of now

I split the main path of seven CSY pages by the block each Thai character sits in. Method:
`mainPathText` and `thaiChars` from `scripts/prose.mjs`, then a small parser
(scratch script, not in the repo). Checks: each row sums to 100% within rounding; a separate
regex count of `<Why>`, `<Pitfall>` and `<Recap>` on lecture 10 gave the same shares (the 3-point
Recap gap is Quiz questions inside the Recap, which the parser counts as Quiz). The last column
is Thai text inside tag attributes, measured separately: `<Term th>` glosses alone are 2–5%.

| Page | Main path (min) | Plain prose | `<Why>` | `<Pitfall>` | `<Recap>` | `<Example>` | `<Analogy>` | Quiz questions | Other blocks | Tag attributes (glosses, titles, captions) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| lecture-3 | 30 | 43% | 13% | 10% | 8% | 6% | 2% | 3% | 10% | 6% |
| lecture-8 | 70 | 71% | 5% | 4% | 6% | 3% | 1% | 4% | 3% | 4% |
| lecture-9 | 56 | 54% | 6% | 6% | 9% | 4% | 2% | 4% | 8% | 7% |
| lecture-10 | 25 | 46% | 7% | 11% | 13% | 0% | 2% | 7% | 8% | 5% |
| lecture-11 | 45 | 45% | 12% | 8% | 7% | 5% | 3% | 4% | 7% | 10% |
| lecture-12 | 45 | 64% | 8% | 4% | 6% | 2% | 0% | 4% | 8% | 5% |
| lecture-13 | 57 | 59% | 10% | 5% | 7% | 4% | 0% | 5% | 3% | 7% |

"Other blocks" is `<KeyIdea>`, `<Compare>`, `<StepThrough>`, `<Figure>` and `<Callout>` together.

Two facts follow. First, CSY lectures 8–13 run **25 to 70** minutes on the main path, not 25–48:
lecture 8 is 70 and lecture 13 is 57 (both match the `readingMinutes` in their frontmatter).
Second, **plain prose is 45–71% of the main path** on lectures 8–13. Teaching blocks are small:
examples are 0–5%, analogies 0–3%. So the time is in plain prose, not in the teaching blocks.

The 450 characters-a-minute clock counts Thai characters only. Lecture 8's main path also holds
about 2,300 English words outside code and 108 code lines (same parser). That time is not in
`readingMinutes`; read at the English average of 238 words a minute (section 7), it would be
roughly 10 more minutes. This is an upper estimate, because a term inside a Thai sentence reads
faster than English prose.

## 1. Removing material: coherence, seductive details, redundancy

**Verdict: strong for cutting irrelevant material; weaker and less consistent than its
reputation; no evidence that cutting relevant explanation is free.**

- **Coherence.** Mayer's own experiments give a median `d = 0.70` for leaving out extraneous
  words, pictures and sounds (Mayer 2017) [A]. In three experiments, 163 students who read a
  short captioned summary did as well as or better than students who read the full lesson
  (Mayer et al. 1996) [A]. Adding interesting but irrelevant video or text lowered transfer
  (Mayer, Heiser & Lonn 2001) [A].
- **Seductive details** (interesting but irrelevant additions). Four experiments, 357
  undergraduates: fewer main ideas recalled and fewer transfer solutions (Harp & Mayer 1998)
  [A]. Readers spent less time on the main sentences when seductive details were present
  (Lehman et al. 2007) [A]. Meta-analyses: 39 effects, "small to medium" for retention and
  "medium" for transfer (Rey 2012) [A]; 58 studies, more than 7,500 students, a negative effect
  (Sundararajan & Adesope 2020) [A]. A 2026 multi-level meta-analysis of 50 studies and 177
  effect sizes found `g = −0.16`, small (Wu et al. 2026, conference paper) [A].
- **Redundancy.** Text that repeats a self-explanatory diagram hurts (earlier report 2.8, 2.19).
  It depends on the reader: line-by-line explanatory notes helped novices read Shakespeare and
  hurt experts (Oksa, Kalyuga & Chandler 2010) [A]; added causal words helped novice readers and
  not experienced ones (Kalyuga, Law & Lee 2013) [A].

**Where it fails.**
- The effect is fragile. A careful replication matched details for length and reading level and
  found no consistent harm (Tislar & Steelman 2021) [A]. Seductive details in graphs did not
  lower accuracy, but did **add time** (Strobel, Grund & Lindner 2019) [A]. So even when an
  extra costs no understanding, it costs minutes.
- Decorative "emotional design" (colour, faces) *helped* a little: retention `g = 0.35`,
  transfer `g = 0.27` (Wong & Adesope 2021) [A]. Appeal is not always waste.
- **Folding is not a cure.** Seductive details placed behind mouse-over links still hurt
  learning unless readers were told they were irrelevant (Bender et al. 2026, 165 students) [A].
  Putting details in boxes marked as a separate topic reduced the harm to transfer (Wesenberg et
  al. 2026, 195 students) [A]. The harm comes mostly from readers spending effort on the details
  (Kienitz, Krebs & Eitel 2023) [A].
- Most studies used sessions of 6–12 minutes (Sundararajan & Adesope, per the WSU press release)
  [S]. The effect is reported to be stronger under limited study time (Rey 2012, as cited by
  later papers) [S].

## 2. Summary against full text

**Verdict: strong for main points; the summary loses on everything it leaves out.**

Reder & Anderson (1980) [F, pages 1–4 and 12–14]: summaries were about one fifth of the
chapter (about 1,000 words against 4,300–4,900). Each sentence of the summary stood on its own
line. In Experiment 1, students studied each version for the same 20 minutes. For the students
retested up to a year later (their Table 8), proportion correct on true–false questions, summary
against text: 0.79 vs 0.69 at once, 0.68 vs 0.60 after a week, 0.60 vs 0.58 after 6–12 months
(the last gap was not significant; chance was 0.50). Summaries won on direct and inference questions and
in learning a new, related chapter, for good and weak readers alike.

Why the summary won: Reder & Anderson (1982) [F, page 1] separated two causes. Spaced
rereading of the main points, which a short text allows, and the absence of distracting details
**each** helped on their own.

**When the summary loses.**
- **Equal time is the trick.** With 20 minutes, the summary reader goes over the main points
  several times. The authors themselves say that outside the lab a student may read the summary
  only once, and then the full text could win [F].
- **Only main points were tested.** Every question could be answered from the summary [F]. The
  study says nothing about details, about persuading the reader, or about "the argument
  structure of the field", which the authors list as reasons details exist [F].
- **Skills differ from facts.** For learning to use a computer from a manual, added
  elaborations *helped*. Elaborations that showed command syntax helped novices and experienced
  users; elaborations that explained basic concepts gave no reliable gain (Reder, Charney &
  Morgan 1986) [F, page 1].
- **Causal context helps memory.** A sentence was recalled best when the text around it gave
  its cause or consequence (Bradshaw & Anderson 1982) [S]. A detail that explains *why* a main
  point holds is not the same as a detail that merely decorates it.

## 3. The counter-evidence: when longer and more explicit helps

**Verdict: strong for low-knowledge readers and difficult texts. This sets the floor.**

- Repairing the places where a reader must infer an unstated link improved learning from a
  1,000-word text, for 170 undergraduates and 125 Air Force recruits (Britton & Gülgöz 1991)
  [A]. Revised fifth-grade texts that filled gaps were recalled better (Beck et al. 1991) [A].
- Adding the causal links helped both strong and weak undergraduate readers, **but only for the
  difficult text** (Linderholm et al. 2000) [A].
- High cohesion helps low-knowledge readers (McNamara et al. 1996; Ozuru et al. 2009; earlier
  report 2.9). The "reverse cohesion" benefit for knowledgeable readers appeared only for
  less-skilled high-knowledge readers; skilled high-knowledge readers also did better with the
  cohesive text (O'Reilly & McNamara 2007, 143 students) [A]. A revision that prompted readers to
  make inferences helped both low- and high-knowledge readers (Gilabert, Martínez & Vidal-Abarca
  2005) [A].
- **Connectives:** across 20 authentic texts and 794 readers, causal and contrastive connectives
  ("because", "but") raised comprehension, mostly in difficult texts; additive ones ("and",
  "also") lowered it (Kleijn, Pander Maat & Sanders 2019) [A].
- Novices gain more from support than experts lose (Tetzlaff et al. 2025; earlier report 2.9).

**Reading.** Length that fills an inference gap pays; length that adds a parallel fact does
not. Security mechanisms (a handshake, an attack chain) are difficult texts for the night-before
reader, which is where the gains above were found.

## 4. Elaboration and examples

**Verdict: examples pay for their length better than any other elaboration; explanation of
concepts the reader already has does not.**

- **Examples against more definition study:** students who studied examples after the
  definitions classified new cases far better than students who studied the definitions again
  instead, `d = 0.74` to `1.67` (Rawson, Thomas & Jacoby 2015) [A]. This is the closest evidence
  that an example is worth its reading time; the abstract does not say whether study time was
  exactly equal.
- Worked examples took **less time** to study than solving problems and led to faster, more
  accurate solving of similar problems, but transfer was limited to problems of the same
  structure (Sweller & Cooper 1985) [A]. Mathematics meta-analysis `g = 0.48` (earlier report
  2.4).
- **Expertise reversal:** worked examples helped beginners; as trainees gained experience,
  problem solving became better than studying examples (Kalyuga et al. 2001) [A].
- **How many.** Comparing two cases beats one, `d = 0.50` over 57 experiments (Alfieri et al.
  2013) [A]. Verbal summaries and diagrams of the principle did not help transfer from one
  story, but did from two (Gick & Holyoak 1983) [S]. Provided examples were as good as
  examples students completed or generated, and took less time (Zamary & Rawson 2018) [A].
- **Concept explanations** were the elaboration that did not pay in procedural learning (Reder
  et al. 1986, section 2).

## 5. Layering: folding, signaling, headings, and how people read

**Verdict: signaling is moderate and reliable; folding has almost no learning evidence; readers
skip a lot, and skimming keeps main ideas but loses detail and inference.**

- **Signaling meta-analyses.** `d = 0.38`, 29 studies, 2,726 participants (Alpizar, Adesope &
  Wong 2020) [A]. Text–picture signals `r = 0.17`, mainly for low-prior-knowledge learners
  (Richter, Scheiter & Eitel 2016) [A]; in a field study with 8th graders using a digital textbook, the
  same kind of signals *hurt* high-knowledge learners (Richter et al. 2018) [A]. Retention `g = 0.53`, transfer
  `g = 0.33` (Schneider et al. 2018) [S].
- **Highlighting the key material for the reader** improved memory and comprehension, both
  `g = 0.44`, over 36 articles (Ponce, Mayer & Méndez 2022) [A].
- **Headings.** With topic headings, readers processed topic sentences faster and named more
  topics in their summaries (Hyönä & Lorch 2004) [A]. Readers who looked back to headings and
  summaries wrote the best summaries, 83% correct, against 66% for slow linear readers (Hyönä,
  Lorch & Kaakinen 2002) [A; numbers as reported by Brysbaert 2019, F].
- **Skimming.** With time to read only half of a text, skimming beat reading the first half
  for important ideas, but not for details or inferences. Skimmers spent their time early in
  paragraphs and high on the page (Duggan & Payne 2009) [A].
- **How much of a page is seen.** Web users read about 20–28% of a page's words (earlier report
  2.7). In 2018 eye tracking (120 users), 57% of viewing time was in the first screen, 74% in the
  first two, and users "rarely go beyond the third screenful" (Fessenden 2018) [F]. This is
  browsing, not studying for an exam.
- **Folding.** No learning experiment tests collapsible sections. Usability advice: hiding
  content "diminishes people's awareness of it" (Loranger 2014) [F]. In hypertext, link
  decisions add load, worst for low-knowledge readers (DeStefano & LeFevre 2007) [S]. The one
  close test, Bender et al. 2026 (section 1), says a fold protects the reader only when its label
  says the content is not needed.

## 6. Format swaps: table, list, diagram

**Verdict: a matrix or diagram carries relations faster than prose, moderate evidence; most
studies add the display to the text rather than replace it.**

- Larkin & Simon (1987) [A]: a diagram can hold the same information as sentences but place what
  an inference needs at one location, so the reader computes less and searches less.
- A matrix let students judge relations between concepts faster and more accurately than an
  outline or text (Robinson & Schraw 1994) [A], but the advantage **disappeared on a delayed
  test** [S]. Given enough time, graphic organizers beat outlines and text for relations and
  integrated essays (Robinson & Kiewra 1995, 153 students) [A].
- Graphic organizers provided by the instructor: memory `g = 0.70`, comprehension `g = 0.53`
  (Ponce, Mayer & Méndez 2025) [A]. Outlines provided with the text: memory `g = 0.61`,
  comprehension `g = 0.34` (Ponce et al. 2023) [S]. Studying a concept map `g = 0.43`
  (Schroeder et al. 2018) [A]. Mayer's multimedia principle (words plus graphics against words
  alone) has a median `d = 1.67`, but over only five comparisons (Mayer 2017) [A].
- **When the swap costs:** I found no experiment comparing bullet lists with prose. The nearest
  evidence: causal and contrastive connectives carry comprehension in difficult texts (Kleijn et
  al. 2019) [A], and a list drops them. Signals that help novices can hurt experts (section 5).

**Reading.** Use a table when the content is several items compared on the same attributes
(attack, target, defence). Keep prose when the content is a chain of causes. Most of the
evidence is for a display *added* to text; a display that *replaces* prose is untested.

## 7. Reading rate

**Verdict: strong that speed reading costs comprehension; no adult silent-reading norm for Thai
expository text exists that I could find.**

- Speed reading: readers cannot double or triple their speed (from about 250 to 500–750 words a
  minute) and keep comprehension; skimming gives "moderate comprehension"; the lasting way to
  read faster is better language skill and vocabulary (Rayner et al. 2016) [A].
- English adult silent reading: 238 words a minute for non-fiction, most adults 175–300 (190
  studies, 18,573 participants; Brysbaert 2019) [F].
- **Reading to learn is slower.** Brysbaert reviews study reading [F]: 54 words a minute against
  189 for normal reading of matched texts (Dirix et al. 2019); 150 (Ackerman & Goldsmith 2011);
  171 for biology textbook passages (Singer Trakhman et al. 2018). Carver's "learning gear" is
  200 and his "memorizing gear" 138 (Carver 1992, via Brysbaert) [U for the original]. Study
  reading is slow because readers look back to link parts, not because each word is read more
  slowly (Brysbaert 2019) [F].
- **Thai.** The only adult Thai rate I found: 134 standard words a minute **read aloud as fast
  as possible**, on 60-character sentences built from primary-school words, 20 adults
  (Leeungurasatien et al. 2024) [F]. The paper's formula counts each 60-character sentence as 10
  words, so this is about 800 characters a minute. In a study of eight languages, Thai silent and
  oral reading rates were very similar (10 Thai readers, no comprehension check; Coupé et al.
  2014) [F]. Word spacing: see the earlier report 2.10.
- **CEDTAN's 450.** 450 Thai characters a minute is about 56% of that fast, easy, aloud rate.
  English study reading runs at roughly 30–70% of normal reading (figures above). So 450 is
  plausible for studying technical Thai text, but it is not validated, and it ignores English
  terms and code (section 0).

## 8. Segmenting and length

**Verdict: moderate for breaking material into learner-paced parts; no evidence for an ideal
total length; moderate evidence that attention falls over a long session.**

- Segmenting: small-to-medium gains, 56 studies (Rey et al. 2019) [A]; Mayer's median `d = 0.70`
  (Mayer 2017) [A]. Surprisingly, high-prior-knowledge learners gained more from segmenting
  on retention (Rey et al. 2019) [A]. Most of these are system-paced animations, not self-paced text.
- **Section length on screen:** undergraduates reading one sentence per screen mind-wandered
  unintentionally less than those reading 2–6 sentences per screen (Forrin et al. 2021, 80
  students) [A]. The abstract does not report a comprehension difference.
- **Time on task:** in a video lecture, mind wandering rose and memory fell as the lecture went
  on (Risko et al. 2012) [A]. Conversational style lost its effect in studies over 35 minutes
  (Ginns et al. 2013; earlier report 3.1).
- Online video: median engagement was at most 6 minutes, whatever the video's length (Guo, Kim &
  Rubin 2014, 6.9 million sessions) [F]. Video is watched, not read, so this transfers loosely.
- The "attention drops after 10–15 minutes" claim has little support (Wilson & Korn 2007) [A].
  So there is no evidence for a magic number, including CEDTAN's 40 minutes.

## 9. Repetition

**Verdict: strong that retrieval beats restating; moderate that spaced restating helps;
immediate rereading of a whole text helps little.**

- Rereading a textbook chapter right away rarely improved test scores (Callender & McDaniel
  2009, four experiments) [A]. Massed rereading helped on an immediate test only; rereading a
  week later helped on a test two days later (Rawson & Kintsch 2005, 423 students) [A].
- Spaced review of main points helped independently of cutting details (Reder & Anderson 1982)
  [F, page 1].
- Retrieval: classroom quizzing `g ≈ 0.5`; explained feedback beats right/wrong (earlier report
  2.16). Review quizzes before a unit exam produced the largest gains (McDaniel et al. 2011)
  [A].
- **Reading.** A restatement is worth its length when it is (a) a question the reader must
  answer, (b) a short summary of main points read at another time, or (c) a signal that marks
  what matters. A paraphrase in the next paragraph is none of these.

## What this means for CEDTAN pages

### Ranked moves

Ranked by expected minutes saved times confidence that understanding holds. "Pool" is the
measured share of the main path the move acts on (section 0). The fraction of the pool that can
be cut is **not measured**; measure it with `pnpm narration` before and after a pilot on one
part of lecture 8.

1. **Cut restatement and additive sentences in plain prose; keep causal links.**
   Pool: 45–71% of the main path on lectures 8–13. Expected gain: the largest of any move; the
   size is unknown until piloted. Risk: cutting a sentence that bridges an inference, which
   hurts exactly this reader (section 3). Test for each sentence: does it state a cause, a
   contrast, a condition, or a step the reader cannot infer? Keep it. Does it say again, or add
   a parallel fact that no question needs? Cut or fold it. Evidence: coherence and summaries
   (sections 1–2); connectives and gap repair (section 3).
2. **Fold non-exam detail, with a label that says it is not needed for the main thread.**
   Pool: the parts of item 1 that are true but not tested. Gain: the fold's whole length leaves
   the main path. Risk: folded text is seen less; a fold labelled only by topic still pulls
   attention (Bender et al. 2026; Wesenberg et al. 2026). Never fold what the Recap or a Quiz
   tests.
3. **When something must go, cut concept explanation before examples.** Pool: examples are only
   0–5% of the main path, so this protects them more than it saves. Gain: understanding per
   minute. Risk: low. Evidence: Rawson et al. 2015 (examples in place of more definition study); Reder et al. 1986.
4. **Turn comparisons into tables.** Where prose compares three or more items on the same
   attributes, a table removes the repeated sentence frame. Gain: moderate, local. Risk: a
   table drops "because"; keep a causal sentence under it. Evidence: section 6.
5. **Mark the deciding words in each paragraph.** Bold the term or claim the paragraph exists
   for. Gain: no characters saved, but a skimming reader keeps the main ideas (Duggan & Payne
   2009) and highlighting helps on its own (`g = 0.44`, Ponce et al. 2022). Risk: bolding
   everything signals nothing. Evidence: section 5.
6. **Shorten `<Why>` to the concrete case.** Pool: 5–12%. Gain: small. Risk: low; the evidence
   for `<Why>` is about curiosity from a gap (earlier report 2.2), which one short case
   creates. Evidence for an ideal length: none.
7. **Split a page over about 40 minutes at a `##` boundary.** Gain: no total time saved, but each
   session is shorter and the second is spaced from the first (sections 8–9). Risk: links
   across the split; the 40 is a house number, not research.
8. **Swap restatement for retrieval.** Where a `<KeyIdea>` only paraphrases the paragraph above,
   a `<Quiz>` does more for the same length. Keep the Recap. Evidence: section 9.

**Do not:** offer speed-reading tools or advise faster reading (section 7); cut examples to save
time (section 4); replace causal prose with bullet lists (section 6).

### The floor: what must never be cut

- **Causal and contrastive links** in a mechanism (`เพราะ`, `จึง`, `แต่`). They carry
  comprehension in difficult text (Kleijn et al. 2019; Linderholm et al. 2000).
- **The step the reader cannot infer.** Every gap a novice would have to fill alone (Britton &
  Gülgöz 1991; McNamara et al. 1996).
- **Background a novice lacks**, said once or linked (Tetzlaff et al. 2025).
- **One concrete example per tested concept** (Rawson et al. 2015).
- **Anything the exam tests stays on the main path.** Folds are read less (section 5).
- **The Recap and the Quiz answers' reasoning** (sections 2 and 9).

## Gaps

- No study of folding (`<Detail>`) and learning, except the hyperlink study above.
- No Thai norm for silent reading of expository or technical text, and none for Thai mixed with
  English terms.
- No experiment comparing bullet lists with equivalent prose.
- No evidence for an ideal page length; nothing tested on 40–70 minute self-paced texts.
- Summary studies test main points only; none tests a summary written for a later exam that
  also asks for details.

## References

Marks as defined above. ERIC records are at `https://eric.ed.gov/?id=<ERIC number>`.

- Alfieri, L., Nokes-Malach, T. J., & Schunn, C. D. (2013). Learning through case comparisons: A meta-analytic review. *Educational Psychologist*. ERIC EJ1000186. [A]
- Alpizar, D., Adesope, O. O., & Wong, R. M. (2020). A meta-analysis of signaling principle in multimedia learning environments. *Educational Technology Research and Development*. ERIC EJ1269127. [A]
- Beck, I. L., et al. (1991). Revising social studies text from a text-processing perspective. *Reading Research Quarterly*. ERIC EJ431057. [A]
- Bender, L., Renkl, A., Scheiter, K., & Richter, J. (2026). Seductive details behind hyperlinks—Harmful or helpful for learning? *Journal of Computer Assisted Learning*. ERIC EJ1500542. [A]
- Bradshaw, G. L., & Anderson, J. R. (1982). Elaborative encoding as an explanation of levels of processing. *Journal of Verbal Learning and Verbal Behavior*, 21, 165–174. https://doi.org/10.1016/S0022-5371(82)90531-X [S]
- Britton, B. K., & Gülgöz, S. (1991). Using Kintsch's computational model to improve instructional text. *Journal of Educational Psychology*, 83(3), 329. https://doi.org/10.1037/0022-0663.83.3.329 [A]
- Brysbaert, M. (2019). How many words do we read per minute? A review and meta-analysis of reading rate. *Journal of Memory and Language*, 109. https://doi.org/10.1016/j.jml.2019.104047 [F, preprint https://doi.org/10.31234/osf.io/xynwg]
- Callender, A. A., & McDaniel, M. A. (2009). The limited benefits of rereading educational texts. *Contemporary Educational Psychology*. ERIC EJ819481. [A]
- Coupé, C., Oh, Y. M., Pellegrino, F., & Marsico, E. (2014). Cross-linguistic investigations of oral and silent reading. *Interspeech 2014*. https://yoonmioh.github.io/files/Interspeech2014_paper.pdf [F]
- DeStefano, D., & LeFevre, J.-A. (2007). Cognitive load in hypertext reading: A review. *Computers in Human Behavior*, 23(3), 1616–1641. [S]
- Duggan, G. B., & Payne, S. J. (2009). Text skimming: The process and effectiveness of foraging through text under time pressure. *Journal of Experimental Psychology: Applied*. https://doi.org/10.1037/a0016995 [A]
- Fessenden, T. (2018). Scrolling and attention. Nielsen Norman Group. https://www.nngroup.com/articles/scrolling-and-attention/ [F]
- Forrin, N. D., Mills, C., D'Mello, S. K., & Risko, E. F. (2021). TL;DR: Longer sections of text increase rates of unintentional mind-wandering. *Journal of Experimental Education*. https://doi.org/10.1080/00220973.2020.1751578 [A]
- Gick, M. L., & Holyoak, K. J. (1983). Schema induction and analogical transfer. *Cognitive Psychology*, 15. https://doi.org/10.1016/0010-0285(83)90002-6 [S]
- Gilabert, R., Martínez, G., & Vidal-Abarca, E. (2005). Some good texts are always better. *Learning and Instruction*. ERIC EJ697825. [A]
- Guo, P. J., Kim, J., & Rubin, R. (2014). How video production affects student engagement. *Proceedings of Learning @ Scale 2014*. https://doi.org/10.1145/2556325.2566239 [F]
- Harp, S. F., & Mayer, R. E. (1998). How seductive details do their damage. *Journal of Educational Psychology*. ERIC EJ576496. [A]
- Hyönä, J., & Lorch, R. F. (2004). Effects of topic headings on text processing. *Learning and Instruction*. ERIC EJ731658. [A]
- Hyönä, J., Lorch, R. F., & Kaakinen, J. K. (2002). Individual differences in reading to summarize expository text. *Journal of Educational Psychology*. ERIC EJ644663. [A]
- Kalyuga, S., Chandler, P., Tuovinen, J., & Sweller, J. (2001). When problem solving is superior to studying worked examples. *Journal of Educational Psychology*. ERIC EJ640537. [A]
- Kalyuga, S., Law, Y. K., & Lee, C. H. (2013). Expertise reversal effect in reading Chinese texts with added causal words. *Instructional Science*. ERIC EJ999865. [A]
- Kienitz, A., Krebs, M.-C., & Eitel, A. (2023). Seductive details hamper learning even when they do not disrupt. *Instructional Science*. https://doi.org/10.1007/s11251-023-09632-w; ERIC EJ1385436. [A]
- Kleijn, S., Pander Maat, H. L. W., & Sanders, T. J. M. (2019). Comprehension effects of connectives across texts, readers, and coherence relations. *Discourse Processes*. https://doi.org/10.1080/0163853X.2019.1605257 [A]
- Larkin, J. H., & Simon, H. A. (1987). Why a diagram is (sometimes) worth ten thousand words. *Cognitive Science*. https://doi.org/10.1111/j.1551-6708.1987.tb00863.x [A]
- Leeungurasatien, T., et al. (2024). Development and validation of the Thai version of MNREAD acuity charts. *Indian Journal of Ophthalmology*, 72(11), 1653–1657. https://doi.org/10.4103/ijo.ijo_47_24 [F, PMC11668221]
- Lehman, S., Schraw, G., McCrudden, M. T., & Hartley, K. (2007). Processing and recall of seductive details in scientific text. *Contemporary Educational Psychology*. ERIC EJ776914. [A]
- Linderholm, T., Everson, M. G., van den Broek, P., Mischinski, M., et al. (2000). Effects of causal text revisions on more- and less-skilled readers' comprehension of easy and difficult texts. *Cognition and Instruction*. ERIC EJ626918. [A]
- Loranger, H. (2014). Accordions for complex website content on desktops. Nielsen Norman Group. https://www.nngroup.com/articles/accordions-complex-content/ [F]
- Mayer, R. E. (2017). Using multimedia for e-learning. *Journal of Computer Assisted Learning*. ERIC EJ1153516. [A]
- Mayer, R. E., et al. (1996). When less is more. *Journal of Educational Psychology*. ERIC EJ526858. [A]
- Mayer, R. E., Heiser, J., & Lonn, S. (2001). Cognitive constraints on multimedia learning: When presenting more material results in less understanding. *Journal of Educational Psychology*. ERIC EJ638735. [A]
- McDaniel, M. A., Agarwal, P. K., Huelser, B. J., & McDermott, K. B. (2011). Test-enhanced learning in a middle school science classroom. *Journal of Educational Psychology*. ERIC EJ934340. [A]
- Oksa, A., Kalyuga, S., & Chandler, P. (2010). Expertise reversal effect in using explanatory notes for readers of Shakespearean text. *Instructional Science*. ERIC EJ880290. [A]
- O'Reilly, T., & McNamara, D. S. (2007). Reversing the reverse cohesion effect. *Discourse Processes*. ERIC EJ772185. [A]
- Ponce, H. R., Mayer, R. E., & Méndez, E. E. (2022). Effects of learner-generated highlighting and instructor-provided highlighting on learning from text: A meta-analysis. *Educational Psychology Review*. https://doi.org/10.1007/s10648-021-09654-1; ERIC EJ1334669. [A]
- Ponce, H. R., Mayer, R. E., & Méndez, E. E. (2023). Effects of learner-generated outlining and instructor-provided outlining on learning from text: A meta-analysis. *Educational Research Review*, 39. https://doi.org/10.1016/j.edurev.2023.100538 [S]
- Ponce, H. R., Mayer, R. E., & Méndez, E. E. (2025). Learner-generated and instructor-provided graphic organizers as aids to learning from text: A meta-analysis. *Educational Psychology Review*. https://doi.org/10.1007/s10648-025-10084-6; ERIC EJ1496202. [A]
- Rawson, K. A., & Kintsch, W. (2005). Rereading effects depend on time of test. *Journal of Educational Psychology*. ERIC EJ688037. [A]
- Rawson, K. A., Thomas, R. C., & Jacoby, L. L. (2015). The power of examples. *Educational Psychology Review*. https://doi.org/10.1007/s10648-014-9273-3; ERIC EJ1071985. [A]
- Rayner, K., Schotter, E. R., Masson, M. E. J., Potter, M. C., & Treiman, R. (2016). So much to read, so little time: How do we read, and can speed reading help? *Psychological Science in the Public Interest*. https://doi.org/10.1177/1529100615623267 [A]
- Reder, L. M., & Anderson, J. R. (1980). A comparison of texts and their summaries: Memorial consequences. *Journal of Verbal Learning and Verbal Behavior*, 19, 121–134. https://doi.org/10.1016/S0022-5371(80)90122-X [F, pages 121–124 and 132–134; scan at https://www.andrew.cmu.edu/user/reder/publications/80_lmr_jra.pdf]
- Reder, L. M., & Anderson, J. R. (1982). Effects of spacing and embellishment on memory for the main points of a text. *Memory & Cognition*, 10(2), 97–102. https://doi.org/10.3758/BF03209210 [F, page 97]
- Reder, L. M., Charney, D. H., & Morgan, K. I. (1986). The role of elaborations in learning a skill from an instructional text. *Memory & Cognition*, 14(1), 64–78. https://doi.org/10.3758/BF03209230 [F, page 64]
- Rey, G. D. (2012). A review of research and a meta-analysis of the seductive detail effect. *Educational Research Review*. https://doi.org/10.1016/j.edurev.2012.05.003; ERIC EJ986386. [A; the study-time moderator S]
- Rey, G. D., Beege, M., Nebel, S., Wirzberger, M., et al. (2019). A meta-analysis of the segmenting effect. *Educational Psychology Review*. https://doi.org/10.1007/s10648-018-9456-4; ERIC EJ1217373. [A]
- Richter, J., Scheiter, K., & Eitel, A. (2016). Signaling text–picture relations in multimedia learning: A comprehensive meta-analysis. *Educational Research Review*, 17, 19–36. https://doi.org/10.1016/j.edurev.2015.12.003 [A, via the authors' PsychArchives record]
- Richter, J., Scheiter, K., & Eitel, A. (2018). Signaling text–picture relations in multimedia learning: The influence of prior knowledge. *Journal of Educational Psychology*. https://doi.org/10.1037/edu0000220 [A]
- Risko, E. F., Anderson, N., Sarwal, A., Engelhardt, M., & Kingstone, A. (2012). Everyday attention: Variation in mind wandering and memory in a lecture. *Applied Cognitive Psychology*. https://doi.org/10.1002/acp.1814 [A]
- Robinson, D. H., & Kiewra, K. A. (1995). Visual argument: Graphic organizers are superior to outlines in improving learning from text. *Journal of Educational Psychology*, 87(3), 455. https://doi.org/10.1037/0022-0663.87.3.455 [A]
- Robinson, D. H., & Schraw, G. (1994). Computational efficiency through visual argument. *Contemporary Educational Psychology*. https://doi.org/10.1006/ceps.1994.1029; ERIC EJ498458. [A; the delayed-test result S]
- Schneider, S., Beege, M., Nebel, S., & Rey, G. D. (2018). A meta-analysis of how signaling affects learning with media. *Educational Research Review*, 23, 1–24. https://doi.org/10.1016/j.edurev.2017.11.001 [S]
- Schroeder, N. L., Nesbit, J. C., Anguiano, C. J., & Adesope, O. O. (2018). Studying and constructing concept maps: A meta-analysis. *Educational Psychology Review*. ERIC EJ1179084. [A]
- Strobel, B., Grund, S., & Lindner, M. A. (2019). Do seductive details do their damage in the context of graph comprehension? *Applied Cognitive Psychology*. ERIC EJ1263867. [A]
- Sundararajan, N., & Adesope, O. (2020). Keep it coherent: A meta-analysis of the seductive details effect. *Educational Psychology Review*. https://doi.org/10.1007/s10648-020-09522-4; ERIC EJ1263249. [A; study count and session length from the WSU press release, https://news.wsu.edu/2020/03/19/seductive-details-inhibit-learning/, S]
- Sweller, J., & Cooper, G. A. (1985). The use of worked examples as a substitute for problem solving in learning algebra. *Cognition and Instruction*, 2(1). https://doi.org/10.1207/s1532690xci0201_3 [A]
- Tislar, K. L., & Steelman, K. S. (2021). Inconsistent seduction: Addressing confounds and methodological issues in the study of the seductive detail effect. *Brain and Behavior*. https://doi.org/10.1002/brb3.2322 [A]
- Wesenberg, L., Krieglstein, F., Jansen, S., & Schneider, S. (2026). Mitigating the seductive details effect by topic and irrelevance signals. *British Journal of Educational Psychology*. ERIC EJ1496096. [A]
- Wilson, K., & Korn, J. H. (2007). Attention during lectures: Beyond ten minutes. *Teaching of Psychology*. https://doi.org/10.1177/009862830703400202; ERIC EJ772424. [A]
- Wong, R. M., & Adesope, O. O. (2021). Meta-analysis of emotional designs in multimedia learning: A replication and extension study. *Educational Psychology Review*. ERIC EJ1295978. [A]
- Wu, Y., Wang, R., Cheng, C., & Wang, Z. (2026). Seductive details, cognitive load, and academic achievements: A multi-level meta-analysis and MASEM. AERA 2026 Annual Meeting paper. https://convention2.allacademic.com/one/aera/aera26/online_program_direct_link/view_paper/2273554/ [A, program summary]
- Zamary, A., & Rawson, K. A. (2018). Are provided examples or faded examples more effective for declarative concept learning? *Educational Psychology Review*. https://doi.org/10.1007/s10648-018-9433-y; ERIC EJ1186651. [A]

Cited through the earlier report, where its marks and DOIs are listed: Chandler & Sweller
1991; Ginns, Martin & Marsh 2013; McNamara et al. 1996; Ozuru, Dempsey & McNamara 2009;
Tetzlaff et al. 2025.
