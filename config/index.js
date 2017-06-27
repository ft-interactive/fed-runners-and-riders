import * as bertha from 'bertha-client';
import article from './article';
import getFlags from './flags';
import getOnwardJourney from './onward-journey';
import _ from 'underscore';

export default async () => {
  const d = await article();
  const flags = await getFlags();
  const onwardJourney = await getOnwardJourney();
  let cards = {};
  let data;


  const text = await bertha.get('1ygZbMiRKX5F6b245O5FmgpLUiKV3Znk9iMk9tJ1ZXRw', ['text']).then((text) => {
  return text.text;
  // { someSheet: [...], anotherSheet: [...] }
    });

  const industries = await bertha.get('1ygZbMiRKX5F6b245O5FmgpLUiKV3Znk9iMk9tJ1ZXRw', ['industries']).then((industries) => {
  return industries.industries;
  // { someSheet: [...], anotherSheet: [...] }
    });

  const pageText = await bertha.get('1ygZbMiRKX5F6b245O5FmgpLUiKV3Znk9iMk9tJ1ZXRw', ['pageText|object']).then((pageText) => {
  return pageText.pageText;
  // { someSheet: [...], anotherSheet: [...] }
    });

  const intro = pageText.lede;
  const headline = pageText.head;
  const summary = pageText.summary;
  const title = headline;
  const description = summary;

  const cardsByIndustry = _.groupBy(text, 'industry'); // group cards by industry

  // order industries by spreadsheet tab `industries`
  cards = industries.map((industry) => {
    const industryName = industry.industryname;
    const industryDisplayName = industry.industrydisplayname;

    return {
      industryName,
      industryDisplayName,
      items: cardsByIndustry[industryName],
    }
  })

 // console.log(cardsByIndustry)
  // console.log(cards)
  // console.log(pageText);

  return {
    ...d,
    intro,
    headline,
    summary,
    description,
    title,
    pageText,
    cards,
    flags,
    onwardJourney,
  };
};
