//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec  
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de 
//--              betreffende standaard. 
//-- Door. . . :  Frank Terpstra/Jan van Gelder
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20180615 - FT  - Initiele versie
//-- . . . . . :  20181106 - JvG - verplaatst naar root KP-APIs
//-------------------------------------------------------------------------------------

var respecConfig = 
{
  specStatus: "GN-WV",
  specType: "AL",
  pubDomain: "3dbv",
//publishDate: "2020-01-17",
//  previousPublishDate: "2019-07-15",
//  previousMaturity: "GN-VV",
  editors: 
  [
    {
      name: "Linda van den Brink",
      company: "Geonovum",
      companyURL: "http://www.geonovum.nl/",
    },
  ],
  authors: 
  [
    {
      name: "Linda van den Brink",
      company: "Geonovum",
      companyURL: "http://www.geonovum.nl/",
},
  ],
  shortName: "prod",
  github: "https://github.com/geonovum/3dbasisvoorziening",
  //issueBase: "https://github.com/geonovum/API-Designrules/issues/",
  localBiblio: {
  "OAuth2": {
      href: "https://tools.ietf.org/html/rfc6749",
      title:
        "The OAuth 2.0 Authorization Framework",
      authors: ["D. Hardt"],
      date: "October 2012",
      publisher: "The Internet Engineering Task Force",
    },
  },
};
