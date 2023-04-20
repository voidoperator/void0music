import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
// import { useStaticQuery, graphql } from "gatsby"

type MailtoProps = {
  className: string;
  email: string;
  subject: string;
  body: string;
  children: ReactNode;
};
const Mailto = ({ className, email, subject, body, children }: MailtoProps) => {
  return (
    <a className={className} href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}>
      {children}
    </a>
  );
};

const headerData = {
  logo: {
    url: 'none',
  },
  mobileLogo: {
    url: 'none',
  },
  contactMail: 'none',
  contactSubject: 'none',
  contactBody: {
    contactBody: 'none',
  },
};

const Header = () => {
  // const { headerData } = useStaticQuery(graphql`
  //   query {
  //     headerData: contentfulLayout {
  //       logo {
  //         url
  //       }
  //       mobileLogo {
  //         url
  //       }
  //       contactMail
  //       contactSubject
  //       contactBody {
  //         contactBody
  //       }
  //     }
  //   }
  // `)

  return (
    <header>
      <nav className='py-4 bg-black'>
        <div className='container flex items-center justify-between'>
          <Link to='/'>
            <img src={headerData?.mobileLogo.url} className='md:hidden' alt='Placeholder' />
          </Link>
          <div className='flex flex-row gap-6'>
            <ul className='flex items-center text-white'>
              <li>
                <Link className='text-lg' to='/'>
                  Test
                </Link>
              </li>
              <li>&nbsp;/&nbsp;</li>
              <li>
                <Link className='text-lg' to='/'>
                  Test
                </Link>
              </li>
            </ul>
            <Mailto
              className='py-2 px-6 text-white text-lg border-[1px] border-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'
              email={headerData?.contactMail}
              subject={headerData?.contactSubject}
              body={headerData?.contactBody.contactBody}
            >
              Contact
            </Mailto>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
