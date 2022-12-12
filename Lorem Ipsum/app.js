const paralist = [
    'A comparison or a contrast paragraph zeroes in on a key similarity or difference between, for instance, two sources, positions, or ideas. Decide whether to deal only with similarities or only with differences, or to cover both. Also, keep in mind that a single comparison can be spread out over two separate paragraphs. As the following topic sentence indicates, you should make your intention clear to readers from the outset.',
    'A celebrity is “known for being well-known” (Boorstin, 1961, p. 57), regardless of whether that eminence derives from the entertainment field, medicine, science, politics, religion, sports, or close association with other celebrities. Therefore, “fame” is a psychological concept akin to object-relations theory and is multifaceted in scope.',
    'The psychological study of celebrity and fame has generally followed three trends. First, there is an interest in characteristics that distinguish eminent people with significant skills or intelligence from the general population (Albert, 1996; Simonton, 1999). Other studies have addressed how celebrity affects public attitudes such as consumer behaviour (Till & Shimp, 1998; Tripp, Jensen, & Carlson, 1994).',
    'Lastly, there are psychological consequences of achieving fame. For instance, Schaller (1997) found that in some instances fame leads to chronic self-consciousness and perhaps self-destructive behaviour. This is an important aspect to the study of fame and celebrity given that other research has linked depressive neurosis to over-identification with social roles and norms, feeling dependent on others, self-esteem problems, and unfulfilled wishes of love and acceptance (Frommer et al., 1995).',
    'Flow” is a word used to describe the way a paragraph moves from idea to idea. This movement occurs both within the paragraph and between paragraphs. The best overall strategy to enhance flow within a paragraph is to show connections. A variety of simple techniques can help you to clarify those connections and thereby communicate your intended logic.',
    'Deliberate repetition of key words helps. Reiterating the focus of your analysis by repeating key words or synonyms for key words enhances the overall flow of the paragraph. In the following example, the repetition of the key words “Canadian,” “nation,” and “communication” allows for clear flow throughout the paragraph.',
    'While the deliberate repetition of a key word is a useful tool, you generally want to avoid repeating an entire idea. In particular, avoid ending a paragraph by making the same point you made in the topic sentence. This type of reiteration stalls or disrupts the development of ideas as well as the logical progression to the next paragraph. ',
    'Strategic use of pronouns such as it, they, and this keeps the focus on the ideas announced at the beginning of the paragraph—as long as they are clearly linked to specific nouns. In the following example the antecedent is underlined and its corresponding pronoun is in bold.',
    'Paragraphs vary in length depending on the needs of the paragraph. Usually, paragraphs are between one-third and two-thirds of a page double spaced. A series of long paragraphs can make prose dense and unpleasant to read. Check any paragraph that is a page or longer to see whether it would work better as two or more paragraphs',
    'Also look out for short paragraphs only two or three sentences long. They make academic writing seem disjointed or skimpy. Try combining short paragraphs with the preceding or following paragraph if they share the same topic. Short paragraphs might also need to be developed further. Make sure that nothing vital has been omitted.'
]


const paraInput = document.querySelector('.input');
const results = document.querySelector('.results');

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let n = paraInput.value;
    let str = '';
    for (let i = 0; i < n; i++) {
        str += ` <br> <br> ${paralist[i]}`;
    }
    results.innerHTML = str;
})

