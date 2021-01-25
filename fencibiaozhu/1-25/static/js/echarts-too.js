
var dataMap2 = {
    "a": "Greg\nBilton",

    "aa": "Years\nofservice",
    "aaa": "1983–present",


    "ab": "born",
    "aba": "2 March 1965",

    "ac": "age",
    "aca": "54",


    "ad": "commands",
    "ada": "Chief of \nJointOperations",


    "ae": "current\nappointment",
    "aea": "1 July 2019",


    "af": "Battles",
    "afa": "Multinational\nForce and Observers",
    "afb": "War \ninAfghanistan",

    "ag": "Awards",
    "aga": "Member of \nthe Order \nof Australia",
    "agb": "Meritorious\nService Medal\n(Canada)",
    "agc": " Officer of \nthe Legion\nof Merit\n(United States)",
    "agaa": "Conspicuous\nService\nCross",
    "agba": "Defence\nCooperation\nMedal\n(Japan)",

    "ah": "Military\ncareer",
    "aha": "7th\nBrigade",
     "ahb": "Deputy Chief\nof Joint \nOperations",
    "ahc": "104th Field\nBattery",
    "ahd": "Forces\nCommand",
    "ahda": "4th Field\nRegimen",

    "aj": "rank",
    "aja": "Lieutenant\nGeneral"

    // "ak": "下属",
    // "aka": "驻韩美军司令部",
    // "akb": "驻日美军司令部",
    // "akc": "第8集团军司令部",
    // "akd": "阿拉斯加司令部",
    // "ake": "太平洋司令部\n特种作战司令部",
};

// 基于准备好的容器(这里的容器是id为chart1的div)，初始化echarts实例
var chart3 = echarts.init(document.getElementById("container-22"));

var option2 = {
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
            name: dataMap2["a"],
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
            name: dataMap2["aa"],
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
            name: dataMap2["aaa"],
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
        }, {
            name: dataMap2["ab"],
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
            name: dataMap2["aba"],
            symbolSize: 80,
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
            name: dataMap2["ac"],
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
            name: dataMap2["aca"],
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
            name: dataMap2["ad"],
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
            name: dataMap2["ada"],
            symbolSize: 110,
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
            name: dataMap2["ae"],
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
            name: dataMap2["aea"],
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
        }, {
            name: dataMap2["af"],
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
            name: dataMap2["afa"],
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
            name: dataMap2["afb"],
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
            name: dataMap2["ag"],
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
            name: dataMap2["aga"],
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
        }, {
            name: dataMap2["agb"],
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
            }
            // 数据项所在类目的 index。
        },
            {
                name: dataMap2["agc"],
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
                }
                // 数据项所在类目的 index。
            },
            {
                name: dataMap2["agaa"],
                symbolSize: 80,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#ff7425',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                }
                // 数据项所在类目的 index。
            },
            {
                name: dataMap2["agba"],
                symbolSize: 80,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#ff7425',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#04f2a7',
                        color: '#001c43',
                    }
                }
                // 数据项所在类目的 index。
            },
            {
                name: dataMap2["ah"],
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
                }
                // 数据项所在类目的 index。
            },
            {
                name: dataMap2["aha"],
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
                }
                // 数据项所在类目的 index。
            },
            {
                name: dataMap2["ahb"],
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
                }
                // 数据项所在类目的 index。
            },
            {
                name: dataMap2["ahc"],
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
                }
                // 数据项所在类目的 index。
            },
            {
                name: dataMap2["ahd"],
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
                }
                // 数据项所在类目的 index。
            },
            {
                name: dataMap2["ahda"],
                symbolSize: 90,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                       borderColor: '#ff7425',
                            borderWidth: 6,
                            shadowBlur: 20,
                            shadowColor: '#04f2a7',
                            color: '#001c43',
                    }
                }
                // 数据项所在类目的 index。
            },
            {
                name: dataMap2["aj"],
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
                }
                // 数据项所在类目的 index。
            },
            {
                name: dataMap2["aja"],
                symbolSize: 80,
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
            },
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
            value: 100, target: dataMap2['a'],
            source: dataMap2['aa']
        }, {                   // 节点间的关系数据
            value: 100, target: dataMap2['a'],
            source: dataMap2['ab']
        }, {                   // 节点间的关系数据
            value: 100, target: dataMap2['a'],
            source: dataMap2['ac']
        }, {                   // 节点间的关系数据
            value: 100, target: dataMap2['a'],
            source: dataMap2['ad']
        }, {                   // 节点间的关系数据
            value: 100, target: dataMap2['a'],
            source: dataMap2['ae']
        }, {                   // 节点间的关系数据
            value: 100, target: dataMap2['a'],
            source: dataMap2['af']
        }, {                   // 节点间的关系数据
            value: 100, target: dataMap2['a'],
            source: dataMap2['ag']
        }, {                   // 节点间的关系数据
            value: 100, target: dataMap2['a'],
            source: dataMap2['ah']
        }, {                   // 节点间的关系数据
            value: 100, target: dataMap2['a'],
            source: dataMap2['ai']
        }, {                   // 节点间的关系数据
            value: 100, target: dataMap2['a'],
            source: dataMap2['aj']
        },
       
        {                   // 节点间的关系数据
            value: 100, target: dataMap2['aa'],
            source: dataMap2['aaa']
        },
        {                   // 节点间的关系数据
            value: 100, target: dataMap2['ab'],
            source: dataMap2['aba']
        }, {                   // 节点间的关系数据
            value: 100, target: dataMap2['ac'],
            source: dataMap2['aca']
        }, {                   // 节点间的关系数据
            value: 100, target: dataMap2['ad'],
            source: dataMap2['ada']
        }, {                   // 节点间的关系数据
            value: 100, target: dataMap2['ae'],
            source: dataMap2['aea']
        }, {                   // 节点间的关系数据
            value: 100, target: dataMap2['ad'],
            source: dataMap2['ada']
        }, 
            {                   // 节点间的关系数据
                value: 100, target: dataMap2['af'],
                source: dataMap2['afa']
            },
            {                   // 节点间的关系数据
                value: 100, target: dataMap2['af'],
                source: dataMap2['afb']
            },
            {                   // 节点间的关系数据
                value: 100, target: dataMap2['ag'],
                source: dataMap2['aga']
            }, 
            {                   // 节点间的关系数据
                value: 100, target: dataMap2['aga'],
                source: dataMap2['agaa']
            },
            {                   // 节点间的关系数据
                value: 100, target: dataMap2['agb'],
                source: dataMap2['agba']
            },
            
            {                   // 节点间的关系数据
                value: 100, target: dataMap2['ag'],
                source: dataMap2['agb']
            },
            {                   // 节点间的关系数据
                value: 100, target: dataMap2['ag'],
                source: dataMap2['agc']
            },
            {                   // 节点间的关系数据
                value: 100, target: dataMap2['ag'],
                source: dataMap2['agd']
            },
            {                   // 节点间的关系数据
                value: 100, target: dataMap2['ah'],
                source: dataMap2['aha']
            },
            {                   // 节点间的关系数据
                value: 100, target: dataMap2['ah'],
                source: dataMap2['ahb']
            },
            {                   // 节点间的关系数据
                value: 100, target: dataMap2['ah'],
                source: dataMap2['ahc']
            },
            {                   // 节点间的关系数据
                value: 100, target: dataMap2['ah'],
                source: dataMap2['ahd']
            },
            {                   // 节点间的关系数据
                value: 100, target: dataMap2['ahd'],
                source: dataMap2['ahda']
            },
            {                   // 节点间的关系数据
                value: 100, target: dataMap2['aj'],
                source: dataMap2['aja']
            },
           
            
            
            
            
            
            
            
            
            {                // 节点间的关系数据
            target: dataMap2['al'],
            source: dataMap2['ajaaa'],
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
chart3.setOption(option2)