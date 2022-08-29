import React, { Component } from 'react';
import './app.scss';
/*import { Button, Content } from '@carbon/react';*/
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import { Content, Theme } from '@carbon/react';
/*import slzState from './slzgui/lib/state';*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        resource_groups: [
          {
            create: true,
            name: 'service-rg',
            use_prefix: true,
          },
          {
            create: true,
            name: 'management-rg',
            use_prefix: true,
          },
          {
            create: true,
            name: 'workload-rg',
            use_prefix: true,
          },
        ],
        vpcs: [
          {
            classic_access: false,
            default_network_acl_name: null,
            default_routing_table_name: null,
            default_security_group_name: null,
            default_security_group_rules: [],
            use_manual_address_prefixes: false,
            flow_logs_bucket_name: 'management-bucket',
            network_acls: [
              {
                add_cluster_rules: true,
                name: 'management-acl',
                rules: [
                  {
                    action: 'allow',
                    destination: '10.0.0.0/8',
                    direction: 'inbound',
                    name: 'allow-ibm-inbound',
                    source: '161.26.0.0/16',
                    icmp: {
                      type: null,
                      code: null,
                    },
                    tcp: {
                      port_min: null,
                      port_max: null,
                      source_port_min: null,
                      source_port_max: null,
                    },
                    udp: {
                      port_min: null,
                      port_max: null,
                      source_port_min: null,
                      source_port_max: null,
                    },
                  },
                  {
                    action: 'allow',
                    destination: '10.0.0.0/8',
                    direction: 'inbound',
                    name: 'allow-all-network-inbound',
                    source: '10.0.0.0/8',
                    icmp: {
                      type: null,
                      code: null,
                    },
                    tcp: {
                      port_min: null,
                      port_max: null,
                      source_port_min: null,
                      source_port_max: null,
                    },
                    udp: {
                      port_min: null,
                      port_max: null,
                      source_port_min: null,
                      source_port_max: null,
                    },
                  },
                  {
                    action: 'allow',
                    destination: '0.0.0.0/0',
                    direction: 'outbound',
                    name: 'allow-all-outbound',
                    source: '10.0.0.0/8',
                    icmp: {
                      type: null,
                      code: null,
                    },
                    tcp: {
                      port_min: null,
                      port_max: null,
                      source_port_min: null,
                      source_port_max: null,
                    },
                    udp: {
                      port_min: null,
                      port_max: null,
                      source_port_min: null,
                      source_port_max: null,
                    },
                  },
                ],
              },
            ],
            prefix: 'management',
            resource_group: 'slz-management-rg',
            subnets: {
              'zone-1': [
                {
                  acl_name: 'management-acl',
                  cidr: '10.10.10.0/24',
                  name: 'vsi-zone-1',
                  public_gateway: false,
                },
                {
                  acl_name: 'management-acl',
                  cidr: '10.10.20.0/24',
                  name: 'vpe-zone-1',
                  public_gateway: false,
                },
                {
                  acl_name: 'management-acl',
                  cidr: '10.10.30.0/24',
                  name: 'vpn-zone-1',
                  public_gateway: false,
                },
              ],
              'zone-2': [
                {
                  acl_name: 'management-acl',
                  cidr: '10.20.10.0/24',
                  name: 'vsi-zone-2',
                  public_gateway: false,
                },
                {
                  acl_name: 'management-acl',
                  cidr: '10.20.20.0/24',
                  name: 'vpe-zone-2',
                  public_gateway: false,
                },
              ],
              'zone-3': [
                {
                  acl_name: 'management-acl',
                  cidr: '10.30.10.0/24',
                  name: 'vsi-zone-3',
                  public_gateway: false,
                },
                {
                  acl_name: 'management-acl',
                  cidr: '10.30.20.0/24',
                  name: 'vpe-zone-3',
                  public_gateway: false,
                },
              ],
            },
            use_public_gateways: {
              'zone-1': false,
              'zone-2': false,
              'zone-3': false,
            },
          },
          {
            default_security_group_rules: [],
            flow_logs_bucket_name: 'workload-bucket',
            classic_access: false,
            default_network_acl_name: null,
            default_routing_table_name: null,
            default_security_group_name: null,
            default_security_group_rules: [],
            use_manual_address_prefixes: false,
            network_acls: [
              {
                add_cluster_rules: true,
                name: 'workload-acl',
                rules: [
                  {
                    action: 'allow',
                    destination: '10.0.0.0/8',
                    direction: 'inbound',
                    name: 'allow-ibm-inbound',
                    source: '161.26.0.0/16',
                    icmp: {
                      type: null,
                      code: null,
                    },
                    tcp: {
                      port_min: null,
                      port_max: null,
                      source_port_min: null,
                      source_port_max: null,
                    },
                    udp: {
                      port_min: null,
                      port_max: null,
                      source_port_min: null,
                      source_port_max: null,
                    },
                  },
                  {
                    action: 'allow',
                    destination: '10.0.0.0/8',
                    direction: 'inbound',
                    name: 'allow-all-network-inbound',
                    source: '10.0.0.0/8',
                    icmp: {
                      type: null,
                      code: null,
                    },
                    tcp: {
                      port_min: null,
                      port_max: null,
                      source_port_min: null,
                      source_port_max: null,
                    },
                    udp: {
                      port_min: null,
                      port_max: null,
                      source_port_min: null,
                      source_port_max: null,
                    },
                  },
                  {
                    action: 'allow',
                    destination: '0.0.0.0/0',
                    direction: 'outbound',
                    name: 'allow-all-outbound',
                    source: '10.0.0.0/8',
                    icmp: {
                      type: null,
                      code: null,
                    },
                    tcp: {
                      port_min: null,
                      port_max: null,
                      source_port_min: null,
                      source_port_max: null,
                    },
                    udp: {
                      port_min: null,
                      port_max: null,
                      source_port_min: null,
                      source_port_max: null,
                    },
                  },
                ],
              },
            ],
            prefix: 'workload',
            resource_group: 'slz-workload-rg',
            subnets: {
              'zone-1': [
                {
                  acl_name: 'workload-acl',
                  cidr: '10.40.10.0/24',
                  name: 'vsi-zone-1',
                  public_gateway: false,
                },
                {
                  acl_name: 'workload-acl',
                  cidr: '10.40.20.0/24',
                  name: 'vpe-zone-1',
                  public_gateway: false,
                },
              ],
              'zone-2': [
                {
                  acl_name: 'workload-acl',
                  cidr: '10.50.10.0/24',
                  name: 'vsi-zone-2',
                  public_gateway: false,
                },
                {
                  acl_name: 'workload-acl',
                  cidr: '10.50.20.0/24',
                  name: 'vpe-zone-2',
                  public_gateway: false,
                },
              ],
              'zone-3': [
                {
                  acl_name: 'workload-acl',
                  cidr: '10.60.10.0/24',
                  name: 'vsi-zone-3',
                  public_gateway: false,
                },
                {
                  acl_name: 'workload-acl',
                  cidr: '10.60.20.0/24',
                  name: 'vpe-zone-3',
                  public_gateway: false,
                },
              ],
            },
            use_public_gateways: {
              'zone-1': false,
              'zone-2': false,
              'zone-3': false,
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
          {() => console.log(this.state.schema)}
        </Content>
      </>
    );
  }
}

export default App;
