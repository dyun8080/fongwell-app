import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { Route, Switch, Link, RouteComponentProps } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { STORE_ROUTER } from './constants/stores'
import { RouterStore } from './stores'

const { Header, Content, Footer, Sider } = Layout
// const SubMenu = Menu.SubMenu

@inject(STORE_ROUTER)
@observer
class SiderDemo extends React.Component<RouteComponentProps<any>, any> {
	routerStore = this.props[STORE_ROUTER] as RouterStore

	state = {
		collapsed: false,
	}

	componentWillMount() {
		const { innerWidth } = window

		if (innerWidth < 1420) {
			this.setState({
				collapsed: true,
			})
		}
	}

	onCollapse = (collapsed) => {
		this.setState({ collapsed })
	}

	render() {
		const { pathname } = this.props.location

		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider
					collapsible
					width={180}
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
				>
					<div className="logo" />
					<Menu
						theme="dark"
						selectedKeys={[pathname]}
						mode="inline">
						{RouterStore.RouteList.filter(i => !i.hide).map(item => (
							<Menu.Item key={item.url}>
								<Link to={item.url}>
									<Icon type="pie-chart" /><span>{item.title}</span>
								</Link>
							</Menu.Item>
						))}
						{/* <SubMenu
							key="sub1"
							title={<span><Icon type="user" /><span>User</span></span>}
						>
							<Menu.Item key="3">Tom</Menu.Item>
							<Menu.Item key="4">Bill</Menu.Item>
							<Menu.Item key="5">Alex</Menu.Item>
						</SubMenu> */}
					</Menu>
				</Sider>

				<Layout>
					<Header style={{ background: '#fff', padding: 0 }} />
					<Content style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						<Switch>
							{RouterStore.RouteList.map(item => {
								return <Route exact path={item.url} key={item.title} render={props => {
									const { Component } = item
									return <Component {...item} {...props} />
								}} />
							})}
						</Switch>
					</Content>

					<Footer style={{ textAlign: 'center' }}>
						Ant Design ©2016 Created by Ant UED
          </Footer>

				</Layout>

			</Layout>
		)
	}
}

export default SiderDemo
