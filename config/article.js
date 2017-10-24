export default () => ({ // eslint-disable-line

  // link file UUID
  id: 'a41d8d4c-6750-11e7-8526-7b38dcaef614',

  // canonical URL of the published page
  //  get filled in by the ./configure script
  url: 'https://ig.ft.com/fed-board-successors/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2017-10-24T05:00:00Z'),

  headline: 'Who will chair the Federal Reserve after Yellen?',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Runners and riders for the US central bank board',

  topic: {
    name: 'Federal Reserve System',
    url: 'https://www.ft.com/topics/organisations/Federal_Reserve',
  },


  mainImage: {
    title: '',
    description: '',
    credit: 'Reuters',

    // You can provide a UUID to an image and it will populate everything else
    uuid: 'ec5b6dda-6481-11e7-9a66-93fb352ba1fe',

    // You can also provide a URL
    // url: 'https://image.webservices.ft.com/v1/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fc4bf0be4-7c15-11e4-a7b8-00144feabdc0?source=ig&fit=scale-down&width=700',
  },


  byline: [
    { name: 'Sam Fleming', url: 'https://www.ft.com/stream/84aee01c-a582-3999-87d1-e3c4bbbb7d84' },
    { name: 'Lauren Leatherby', url: 'https://www.ft.com/lauren-leatherby' },
  ],

  // Appears in the HTML <title>
  title: 'Who will chair the Federal Reserve after Yellen?',

  // meta data
  description: 'Runners and riders for the US central bank board',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialDescription: '',
  // twitterCreator: '@author's_account', // shows up in summary_large_image cards

  // TWEET BUTTON CUSTOM TEXT
  // tweetText: '',
  // twitterRelatedAccounts: ['authors_account_here', 'ftdata'], // Twitter lists these as suggested accounts to follow after a user tweets (do not include @)

  // Fill out the Facebook/Twitter metadata sections below if you want to
  // override the General social options above

  // TWITTER METADATA (for Twitter cards)
  // twitterImage: '',
  // twitterHeadline: '',
  // twitterDescription: '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',
  // facebookDescription: '',

  //ADVERTISING
  ads: {
    // ad unit hierarchy makes ads more granular. Start with ft.com and /companies /markets /world as appropriate to your story
    gptAdunit: 'ft.com/companies/european',
    // granular targeting is optional and will be specified by the ads team
    dftTargeting: '',
  },

  tracking: {
   /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
