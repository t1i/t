 let scri=document.createElement('script');
  scri.text=`

  {
    "@context": "https://schema.org",
    "@graph":[
      {
        "@type": "Organization",
        "name": "MrJaz",
        "alternateName": "www.mrjaz.com",
        "url": "https://www.mrjaz.com/",
        "logo": "https://www.mrjaz.com/favicon.ico",
        "image": "https://www.mrjaz.com/favicon.ico",
        "description": "",
        "sameAs": [
          "https://www.mrjaz.com/",
          "https://www.am2z.com/"
        ]
      },
      {
        "@type": "WebSite",
        "name": "${title.innerText}",
        "url": "${url.href}",
        "description": "${description.content}",
        "image": "${image.content}",
        "publisher": {"name": "MrJaz"},
        "potentialAction": {
          "@type": "SearchAction",
          "target": "<data:blog.searchUrl/>?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ImageObject",
        "name": "${title.innerText}",
        "url": "${image.content}",
        "contentUrl": "${image.content}",
        "author": "MrJaz",
        "caption": "${title.innerText}"
        "description": "${description.content}"
      },
      {
        "@type": "Article",
        "name" : "${title.innerText}",
        "headline": "${title.innerText}",
        "description": "${description.content}",
        "image": "${image.content}",
        "keywords": ["${keywords.content.replase(/,/g,`","`)}"],
        "articleBody" : "${main.innerText}",
        "articleSection" : "${main.innerText}",
        "url" : "${url.href}",
        "datePublished": "",
        "dateModified": "",
        "author": {"@type": "Person","name": "MrJaz"}
      },
      {
        "@type": "WebPage",
        "url": "${url.href}",
        "name": "${title.innerText}",
        "description": "${description.content}",
        "breadcrumb": "MrJaz > TemplateToy > Am2z",
        "potentialAction": {
          "@type": "ReadAction",
          "target": "${url.href}"
        }
      },
      {
        "@type":"CreativeWorkSeries",
        "name":"${title.innerText}",
        "aggregateRating":{
          "@type":"AggregateRating",
          "ratingValue":"5",
          "ratingCount":"69"
        }
      },
      {
        "@type": "CreativeWork",
        "name": "${title.innerText}"
        "headline": "${title.innerText}"
        "contentRating": "excellent",
        "image": "${image.content}",
        "author": "MrJaz",
        "publisher": {"name": "MrJaz"}
      }
    ]
  }`
  scri.type='application/ld+json'
  document.head.append(scri);

iframe.src='//templatetoy.mrjaz.com/?b='+iframe.title;
