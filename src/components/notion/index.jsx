import { Fragment, useEffect, useState } from 'react';
import { NotionRenderer } from 'react-notion';
import axios from 'axios';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; // only needed for code highlighting
import '../../assets/index.css';

const ReactNotion = () => {
  const [response, setResponse] = useState({});
  useEffect(() => {
    const NOTION_PAGE_ID =
      'Development-Records-2020-present-2d59c0e0e9644b1ab1d374baa9f6872f';
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setResponse(data);
      });
  }, []);

  const notionCard = {
    maxHeight: '26em',
    overflow: 'auto',
  };

  return (
    Object.keys(response).length && (
      // <>
    //   <div
    //   className="col-span-1 lg:col-span-2 card shadow-lg compact bg-base-100 "
    //   style={notionCard}
    // >
    //   <div className="flex justify-between flex-col p-8 h-full w-full">
    //     <div>
    //       <div className="notion_w100">
    //         <NotionRenderer blockMap={response} fullPage={true} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
      // </>

      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          {/*<div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">
                    Education
                  </span>
                )}
              </h5> 
            </div>*/}
          <div className="text-base-content text-opacity-60">
            <div
              className="col-span-1 lg:col-span-2 card shadow-lg compact bg-base-100 "
              style={notionCard}
            >
              <div className="flex justify-between flex-col p-8 h-full w-full">
                <div>
                  <div className="notion_w100">
                    <NotionRenderer blockMap={response} fullPage={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ReactNotion;
