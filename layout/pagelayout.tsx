import { PropsWithChildren } from 'react';
import { Nav, Sidebar, Footer } from '@components/.';

export default function Pagelayout({ children }: PropsWithChildren<{}>) {
    return (
        <div className='pagelayout'>
            <div className='page-grid'>
                <div className='nav-grid'>
                    <Nav />
                </div>
                <div className='sidebar-grid'>
                    <Sidebar />
                </div>
                <div className='content-grid'>{children}</div>
                <div className='footer-grid'>
                    <Footer />
                </div>
            </div>

            <style jsx>
                {`
                    .pagelayout {
                        background-color: white;
                        height: 100vh;
                        overflow: hidden;
                        width: 100%;
                    }
                    .page-grid {
                        display: grid;
                        grid-template-columns: 200px 1fr;
                        grid-template-rows: 1fr 12fr 1fr;
                        height: 100vh;
                        width: 100%;
                    }

                    .nav-grid {
                        grid-column: 1/3;
                        grid-row: 1;
                    }

                    .sidebar-grid {
                        grid-column: 1/1;
                        grid-row: 2/3;
                    }
                    .content-grid {
                        grid-column: 2/3;
                        grid-row: 2/3;
                    }
                    .footer-grid {
                        grid-column: 1/3;
                        grid-row: 3/4;
                    }
                `}
            </style>
        </div>
    );
}
