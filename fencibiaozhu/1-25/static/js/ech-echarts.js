
var dataMap1 = {
    "a": "印态司令部\n组织架构",

    "aa": "司令",
    "aaa": "菲利普·戴维森\n海军上将",
    

    "ab": "人力，人事\n与行政部",
    

    "ac": "情报部",
    

    "ad": "作战部",
    

    "ae": "后勤，工程与\n保密支援部",
    

    "af": "战略计划\n与政策部",

    "ag": "指挥，控制，通信\n与计算机系统部",

    "ah": "辖区",

    "aj": "首长办公室",

    "ak": "下属",
    "aka": "驻韩美军司令部",
    "akb": "驻日美军司令部",
    "akc": "第8集团军司令部",
    "akd": "阿拉斯加司令部",
    "ake": "太平洋司令部\n特种作战司令部",
};

// 基于准备好的容器(这里的容器是id为chart1的div)，初始化echarts实例
var chart2 = echarts.init(document.getElementById("container-2"));

var option1 = {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    title: {
        // text: '关系图'
    },
    // tooltip: {
    //     trigger: 'item',
    //     position: ['50%', '50%'],
    //     formatter: 
    // },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    color: ['#83e0ff', '#45f5ce', '#b158ff'],
    series: [{
        type: 'graph',
        layout: 'force',
        legendHoverLink: true,
        hoverAnimation: true,
        force: {
            repulsion: [100, 500],//节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
            gravity: 0.05,//节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
            edgeLength: [50, 100],//边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
            layoutAnimation: true
        },
        symbolSize: 50,
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        edgeSymbolSize: [4, 10],
        // edgeLabel: {
        //     normal: {
        //         show:true,
        //         textStyle: {
        //             fontSize: 13
        //         },
        //         formatter: "{c}"
        //     }
        // },
        data: [{
            name: dataMap1["a"],
            symbolSize: 120,
            draggable: true,
            category: 1,
            itemStyle: {
                normal: {
                    borderColor: '#04f2a7',
                    borderWidth: 6,
                    shadowBlur: 20,
                    shadowColor: '#04f2a7',
                    color: '#001c43',
                }
            },
            label: {
                color: '#04f2a7',
                fontWeight: 'bold',
                fontSize: 20
            }
            // 数据项所在类目的 index。
        }, {
            name: dataMap1["aa"],
            symbolSize: 80,
            draggable: true,
            category: 1,
            itemStyle: {
                normal: {
                    borderColor: '#82dffe',
                    borderWidth: 6,
                    shadowBlur: 20,
                    shadowColor: '#04f2a7',
                    color: '#001c43',
                }
            },
            // 数据项所在类目的 index。
            }, 
            {
                name: dataMap1["aaa"],
                symbolSize: 90,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#b457ff',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                },
                // 数据项所在类目的 index。
            },{
                name: dataMap1["ab"],
                symbolSize: 90,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#82dffe',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                },
                // 数据项所在类目的 index。
            }, {
                name: dataMap1["ac"],
                symbolSize: 80,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#82dffe',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                },
                // 数据项所在类目的 index。
            },
            {
                name: dataMap1["ad"],
                symbolSize: 80,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#82dffe',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                },
                // 数据项所在类目的 index。
            },
            {
                name: dataMap1["ae"],
                symbolSize: 100,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#82dffe',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                },
                // 数据项所在类目的 index。
            },
            {
                name: dataMap1["af"],
                symbolSize: 100,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#82dffe',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                },
                // 数据项所在类目的 index。
            },
            {
                name: dataMap1["ag"],
                symbolSize: 110,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#82dffe',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                },
                // 数据项所在类目的 index。
            },
            {
                name: dataMap1["ah"],
                symbolSize: 80,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#82dffe',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                },
                // 数据项所在类目的 index。
            },
           
            {
                name: dataMap1["aj"],
                symbolSize: 90,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#82dffe',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                },
                // 数据项所在类目的 index。
            }, {
                name: dataMap1["ak"],
                symbolSize: 60,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#82dffe',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                },
                // 数据项所在类目的 index。
            },
            {
                name: dataMap1["aka"],
                symbolSize: 60,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#b457ff',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                },
                // 数据项所在类目的 index。
            }, {
                name: dataMap1["akb"],
                symbolSize: 60,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#b457ff',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                },
                // 数据项所在类目的 index。
            }, {
                name: dataMap1["akc"],
                symbolSize: 60,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#b457ff',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                },
                // 数据项所在类目的 index。
            },
            {
                name: dataMap1["akd"],
                symbolSize: 60,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#b457ff',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                },
                // 数据项所在类目的 index。
            }, {
                name: dataMap1["ake"],
                symbolSize: 60,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#b457ff',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                }
                // 数据项所在类目的 index。
            }
           ],
        categories: [{              // 节点分类的类目，可选。如果节点有分类的话可以通过 data[i].category 指定每个节点的类目，类目的样式会被应用到节点样式上。图例也可以基于categories名字展现和筛选。
            name: "1"            // 类目名称，用于和 legend 对应以及格式化 tooltip 的内容。
        }, {
            name: "2"
        }, {
            name: "3"
        }, {
            name: "4"
        }, {
            name: "5"
        }],
        links: [{                   // 节点间的关系数据
            value: 100, target: dataMap1['a'],
            source: dataMap1['aa']
        }, {                   // 节点间的关系数据
                value: 100, target: dataMap1['a'],
                source: dataMap1['ab']
            }, {                   // 节点间的关系数据
                value: 100, target: dataMap1['a'],
                source: dataMap1['ac']
            }, {                   // 节点间的关系数据
                value: 100, target: dataMap1['a'],
                source: dataMap1['ad']
            }, {                   // 节点间的关系数据
                value: 100, target: dataMap1['a'],
                source: dataMap1['ae']
            }, {                   // 节点间的关系数据
                value: 100, target: dataMap1['a'],
                source: dataMap1['af']
            }, {                   // 节点间的关系数据
                value: 100, target: dataMap1['a'],
                source: dataMap1['ag']
            }, {                   // 节点间的关系数据
                value: 100, target: dataMap1['a'],
                source: dataMap1['ah']
            }, {                   // 节点间的关系数据
                value: 100, target: dataMap1['a'],
                source: dataMap1['ai']
            }, {                   // 节点间的关系数据
                value: 100, target: dataMap1['a'],
                source: dataMap1['aj']
            },
            {                   // 节点间的关系数据
                value: 100, target: dataMap1['a'],
                source: dataMap1['ak']
            },
            {                   // 节点间的关系数据
                value: 100, target: dataMap1['aa'],
                source: dataMap1['aaa']
            },
            {                   // 节点间的关系数据
                value: 100, target: dataMap1['ak'],
                source: dataMap1['aka']
            }, {                   // 节点间的关系数据
                value: 100, target: dataMap1['ak'],
                source: dataMap1['akb']
            }, {                   // 节点间的关系数据
                value: 100, target: dataMap1['ak'],
                source: dataMap1['akc']
            }, {                   // 节点间的关系数据
                value: 100, target: dataMap1['ak'],
                source: dataMap1['akd']
            }, {                   // 节点间的关系数据
                value: 100, target: dataMap1['ak'],
                source: dataMap1['ake']
            }, {                // 节点间的关系数据
             target: dataMap1['al'],
            source: dataMap1['ajaaa'],
            lineStyle: {
                "type": "dotted",
                "width": 5
            },
            label: {
                "show": true,
                "formatter": "关联",
                "fontSize": 30,
                // "color":"black"
            }
        }]
    }],

    animationEasingUpdate: "quinticInOut",          // 数据更新动画的缓动效果。[ default: cubicOut ]    "quinticInOut"
    animationDurationUpdate: 100                    // 数据更新动画的时长。[ default: 300 ]
};

// 使用刚指定的配置项和数据显示图表
chart2.setOption(option1)