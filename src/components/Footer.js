import React from 'react';
import styled from 'styled-components';
import FooterColum from './footerColum';
import PText from './PText';


export default function Footer() {
    return (
        <FooterStyled>
            <div className="container">
                {/* <div className="footer__col1">
                    <h1 className="footer__col1__title">Ayan Khan</h1>
                    <PText>
                        A freelance web designer and developer from Chittagong, Bangladesh.
                        I always make websites that have unique designs and also has a good
                        performance rate.
                    </PText>
                </div> */}
                <div className="footer__col2">
                    <FooterColum
                        heading="Important Links"
                        links={[
                            {
                                title: 'About',
                                path: '/',
                                type: 'Link',
                            },
                            {
                                type: 'Link',
                                title: 'Pillars & Program',
                                path: '/about',
                            },
                            {
                                type: 'Link',
                                title: 'Reports',
                                path: '/projects',
                            },
                            {
                                type: 'Link',
                                title: 'Media',
                                path: '/projects',
                            },
                            {
                                type: 'Link',
                                title: 'Contact',
                                path: '/contact',
                            },
                        ]}
                    />
                </div>
                <div className="footer__col3">
                    <FooterColum
                        heading="Contact Info"
                        links={[
                            {
                                title: '+628119581200',
                                path: 'tel:+628119581200',
                            },
                            {
                                title: 'info@rednosefoundation.org',
                                path: 'mailto:info@rednosefoundation.org',
                            },
                            {
                                title: 'Jl. Kali Baru Timur 11 No.12, RT.12/RW.2, Kali Baru, Kec. Cilincing, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14110, Indonesia',
                                path: 'https://goo.gl/maps/FVVFgWp13L4kszfL6',
                            },
                        ]}
                    />
                </div>
                <div className="footer__col4">
                    <FooterColum
                        heading="social Links"
                        links={[
                            {
                                title: 'Facebook',
                                path: 'http://facebook.com',
                            },
                            {
                                title: 'Twitter',
                                path: 'http://twitter.com',
                            },
                            {
                                title: 'Instagram',
                                path: 'https://www.instagram.com/rednosefoundation/',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <PText>
                        © 2021 - Rednose Foundation
                    </PText>
                </div>
            </div>
        </FooterStyled>
    )
}


const FooterStyled = styled.div`
  background-color: var(--rn-blue);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 10rem;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--rn-primary);
    text-align: center;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 40;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;