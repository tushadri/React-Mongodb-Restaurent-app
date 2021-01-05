import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Details = () => {
    return(
        <div className="container">
            <div className="panel panel-success">
                <div className="panel-heading">
                    Hotel Detail
                </div>
                <div className="panel-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    <p>
                    Lorem Ipsum  Lorem Ipsum
                    </p>
                    <a href="https://www.facebook.com" target="_blank">FaceBook</a>
                    <div className="row">
                        <Tabs>
                            <TabList>
                                <Tab>Address</Tab>
                                <Tab>Contact</Tab>
                            </TabList>
                            <TabPanel>
                                <h2>Any content 1</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;