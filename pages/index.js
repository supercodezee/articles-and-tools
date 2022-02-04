import Slider from "react-slick";
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import styles from '../styles/articles.module.css'


// ────────────────────────────────────────────────────────────────────────────────

const header = 'Articles & Tools'

const content = [
  {
    type: 'article',
    title: '3 Money Lessons We All Learned from the Coronavirus',
    body: 'COVID-19 will have a lasting impact on how Americans handle our money.  Here are the main lessons we’ve learned.',
    img: 'https://www.axosbank.com/-/media/Axos/Images/Related-Articles/article-1.png',
    url: 'https://www.axosbank.com/blog/3-Money-Lessons-We-All-Learned-from-the-Coronavirus',
  },
  {
    type: 'article',
    title: 'Can I Still Refinance During COVID-19?',
    body: 'Even during a pandemic, many homeowners can benefit from refinancing when interest rates are at historic lows.',
    img: 'https://www.axosbank.com/-/media/Axos/Images/Related-Articles/article-3.png',
    url: 'https://www.axosbank.com/blog/Can-I-Still-Refinance-During-COVID-19',
  },
  {
    type: 'calculator',
    title: 'Rent or Buy Calculator',
    body: 'Calculate your potential savings whether you choose to rent or buy a home. Take a look at your options and see where you can save.',
    img: 'https://www.axosbank.com/-/media/Axos/Images/Related-Articles/article-2.png',
    url: 'https://www.axosbank.com/Tools/Calculators/Rent-or-Buy-Calculator',
  },
]

const sliderSettings = {
  infinite: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 0,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        // centerMode: true,
      }
    }

  ]
}

// ────────────────────────────────────────────────────────────────────────────────


export default function Articles() {
  return (
    <>
      <Head>
        <title>Article & Tools</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      
      <section className={styles.articles}>
        <div className={styles.container}>
          <div className={styles.articlesHeader}>
            <h2 className={styles.mainTitle}>{header}</h2>
          </div>
          <div className={styles.articlesWrapper}>
            <Slider {...sliderSettings}>
              {content.map((article, id) => {
                return (
                  <Link key={id} href={article.url} passHref>
                    <article className={styles.articleItem}>
                      <div
                        className={styles.articleImg}
                        role="figure"
                        style={{backgroundImage: `url(${article.img})`}}>
                      </div>
                      <div className={styles.infoWrapper}>
                        <Link href={article.url}>
                          <a className={styles.btnGradient}>{article.type}</a>
                        </Link>
                        <h3 className={styles.articleTitle}>{article.title}</h3>
                        <p className={styles.articleText}>{article.body}</p>
                      </div>
                    </article>
                  </Link>
                )
              })}
            </Slider>
          </div>
        </div>
      </section>


      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" strategy="beforeInteractive" />
      <Script src="https://kenwheeler.github.io/slick/slick/slick.js" strategy="beforeInteractive" />
    </>
  )
}