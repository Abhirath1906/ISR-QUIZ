import React, { useState } from "react";
import Link from "next/link";
import { List, Card, Layout, Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;


export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();

    return {
        props: {
            data,  
            lastUpdatedAt: new Date().toLocaleString("id-ID"),
        },
        revalidate: 30,
    };
}

export default function SSGStudents({ data, lastUpdatedAt }) {
    const [Open, setOpen] = useState(false);

    return (
        <>
            <Layout>

                
                <Drawer
                    open={Open}
                    placement="left"
                    onClose={() => setOpen(false)}
                    style={{ backgroundColor: "black", color: "white" }}
                >
                    <Menu mode="inline" theme="dark" style={{ backgroundColor: "black" }}>
                        <Menu.Item><Link href="/">Home</Link></Menu.Item>
                    </Menu>
                </Drawer>

                <Header style={{ background: "black", color: "white" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                        <MenuOutlined
                            onClick={() => setOpen(true)}
                            style={{ fontSize: "30px", cursor: "pointer", color: "white" }}
                        />
                        <p style={{ fontSize: "30px", fontWeight: "bold", margin: 0 }}>
                            ABBYCIHUY
                        </p>
                    </div>
                </Header>

                
                <Content style={{ padding: "50px", backgroundColor: "white", minHeight: "100vh" }}>
                    <p style={{ fontSize: "40px", fontWeight: "bold" }}>SSG Todos Page</p>

                   
                    <p style={{ fontSize: "14px", color: "gray" }}>
                        <strong>Last Updated:</strong> {lastUpdatedAt}
                        <br />
                        <em>This page automatically regenerates every 30 seconds.</em>
                    </p>

                    <Card style={{ marginTop: "20px" }}>
                        <List
                            bordered
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item>
                                    <div>
                                        <strong>ID:</strong> {item.id} <br />
                                        <strong>Title:</strong> {item.title} <br />
                                        <strong>Completed:</strong> {item.completed ? "Yes" : "No"}
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Content>
            </Layout>
        </>
    );
}
