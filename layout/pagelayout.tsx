import { PropsWithChildren } from 'react';
import { Nav, Sidebar, Footer } from '@components/.';

export default function Pagelayout({ children }: PropsWithChildren<{}>) {
    return (
        <div className='pagelayout'>
            <div className='page-grid'>
                <div className='nav'>
                    <Nav />
                </div>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='content'>{children}</div>
                <div className='footer'>
                    <Footer />
                </div>
            </div>

            <style jsx>
                {`
                    .pagelayout {
                        background-color: gray;
                        height: 100vh;
                        overflow: hidden;
                        width: 100%;
                    }
                `}
            </style>
        </div>
    );
}
