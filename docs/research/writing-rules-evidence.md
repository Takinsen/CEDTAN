# What research says about CEDTAN's writing rules

Date: 2026-11-13. Scope: the reading rules in `AGENTS.md` ("Quality bar", "Teaching blocks",
"Write about the subject", the reading rules in "Page mechanics"), `CONTEXT.md`, ADR 0001,
ADR 0004, and "Figure and prose" in `docs/agents/figures.md`.

## How to read this report

- **Verdict** says how well research supports the rule as written. **Strong**: several
  meta-analyses or a large, consistent body of experiments test this thing or something very
  close to it. **Moderate**: one meta-analysis, or several experiments, or strong evidence about
  a closely related thing. **Weak**: a few small studies, case studies, or evidence about
  something only loosely related. **None found**: I found no study that tests it.
  **Contradicts**: the evidence points the other way.
- **Adjacent** means the research tests something near the rule, not the rule itself. Most
  rules here are adjacent: almost no study tests "a Thai lecture summary read on a phone".
- **Effect sizes.** `d` and `g` measure how far apart two groups are, in standard deviations.
  As a rough guide, 0.2 is small, 0.5 is medium, 0.8 is large. In education, 0.4 is already
  a useful effect.
- **Who was tested.** Unless I say otherwise, the studies are lab experiments with university
  students, reading on paper or a desktop screen, tested soon after reading. Lab effects are
  usually larger than classroom effects.
- **What I checked.** Each source in the reference list carries a mark: **[F]** I read the full
  text or the relevant part of it; **[A]** I read the abstract from the publisher, ERIC, Crossref
  or Europe PMC; **[S]** I saw the abstract only through a search-engine summary, so treat its
  details with care; **[U]** unverified. I give a number only when I saw it in the paper,
  its abstract, or its official record.

## 1. Summary table

| # | Rule | Verdict | One-line reason | Key source |
| --- | --- | --- | --- | --- |
| 1 | Cover everything | **Contradicts, in part** | Shorter texts that keep only main points are remembered better than full texts; covering every *topic* is fine, covering every *detail* is not | Reder & Anderson 1980; Mayer 2017 (coherence) |
| 2 | Reason (problem) before definition | **Moderate, adjacent** | Curiosity, prequestions and problem-first designs help; but "problem first" research means the student *tries* the problem, which a `<Why>` box does not ask | Sinha & Kapur 2021; Pan & Carpenter 2023 |
| 3 | Name a term when its problem arrives, not in a list up front | **Moderate** | Pre-training helps, but it teaches each part's *job*, not a bare list of names. The rule's own last sentence already does this | Mayer, Mathias & Wetzell 2002 |
| 4 | One concrete example per abstract idea | **Strong** for "an example"; **weak** for "only one" | Examples raise concept learning a lot; several varied examples, compared, transfer better than one | Rawson et al. 2015; Alfieri et al. 2013 |
| 5 | Slide examples first; add one only if it shows what prose cannot | **Weak, adjacent** | Seductive-detail research supports leaving out interesting but non-essential material; it says nothing against relevant examples | Sundararajan & Adesope 2020 |
| 6 | One running example | **None found**; adjacent evidence mixed | No study tests it; variability research warns that one surface can stick to the idea | Paas & van Merriënboer 1994 |
| 7 | Quote the deciding lines, fold the rest | **Moderate, adjacent** | Signaling and coherence are among the best-supported design principles; readers read about 20–28% of a web page | Noetel et al. 2022; NN/g 2008 |
| 8 | Say it once; repeat only in KeyIdea, Recap, Quiz | **Moderate** | Redundant explanation hurts; repeats that make the reader *retrieve* help most, plain restating helps least | Chandler & Sweller 1991; Dunlosky et al. 2013 |
| 9 | Assume no background | **Strong** (for novices) | Low-knowledge learners gain much from extra support; experts lose a little, less than novices gain | Tetzlaff et al. 2025 |
| 10 | Thai prose, English terms, gloss on first use, no coined Thai | **Moderate** for Thai prose; **weak** for the term policy | Learning content in a foreign language costs content learning; no study tests mixed Thai–English terms in writing | Lo & Lo 2014; Roussel et al. 2017 |
| 11 | One point per paragraph, 1–3 sentences | **Weak** | No study of paragraph length found; short paragraphs can lose the connectives low-knowledge readers need | McNamara et al. 1996; NN/g 2017 |
| 12 | Own the order | **Moderate, adjacent** | Clear, signaled organization helps outlines and search; no study compares teaching order with source order | Lorch, Lemarié & Grant 2011 |
| 13 | End with a Recap | **Moderate** | Summaries are remembered well; an overview at the *start* also helps a little; a Recap phrased as questions would help more | Reder & Anderson 1980; Luiten et al. 1980 |
| 14 | Analogy: map, then state its limit | **Moderate** for mapping; **weak** for stating the limit | Analogies need explicit mapping; the advice to name where they break comes from case studies, not experiments | Harrison & Treagust 1993; Richland & Simms 2015 |
| 15 | Pitfall as a 4-move refutation | **Strong** (3 of the 4 moves) | Refutation text beats plain exposition, g = 0.41; move 3 ("why it looks right") has not been tested on its own | Schroeder & Kucera 2022 |
| 16 | Quiz: new case, right after its section, answer with reasoning and the likely wrong answer | **Strong** | Quizzing gives g ≈ 0.5 in classrooms; explained feedback beats right/wrong; placement after a section works as well as at the end | Yang et al. 2021; Van der Kleij et al. 2015 |
| 17 | Predict before a surprising result | **Moderate** | Making a prediction first creates surprise and better learning in adults; children need good self-control to benefit | Brod et al. 2018 |
| 18 | No narration about the source deck | **None found**; reasonable by the coherence principle | No study; words that carry no content cost attention. Signposting about the page's own structure may help | Mayer 2017; Camiciottoli 2003 |
| 19 | A figure with real values is the example; prose doesn't retell it | **Moderate** | Text that repeats a self-explanatory diagram hurts learning | Chandler & Sweller 1991 |
| 20 | Added example: at most 15 lines and 3 sentences visible | **None found** | The numbers are a house rule; the direction (keep added material short) fits the coherence evidence | — |
| 21 | Headings name what is taught | **Moderate** | Headings help recall and search; readers scan the first words of headings | Hartley & Trueman 1985; NN/g 2017 |

## 2. The rules, one by one

### 2.1 Cover everything

**What supports it.** Nothing tests "cover every topic". The reason for the rule is outside
research: the exam draws on the deck.

**Evidence against or limits.** Reder & Anderson (1980) gave college students either textbook
chapters or summaries of their main points. Summaries won at 20 minutes, one week and 6–12
months, on both direct and inference questions, and even when main points in the full text were
underlined [F, page 1]. Mayer et al. (1996) found that 163 college students who read short
captioned summaries recalled and transferred as well as or better than those who read the full
text [A]. The coherence principle (cut material that does not serve the goal) has a median
d = 0.70 in Mayer's own experiments (Mayer 2017) [A], and is one of the principles with
"robust evidence" in the largest overview, 29 meta-analyses, 78,177 participants (Noetel et al.
2022) [A].

**Reading.** The rule is safe for topics and risky for details. A minor topic needs enough to
carry its meaning, and no more. The current wording, "with enough left of each to carry its
meaning", already points this way.

### 2.2 Reason before definition (`<Why>` first)

**What supports it.**
- Curiosity: Loewenstein's information-gap account says curiosity comes from a felt gap in
  knowledge (Loewenstein 1994) [A]. In Gruber et al. (2014), trivia answers people were curious
  about were recalled 70.6% vs 54.1% right away and 45.9% vs 28.1% a day later (about 18–27
  adults, lab) [F]. Kang et al. found curiosity predicts memory for surprising answers 10 days
  later [A, working-paper version].
- Prequestions: asking a question before teaching its answer usually helps, if the answer comes
  afterwards (Pan & Carpenter 2023, review) [A].
- Problem first, then instruction: a meta-analysis of 53 studies found g = 0.36 (95% CI
  0.20–0.51) for problem solving before instruction, over instruction first (Sinha & Kapur
  2021) [A]. It works mainly when the instruction builds on the students' attempts or uses
  contrasting cases (Loibl, Roll & Rummel 2017) [A].
- Context first: a passage is hard to understand until you know what it is about (Bransford &
  Johnson 1972) [S].
- Case before the general rule: in case comparisons, giving the principle *after* the cases
  worked better (Alfieri et al. 2013) [A]. This fits the rule's "let the general statement follow".

**Evidence against or limits.**
- Sinha & Kapur report the reverse (instruction first better) for grades 2–5 and for
  domain-general skills [A]. Ashman, Kalyuga & Sweller (2020, Year 5, n = 64 and 71) found
  instruction first better, and the gap grew with more complex material [A]. Kirschner,
  Sweller & Clark (2006) argue that minimal guidance fails for novices [A].
- This debate is about students *solving* a problem before being taught. A `<Why>` box only
  *shows* a problem. That is closer to a prequestion or a curiosity hook, which is
  low-risk. So the productive-failure fight does not decide this rule either way.
- Rawson et al. (2015) found examples helped the same whether they came before or after the
  definition [A]. Order matters less than having the example.

### 2.3 Name a term when its problem arrives, not in a list up front

**The challenge.** Mayer's pre-training principle seems to say "name the parts first". In
Mayer, Mathias & Wetzell (2002), students who first learned each component of a brake or pump
did better on transfer in all three experiments [A]. Mayer (2017) gives a median d = 0.46 for
pre-training [A].

**Why it does not contradict the rule.** In those studies, pre-training taught each part's name
**and what it does** ("the possible states of each part"), before a fast narrated animation the
learner could not pause. A list of bare names is not pre-training. And the rule's own last
sentence already demands pre-training: "A mechanism with several parts grounds each part, its
name with its job, before the section shows the parts working together." Also, design
principles matter more in system-paced material than in self-paced material like a web page
(Noetel et al. 2022) [A], and pre-training is not among the 11 principles that overview found
robust [A]; the abstract does not say why.

**Advance organizers** (a short overview before the material) have a small positive effect
across 135 studies (Luiten, Ames & Ackerson 1980) [A]; Stone (1983) also found a positive
effect over 112 studies [A].

**Reading.** Keep the rule. A short "parts and their jobs" passage before a many-part mechanism
is allowed by the rule and supported by evidence; a glossary list at the top is not.

### 2.4 One concrete example per abstract idea

**What supports it.** Rawson, Thomas & Jacoby (2015): students who studied definitions plus
examples classified new cases much better than students who restudied definitions (d = 0.74 to
1.67, three experiments) [A]. Worked examples in mathematics: g = 0.48 over 55 studies,
elementary to university (Barbieri et al. 2023) [A]. Concrete text was recalled better and rated
more interesting and understandable (Sadoski, Goetz & Rodriguez 2000, undergraduates) [A].

**Evidence against or limits.**
- *One* example: Rawson et al. found that interleaving examples of different concepts mattered
  [A]. Comparing two cases beat a single case, d = 0.50 over 57 experiments (Alfieri et al.
  2013) [A]. Varied worked examples transferred better (Paas & van Merriënboer 1994) [A].
  ADR 0004 already answers this by getting the second case from `<Compare>`, `<Quiz>` and
  `<Analogy>`; that is a sound reading of the evidence.
- *Concrete* examples can trap knowledge in their surface: Kaminski, Sloutsky & Heckler (2008)
  found one abstract example transferred better than several concrete ones [A]. A replication
  confirmed the result but questioned what students actually learned, and found concrete
  learners transferred to concrete settings (De Bock et al. 2011) [A]. "Concreteness fading",
  concrete first then a clear move to the abstract form, is the suggested middle path (Fyfe et
  al. 2014, review) [A].
- In Barbieri et al., adding self-explanation prompts to worked examples *lowered* the effect
  [A].

### 2.5 Slide examples first; add an example only when it shows what prose cannot

**Adjacent support.** Interesting but irrelevant material ("seductive details") hurts learning
(Sundararajan & Adesope 2020, meta-analysis) [A]; Noetel et al. (2022) list coherence/removing
seductive details among the robust principles [A].

**Limit.** A relevant example is not a seductive detail. Example research (2.4) favours adding
examples, so the rule's restraint comes from the reading-time budget (ADR 0004), not from
learning research. "Slides first" has no research basis beyond exam alignment, which is a fair
reason.

### 2.6 One running example

**None found.** No study tests "reuse the same example across a whole text". The plausible
benefit is lower load: the reader does not learn a new scenario each time. The plausible cost
is the one ADR 0004 names: the idea sticks to one surface (2.4). Keep it, with ADR 0004's
variation.

### 2.7 Quote the deciding lines, fold the rest

**Adjacent support.** Signaling (highlighting what matters) is among the largest effects in
Noetel et al. (2022) [A]; Mayer's median is d = 0.46 (2017) [A]. Segmenting into learner-paced
parts gives small-to-medium gains in retention and transfer, over 56 studies (Rey et al. 2019)
[A]. On the web, users read at most about 28% of a page's words, more realistically 20%
(NN/g analysis of 25 users' 45,237 page views, Nielsen 2008) [F]. In an older NN/g test, 79% of
users scanned, and a concise, scannable, objective version was 124% more usable (Nielsen 1997)
[F].

**Limit.** No learning experiment tests folding (`<Detail>`) itself. A risk: folded content is
rarely opened, so anything the exam needs must not live only in a fold.

### 2.8 Say it once, with deliberate repeats

**Support for "once".** When a diagram explains itself, adding text that says the same harms
learning (Chandler & Sweller 1991, six experiments, engineering and biology) [A]. Mayer's
redundancy median is d = 0.87, but that is about narration plus identical on-screen text, not
written repeats (Mayer 2017) [A]; Adesope & Nesbit (2012) found spoken+written vs written-only
did not differ [A].

**Support for the deliberate repeats.** It depends on the kind of repeat.
- Rereading is rated **low utility** (Dunlosky et al. 2013) [A]. So `<KeyIdea>` as a restatement
  works as a signal, not as review.
- Practice testing is rated **high utility** (Dunlosky et al. 2013) [A]. A `<Quiz>` is the best
  kind of repeat (see 2.16).
- A summary of main points is remembered well (Reder & Anderson 1980) [F]. `<Recap>` is fine.

### 2.9 Assume no background

**Strong for novices.** A meta-analysis of the expertise reversal effect: low-knowledge learners
learn more with more assistance (d = 0.505); high-knowledge learners learn more with less
(d = −0.428); 60 studies, 5,924 participants. The effect is not symmetric: helping novices
gains more than it costs experts (Tetzlaff et al. 2025) [A]. Coherent, explicit texts help
low-knowledge readers (McNamara et al. 1996, junior-high students) [A]; high-cohesion text
improved text-based comprehension for college students (Ozuru, Dempsey & McNamara 2009) [A].

**Limit.** Readers with enough background can learn *more* from a less explicit text, because
they must fill gaps themselves (McNamara et al. 1996) [A]; Kalyuga et al. (2003) review the
same reversal [A]. CEDTAN's reader is mostly a novice the night before an exam, so the rule
fits. Folding background into `<Detail>` lets stronger readers skip it.

### 2.10 Thai prose, English terms, gloss on first use, no coined Thai terms

**Support for Thai prose.** In Hong Kong, 24 studies showed English-medium secondary schools
improved English but students' content learning suffered (Lo & Lo 2014) [A]. In three
experiments on law and computer science, reading in a foreign language was never the best
condition for learning content (Roussel et al. 2017) [S]. So explaining in Thai is well
supported.

**English terms and glosses: adjacent only.** Glosses in second-language reading had a medium
effect on comprehension, over 11 studies (Abraham 2008) [A]. Familiar words are processed faster
than rare ones (Brysbaert, Mandera & Keuleers 2017) [A]; the term a student hears in class is
the familiar one, which supports "no coined Thai terms". No study I found tests Thai text with
embedded English terms.

**Thai reading.** Thai has no spaces between words. Inserting spaces helped Thai–English
bilinguals recognise words but did not change where their eyes landed (Winskel, Radach &
Luksaneeyanawin 2009) [F, abstract page]. This is the only Thai-reader study I found that bears
on page writing.

### 2.11 One point per paragraph, 1–3 sentences

**Weak.** No experiment on paragraph length was found. Adjacent: segmenting (2.7); NN/g
eye-tracking shows readers scan the first lines and the first words of each line, and
"walls of text" invite the F-pattern (Pernice 2017) [F]. On phones, NN/g found comprehension
equal to desktop, but hard text was read about 30 ms per word slower (Moran 2016, about 280
participants) [F].

**Limit.** Cutting text into short pieces can remove the links between ideas ("because",
"so", "but"). Missing links hurt low-knowledge readers (McNamara et al. 1996; Ozuru et al.
2009) [A]. Short paragraphs need explicit connectives.

### 2.12 Own the order

**Adjacent support.** Headings that show the text's organization led to more accurate outlines
and faster search (Lorch, Lemarié & Grant 2011, four experiments) [A]. Comprehension builds a
connected representation from the text, so order and links matter (Kintsch 1988) [A]; topic
first helps comprehension (Bransford & Johnson 1972) [S]. "Organization is the hallmark of good
teaching" is Hartley & Davies' (1976) framing in their review of preinstructional strategies
[A].

**Gap.** No study compares a source's order with a re-planned teaching order.

### 2.13 End with a Recap

**Support.** Summaries of main points beat full texts on memory and transfer, up to a year
later (Reder & Anderson 1980) [F]; Mayer et al. (1996) agree [A].

**Start vs end.** Advance organizers at the start have a small positive effect (Luiten et al.
1980) [A]. I found no meta-analysis comparing summary-at-start with summary-at-end directly;
Hartley & Trueman's 1982 study of summary position is **[U]**: I could not open it. The two do
different jobs: an opening overview gives a frame to read into (Bransford & Johnson); a closing
Recap is for review. The page already shows the frontmatter `description` under the title
(`DocsDescription` in `app/(lecture)/[...slug]/page.tsx`), so an opening frame exists if the
description is written as a real orientation.

**Better form.** A Recap read as statements is rereading (low utility). A Recap that first asks
and then shows the answer is retrieval practice (high utility; 2.16).

### 2.14 Analogy: map, then mark its edge

**Support.** Analogies "require explicit support" so learners notice the relations and "both
the similarities and differences" (Richland & Simms 2015, review) [A]. A grade-10 case study
found an analogy works when shared attributes are identified precisely and unshared attributes
are named explicitly (Harrison & Treagust 1993) [A]; this is a single class, not an experiment.
Duit (1991) reviews how analogies can also create wrong ideas [A]. Refutation text plus an
analogy produced the most knowledge revision in 122 college students (Danielson, Sinatra &
Kendeou 2016) [A].

**Limit the rule misses.** An analogy helped only students who knew the everyday source domain
well (Braasch & Goldman 2010, college students) [A]. The source must be something Thai students
know well, not something only the writer knows.

### 2.15 Pitfall as a four-move refutation

**Strong.** Refutation text (state the misconception, say it is wrong, explain the correct idea)
beat other conditions with g = 0.41 (95% CI 0.30–0.51) over 44 comparisons and 3,869
participants; after correcting for possible publication bias, g = 0.28. 30 of the 44
comparisons were post-secondary (g = 0.33); age differences were not significant (Schroeder &
Kucera 2022) [F]. Tippett (2010) reviews two decades with the same conclusion [A].

**Limits.** The meta-analysis did not code how explicitly misconceptions were stated [F]. The
repo's move 3, "why it looks right", is not one of the standard three parts; I found no test of
it alone. Kendeou et al. (2014) found the *explanation* does most of the work: refutation alone
reduced but did not remove the reader's conflict; explanation alone worked as well as both [A].
So move 4 must explain the mechanism, not just state the right rule.

### 2.16 Quiz: new case, right after its section, reasoned answer, likely wrong answer

**Strong.**
- Classroom quizzing raises achievement, g = 0.499, 222 studies, 48,478 students (Yang et al.
  2021) [A]. Practice tests beat restudying (Adesope, Trevisan & Sundararajan 2017) [A];
  Agarwal et al. (2021) found medium or large benefits in 57% of 49 classroom effects [A].
- **Placement:** with a 40-page biology chapter, questions after each section and questions at
  the end helped equally; both together helped most (Uner & Roediger 2018) [A]. Tests placed
  between parts of online lectures reduced mind wandering and improved learning (Szpunar, Khan
  & Schacter 2013) [A].
- **Answer with reasoning:** explained ("elaborated") feedback g = 0.49, vs 0.05 for right/wrong
  only, and 0.32 for the correct answer only; the gap is larger for higher-order outcomes (Van
  der Kleij et al. 2015, 40 studies) [A].
- **The likely wrong answer:** errors followed by corrective feedback, "including analysis of
  the reasoning leading up to the mistake", help, especially confident errors (Metcalfe 2017)
  [A].
- **New case:** higher-order adjunct questions have a more general benefit than factual ones
  (Hamaker 1986) [A].

**Limit.** The benefit comes from trying to answer. A reader who opens the answer without trying
gets something closer to rereading.

### 2.17 Predict before a surprising result

**Moderate.** Making a prediction before seeing an outcome improved learning of geography facts,
and a surprise response appeared only when a prediction had been made (Brod, Hasselhorn & Bunge
2018, adults) [S]. In children aged 9–12, only those with good inhibitory control benefited
(Brod et al. 2020) [A]. Curiosity strengthens memory for surprising answers (Kang et al.) [A].
Prequestions help (Pan & Carpenter 2023) [A]. The rule's "only for surprising results" fits:
the effect is tied to surprise.

### 2.18 No narration about the source deck

**None found.** Adjacent: words that carry no content compete for attention (coherence, 2.1).
**Limit:** signposting about the *page's own* structure ("the next part shows…") may help: an
exploratory classroom study with Italian university students linked more metadiscourse to
better comprehension in some cases (Camiciottoli 2003) [A]. The rule targets deck narration, not
page signposts, so the two do not conflict, but writers should not strip page signposts by
mistake.

### 2.19 A figure with real values is the example; prose does not retell it

**Moderate.** Chandler & Sweller (1991) [A]: when material is understandable from one source,
adding "seemingly useful but nonessential explanatory material" hurt. Placing words next to the
part of the figure they refer to helps, g = 0.63 over 58 comparisons (Schroeder & Cenkci 2018)
[A]. This supports the rule's "name what to look at, in one or two sentences" placed beside the
figure.

**Limit.** For novices, a diagram may not be self-explanatory; the redundancy finding assumes it
is (Kalyuga et al. 2003) [A].

### 2.20 Added example: 15 lines and 3 sentences visible

**None found** for the numbers. The direction fits coherence (2.1) and the 20–28% reading figure
(2.7). Treat the numbers as a house rule.

### 2.21 Headings name what is taught

**Moderate.** Across 17 experiments, headings aided recall, search and retrieval; both heading
forms tested helped, and heading position made no difference (Hartley & Trueman 1985) [A]. Headings that show
organization help outlining and search (Lorch et al. 2011) [A]. NN/g advises starting headings
with the most informative words, because scanners read only the first words (Pernice 2017) [F].

## 3. Findings the rules do not cover, and proposed new rules

### 3.1 Other findings

- **Spacing.** Spreading study over time beats massing it; the best gap grows with how long you
  must remember (Cepeda et al. 2006, 317 experiments) [A]. Dunlosky et al. rate it high utility
  [A]. The night-before reader is massing, which the page cannot fix, but it can give earlier
  readers a reason to come back.
- **Interleaving** helps category learning (g = 0.42) but was not significant for expository
  texts and reversed for word learning (Brunmair & Richter 2019) [A]. Do not mix topics within
  a page on this basis.
- **Self-explanation prompts** ("why does this step work?"): g = 0.55 over 69 effects (Bisra et
  al. 2018) [A]. But see Barbieri et al. (2.4): with worked examples they lowered the effect.
- **Conversational style** (direct address, "you"): d = 0.30 retention, 0.54 transfer; effects
  became small and non-significant in studies longer than 35 minutes (Ginns, Martin & Marsh
  2013) [A]. CEDTAN pages run 25–55 minutes.
- **Narrative vs expository.** Stories were understood and remembered better than essays,
  g = 0.55 overall, 0.44 for adults, over 37 studies and 33,000+ participants (Mar et al. 2021)
  [F]. The texts usually differed in content, so this is a genre effect, not a tested rewrite.
- **Screen vs paper.** Reading on screen gives slightly lower comprehension: g = −0.21 over 54
  studies (Delgado et al. 2018) [A]; g = −0.25, only for expository texts, g = −0.32 (Clinton
  2019) [A]; for handheld devices g ≈ −0.11 (Salmerón et al. 2024) [A]. The gap grows under
  time pressure (Delgado et al. 2018) [A]: screen readers under time pressure mind-wandered more
  and understood less (Delgado & Salmerón 2021, 140 undergraduates) [A]. The night-before reader
  on a phone is exactly this case.
- **Mind wandering** is more frequent with difficult texts and hurts comprehension more there
  (Feng, D'Mello & Graesser 2013) [A]. Across 88 samples, more time on task strengthened the
  link between low resources and mind wandering (Randall, Oswald & Beier 2014) [A].
- **Readability formulas** (sentence length, word length) predict adult comprehension worse
  than models using cohesion and word familiarity (Crossley et al. 2017) [A]. Short sentences
  alone are not the goal.
- **Mobile.** Comprehension on phones matched desktop in NN/g's 2016 tests; hard text was read
  more slowly (Moran 2016) [F]. The F-pattern appears on mobile too (Pernice 2017) [F].

### 3.2 Proposed new rules, ranked (strength of evidence × cheapness)

1. **Make the Recap ask before it tells.** Turn some Recap bullets into short questions with the
   answer folded, or add a 3–5 question check before the Recap. Evidence: strong (testing effect,
   Yang et al. 2021; Dunlosky et al. 2013). Cost: low.
2. **Ask the reader to commit before opening a Quiz answer.** One line such as
   `ตอบในใจก่อน แล้วค่อยเปิด`. Evidence: strong for retrieval; the benefit needs an attempt. Cost:
   very low (could live in the `<Quiz>` component once).
3. **Front-load headings and paragraph openings.** Put the key term or claim in the first words
   of each heading and the first sentence of each paragraph. Evidence: moderate (NN/g eye-tracking;
   Hartley & Trueman 1985). Cost: low.
4. **Keep the connectives when you split paragraphs.** Each short paragraph says how it links to
   the one before (`เพราะ`, `จึง`, `แต่`). Evidence: moderate (McNamara et al. 1996; Ozuru et al.
   2009). Cost: low.
5. **Write `description` as an orientation.** Name the question the page answers, concretely,
   since it already renders under the title. Evidence: weak-moderate (advance organizers small;
   Bransford & Johnson). Cost: very low.
6. **Give the time-pressed reader a fast path.** Each `##` part ends with a `<KeyIdea>` or quiz,
   and the Recap stands alone, so a reader with 15 minutes gets the core. Evidence: moderate
   (screen reading under time pressure; mind wandering). Cost: low.
7. **Tell mechanisms as events with actors** where the material allows ("the attacker sends…,
   the server replies…"). Evidence: moderate (Mar et al. 2021), adjacent. Cost: medium.
8. **Choose analogy sources Thai students know well**, and add it to the `<Analogy>` shape.
   Evidence: moderate (Braasch & Goldman 2010). Cost: very low.
9. **Add a short "from earlier lectures" quiz** to later pages for spaced review. Evidence:
   strong (spacing). Cost: medium (needs cross-page planning).
10. **Use direct address** (speak to the reader as `เรา`/`คุณ` where natural). Evidence: moderate,
    but weak for lessons over 35 minutes (Ginns et al. 2013). Cost: low; check it fits the page
    voice in lecture 3 before adopting.

## 4. Rules the evidence suggests should change

1. **Cover everything → cover every topic, depth by weight.** Add: "A minor topic gets the
   smallest treatment that carries its meaning; detail that no exam question or later section
   needs goes in a `<Detail>` or goes." Reason: Reder & Anderson 1980; coherence.
2. **Recap → retrieval Recap.** Keep `<Recap>`, but require some items as questions (proposal 1).
3. **Pitfall move 4 → explain, not assert.** "What holds instead" must give the mechanism that
   makes the belief false (Kendeou et al. 2014). Keep move 3, but it is the least supported; do
   not reject a pitfall only because move 3 is short.
4. **Analogy → add a source condition.** "Pick an everyday case most Thai students know first-hand."
5. **One point per paragraph → add the connective clause** (proposal 4).
6. **Name a term when its problem arrives → clarify that a "parts and jobs" opening is allowed**
   for a mechanism of three or more parts. The rule already implies this; saying it outright
   stops a reviewer from flagging it as a "list up front".
7. **Quiz → add the commit line** (proposal 2).
8. **Page length.** Not a current rule. Effects of conversational style fade past 35 minutes, and
   mind wandering grows with time on task. For pages over about 40 `readingMinutes`, consider
   more `##` parts each ending in a quiz, rather than a longer unbroken read.

## 5. Gaps: questions with no good evidence

- Thai readers: only the word-spacing eye-tracking study. Nothing on Thai expository text,
  Thai paragraph length, or Thai readers on phones.
- Thai text with English technical terms embedded: no study on comprehension or reading speed.
  Code-switching research I found is about spoken classrooms and is descriptive.
- Paragraph length and sentence count limits: no experiment.
- Folding content (`<Detail>`, accordions): no learning study; usability writing only.
- One running example across a whole text: no study.
- Stating where an analogy breaks: case studies and teaching models, no controlled test.
- "Why it looks right" as a separate refutation move: not tested alone.
- Summary at the start vs the end, head to head: I could not open the main study (Hartley &
  Trueman 1982, **[U]**).
- Narration about a source document: no study.
- Night-before-exam reading: spacing research says cramming is worse, but I found no study of
  how to write *for* a crammer.

## References

- Abraham, L. B. (2008). Computer-mediated glosses in second language reading comprehension and vocabulary learning: A meta-analysis. *Computer Assisted Language Learning*, 21(3). ERIC EJ799256. [A]
- Adesope, O. O., & Nesbit, J. C. (2012). Verbal redundancy in multimedia learning environments: A meta-analysis. *Journal of Educational Psychology*. https://doi.org/10.1037/a0026147 [A]
- Adesope, O. O., Trevisan, D. A., & Sundararajan, N. (2017). Rethinking the use of tests: A meta-analysis of practice testing. *Review of Educational Research*. ERIC EJ1141817. [A]
- Agarwal, P. K., Nunes, L. D., & Blunt, J. R. (2021). Retrieval practice consistently benefits student learning. *Educational Psychology Review*. ERIC EJ1319572. [A]
- Alfieri, L., Nokes-Malach, T. J., & Schunn, C. D. (2013). Learning through case comparisons: A meta-analytic review. *Educational Psychologist*. ERIC EJ1000186. [A]
- Ashman, G., Kalyuga, S., & Sweller, J. (2020). Problem-solving or explicit instruction: Which should go first when element interactivity is high? *Educational Psychology Review*. ERIC EJ1245274. [A]
- Barbieri, C. A., Miller-Cotto, D., Clerjuste, S. N., & Chawla, K. (2023). A meta-analysis of the worked examples effect on mathematics performance. *Educational Psychology Review*. ERIC EJ1364058. [A]
- Bisra, K., Liu, Q., Nesbit, J. C., Salimi, F., & Winne, P. H. (2018). Inducing self-explanation: A meta-analysis. *Educational Psychology Review*. ERIC EJ1186664. [A]
- Braasch, J. L. G., & Goldman, S. R. (2010). The role of prior knowledge in learning from analogies in science texts. *Discourse Processes*. ERIC EJ893221. [A]
- Bransford, J. D., & Johnson, M. K. (1972). Contextual prerequisites for understanding. *Journal of Verbal Learning and Verbal Behavior*. https://doi.org/10.1016/S0022-5371(72)80006-9 [S]
- Brod, G., Hasselhorn, M., & Bunge, S. A. (2018). When generating a prediction boosts learning: The element of surprise. *Learning and Instruction*, 55. https://doi.org/10.1016/j.learninstruc.2018.01.013 [S]
- Brod, G., Breitwieser, J., Hasselhorn, M., & Bunge, S. A. (2020). Being proven wrong elicits learning in children—but only in those with higher executive function skills. *Developmental Science*. ERIC EJ1250187. [A]
- Brunmair, M., & Richter, T. (2019). Similarity matters: A meta-analysis of interleaved learning and its moderators. *Psychological Bulletin*. https://doi.org/10.1037/bul0000209 [A]
- Brysbaert, M., Mandera, P., & Keuleers, E. (2017). The word frequency effect in word processing: An updated review. *Current Directions in Psychological Science*. https://doi.org/10.1177/0963721417727521 [A]
- Camiciottoli, B. C. (2003). Metadiscourse and ESP reading comprehension: An exploratory study. *Reading in a Foreign Language*. ERIC EJ666285. [A]
- Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks. *Psychological Bulletin*. https://doi.org/10.1037/0033-2909.132.3.354 [A]
- Chandler, P., & Sweller, J. (1991). Cognitive load theory and the format of instruction. *Cognition and Instruction*. https://doi.org/10.1207/s1532690xci0804_2 [A]
- Clinton, V. (2019). Reading from paper compared to screens: A systematic review and meta-analysis. *Journal of Research in Reading*. https://doi.org/10.1111/1467-9817.12269 [A]
- Crossley, S., Skalicky, S., Dascalu, M., McNamara, D., & Kyle, K. (2017). Predicting text comprehension, processing, and familiarity in adult readers. *Discourse Processes*. https://doi.org/10.1080/0163853X.2017.1296264 [A]
- Danielson, R. W., Sinatra, G. M., & Kendeou, P. (2016). Augmenting the refutation text effect with analogies and graphics. *Discourse Processes*. ERIC EJ1104292. [A]
- De Bock, D., Deprez, J., Van Dooren, W., Roelens, M., & Verschaffel, L. (2011). Abstract or concrete examples in learning mathematics? A replication. *Journal for Research in Mathematics Education*. https://doi.org/10.5951/jresematheduc.42.2.0109 [A]
- Delgado, P., Vargas, C., Ackerman, R., & Salmerón, L. (2018). Don't throw away your printed books: A meta-analysis on the effects of reading media on reading comprehension. *Educational Research Review*. https://doi.org/10.1016/j.edurev.2018.09.003 [A]
- Delgado, P., & Salmerón, L. (2021). The inattentive on-screen reading. *Learning and Instruction*. https://doi.org/10.1016/j.learninstruc.2020.101396 [A]
- Duit, R. (1991). On the role of analogies and metaphors in learning science. *Science Education*. ERIC EJ466090. [A]
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques. *Psychological Science in the Public Interest*. https://doi.org/10.1177/1529100612453266 [A]
- Feng, S., D'Mello, S., & Graesser, A. C. (2013). Mind wandering while reading easy and difficult texts. *Psychonomic Bulletin & Review*. https://doi.org/10.3758/s13423-012-0367-y [A, repository record]
- Fyfe, E. R., McNeil, N. M., Son, J. Y., & Goldstone, R. L. (2014). Concreteness fading in mathematics and science instruction. *Educational Psychology Review*. https://doi.org/10.1007/s10648-014-9249-3 [A]
- Ginns, P., Martin, A. J., & Marsh, H. W. (2013). Designing instructional text in a conversational style: A meta-analysis. *Educational Psychology Review*. https://doi.org/10.1007/s10648-013-9228-0 [A]
- Gruber, M. J., Gelman, B. D., & Ranganath, C. (2014). States of curiosity modulate hippocampus-dependent learning via the dopaminergic circuit. *Neuron*. https://doi.org/10.1016/j.neuron.2014.08.060 [F]
- Hamaker, C. (1986). The effects of adjunct questions on prose learning. *Review of Educational Research*. ERIC EJ351754. [A]
- Harrison, A. G., & Treagust, D. F. (1993). Teaching with analogies: A case study in grade-10 optics. *Journal of Research in Science Teaching*. https://doi.org/10.1002/tea.3660301010 [A]
- Hartley, J., & Davies, I. K. (1976). Preinstructional strategies. *Review of Educational Research*. https://doi.org/10.2307/1170040 [A]
- Hartley, J., & Trueman, M. (1985). A research strategy for text designers: The role of headings. *Instructional Science*. ERIC EJ328354. [A]
- Kalyuga, S., Ayres, P., Chandler, P., & Sweller, J. (2003). The expertise reversal effect. *Educational Psychologist*. https://doi.org/10.1207/S15326985EP3801_4 [A]
- Kaminski, J. A., Sloutsky, V. M., & Heckler, A. F. (2008). The advantage of abstract examples in learning math. *Science*. https://doi.org/10.1126/science.1154659 [A, one-line summary]
- Kang, M. J., Hsu, M., Krajbich, I., Loewenstein, G., McClure, S., Wang, J., et al. The wick in the candle of learning. SSRN working paper (2008), https://doi.org/10.2139/ssrn.1308286 [A]; published in *Psychological Science* (2009) [U].
- Kendeou, P., Walsh, E., Smith, E., & O'Brien, E. (2014). Knowledge revision processes in refutation texts. *Discourse Processes*. https://doi.org/10.1080/0163853X.2014.913961 [A]
- Kintsch, W. (1988). The role of knowledge in discourse comprehension: A construction-integration model. *Psychological Review*. https://doi.org/10.1037/0033-295X.95.2.163 [A]
- Kirschner, P. A., Sweller, J., & Clark, R. E. (2006). Why minimal guidance during instruction does not work. *Educational Psychologist*. https://doi.org/10.1207/s15326985ep4102_1 [A]
- Lo, Y. Y., & Lo, E. S. C. (2014). A meta-analysis of the effectiveness of English-medium education in Hong Kong. *Review of Educational Research*. ERIC EJ1020644. [A]
- Loewenstein, G. (1994). The psychology of curiosity: A review and reinterpretation. *Psychological Bulletin*. https://doi.org/10.1037/0033-2909.116.1.75 [A]
- Loibl, K., Roll, I., & Rummel, N. (2017). Towards a theory of when and how problem solving followed by instruction supports learning. *Educational Psychology Review*. ERIC EJ1159862. [A]
- Lorch, R. F., Lemarié, J., & Grant, R. A. (2011). Signaling hierarchical and sequential organization in expository text. *Scientific Studies of Reading*. ERIC EJ922663. [A]
- Luiten, J., Ames, W., & Ackerson, G. (1980). A meta-analysis of the effects of advance organizers on learning and retention. *American Educational Research Journal*. ERIC EJ233231. [A]
- Mar, R. A., Li, J., Nguyen, A., & Ta, C. (2021). Memory and comprehension of narrative versus expository texts: A meta-analysis. *Psychonomic Bulletin & Review*. https://doi.org/10.3758/s13423-020-01853-1 [F]
- Mayer, R. E. (2017). Using multimedia for e-learning. *Journal of Computer Assisted Learning*. ERIC EJ1153516. [A]
- Mayer, R. E., et al. (1996). When less is more. *Journal of Educational Psychology*. ERIC EJ526858. [A]
- Mayer, R. E., Mathias, A., & Wetzell, K. (2002). Fostering understanding of multimedia messages through pre-training. *Journal of Experimental Psychology: Applied*. https://doi.org/10.1037/1076-898X.8.3.147 [A]
- McNamara, D. S., Kintsch, E., Songer, N. B., & Kintsch, W. (1996). Are good texts always better? *Cognition and Instruction*. ERIC EJ520492. [A]
- Metcalfe, J. (2017). Learning from errors. *Annual Review of Psychology*. https://doi.org/10.1146/annurev-psych-010416-044022 [A]
- Moran, K. (2016). Reading content on mobile devices. Nielsen Norman Group. https://www.nngroup.com/articles/mobile-content/ [F]
- Nielsen, J. (1997). How users read on the web. Nielsen Norman Group. https://www.nngroup.com/articles/how-users-read-on-the-web/ [F]
- Nielsen, J. (2008). How little do users read? Nielsen Norman Group. https://www.nngroup.com/articles/how-little-do-users-read/ [F] (data: Weinreich et al., *ACM Transactions on the Web*, 2008 [U])
- Noetel, M., Griffith, S., Delaney, O., Harris, N. R., Sanders, T., et al. (2022). Multimedia design for learning: An overview of reviews with meta-meta-analysis. *Review of Educational Research*. https://doi.org/10.3102/00346543211052329 [A; full text blocked]
- Ozuru, Y., Dempsey, K., & McNamara, D. S. (2009). Prior knowledge, reading skill, and text cohesion in the comprehension of science texts. *Learning and Instruction*. ERIC EJ830389. [A]
- Paas, F., & Van Merriënboer, J. J. G. (1994). Variability of worked examples and transfer of geometrical problem-solving skills. *Journal of Educational Psychology*. ERIC EJ484337. [A]
- Pan, S. C., & Carpenter, S. K. (2023). Prequestioning and pretesting effects. *Educational Psychology Review*. ERIC EJ1393374. [A]
- Pernice, K. (2017). F-shaped pattern of reading on the web: Misunderstood, but still relevant (even on mobile). Nielsen Norman Group. https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/ [F]
- Randall, J. G., Oswald, F. L., & Beier, M. E. (2014). Mind-wandering, cognition, and performance: A theory-driven meta-analysis. *Psychological Bulletin*. https://doi.org/10.1037/a0037428 [A]
- Rawson, K. A., Thomas, R. C., & Jacoby, L. L. (2015). The power of examples. *Educational Psychology Review*. ERIC EJ1071985. [A]
- Reder, L. M., & Anderson, J. R. (1980). A comparison of texts and their summaries: Memorial consequences. *Journal of Verbal Learning and Verbal Behavior*, 19, 121–134. https://doi.org/10.1016/S0022-5371(80)90122-X [F, page 1]
- Renkl, A., & Atkinson, R. K. (2003). Structuring the transition from example study to problem solving. *Educational Psychologist*. https://doi.org/10.1207/S15326985EP3801_3 [A]
- Rey, G. D., Beege, M., Nebel, S., Wirzberger, M., Schmitt, T. H., & Schneider, S. (2019). A meta-analysis of the segmenting effect. *Educational Psychology Review*. ERIC EJ1217373. [A]
- Richland, L. E., & Simms, N. (2015). Analogy, higher order thinking, and education. *WIREs Cognitive Science*. https://doi.org/10.1002/wcs.1336 [A]
- Roussel, S., Joulia, D., Tricot, A., & Sweller, J. (2017). Learning subject content through a foreign language should not ignore human cognitive architecture. *Learning and Instruction*. https://doi.org/10.1016/j.learninstruc.2017.04.007 [S]
- Sadoski, M., Goetz, E. T., & Rodriguez, M. (2000). Engaging texts: Effects of concreteness on comprehensibility, interest, and recall in four text types. *Journal of Educational Psychology*. ERIC EJ619358. [A]
- Salmerón, L., Altamura, L., Delgado, P., Karagiorgi, A., & Vargas, C. (2024). Reading comprehension on handheld devices versus on paper. *Journal of Educational Psychology*. https://doi.org/10.1037/edu0000830 [A]
- Schroeder, N. L., & Cenkci, A. T. (2018). Spatial contiguity and spatial split-attention effects in multimedia learning environments: A meta-analysis. *Educational Psychology Review*. ERIC EJ1186641. [A]
- Schroeder, N. L., & Kucera, A. C. (2022). Refutation text facilitates learning: A meta-analysis of between-subjects experiments. *Educational Psychology Review*. https://doi.org/10.1007/s10648-021-09656-z [F]
- Schwartz, D. L., & Bransford, J. D. (1998). A time for telling. *Cognition and Instruction*. ERIC EJ582423. [A]
- Sinha, T., & Kapur, M. (2021). When problem solving followed by instruction works: Evidence for productive failure. *Review of Educational Research*. ERIC EJ1308129. [A]
- Stone, C. L. (1983). A meta-analysis of advance organizer studies. *Journal of Experimental Education*. https://doi.org/10.1080/00220973.1983.11011862 [A]
- Sundararajan, N., & Adesope, O. (2020). Keep it coherent: A meta-analysis of the seductive details effect. *Educational Psychology Review*. https://doi.org/10.1007/s10648-020-09522-4 [A; effect size not in abstract, not reported here]
- Szpunar, K. K., Khan, N. Y., & Schacter, D. L. (2013). Interpolated memory tests reduce mind wandering and improve learning of online lectures. *PNAS*. https://doi.org/10.1073/pnas.1221764110 [A]
- Tetzlaff, L., Simonsmeier, B., Peters, T., & Brod, G. (2025). A cornerstone of adaptivity – A meta-analysis of the expertise reversal effect. *Learning and Instruction*. https://doi.org/10.1016/j.learninstruc.2025.102142 [A]
- Tippett, C. D. (2010). Refutation text in science education: A review of two decades of research. *International Journal of Science and Mathematics Education*. https://doi.org/10.1007/s10763-010-9203-x [A]
- Uner, O., & Roediger, H. L. (2018). The effect of question placement on learning from textbook chapters. *Journal of Applied Research in Memory and Cognition*. https://doi.org/10.1016/j.jarmac.2017.09.002 [A]
- Van der Kleij, F. M., Feskens, R. C. W., & Eggen, T. J. H. M. (2015). Effects of feedback in a computer-based learning environment on students' learning outcomes: A meta-analysis. *Review of Educational Research*. ERIC EJ1081708. [A]
- Winskel, H., Radach, R., & Luksaneeyanawin, S. (2009). Eye movements when reading spaced and unspaced Thai and English. *Journal of Memory and Language*. https://doi.org/10.1016/j.jml.2009.07.002 [F, abstract page]
- Yang, C., Luo, L., Vadillo, M. A., Yu, R., & Shanks, D. R. (2021). Testing (quizzing) boosts classroom learning: A systematic and meta-analytic review. *Psychological Bulletin*. https://doi.org/10.1037/bul0000309 [A]

ERIC records are at `https://eric.ed.gov/?id=<ERIC number>`.
