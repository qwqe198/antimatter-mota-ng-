main.floors.Start=
{
    "floorId": "Start",
    "title": "反物质宇宙",
    "name": "反物质宇宙",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": 892,
    "firstArrive": [
        {
            "type": "showStatusBar"
        },
        {
            "type": "previewUI",
            "action": [
                {
                    "type": "drawImage",
                    "image": "1.png",
                    "x": 0,
                    "y": 0,
                    "w": 50,
                    "h": 40
                }
            ]
        },
        {
            "type": "setEnemyOnPoint",
            "loc": [
                [
                    6,
                    6
                ]
            ],
            "name": "money",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:antimul",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:lcbjg",
            "value": "10"
        },
        {
            "type": "setValue",
            "name": "item:book",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:shop1",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:anti",
            "value": "10"
        },
        {
            "type": "setText",
            "align": "left",
            "lineHeight": 22
        },
        {
            "type": "choices",
            "text": "选择游戏难度",
            "choices": [
                {
                    "text": "简单",
                    "action": [
                        {
                            "type": "setValue",
                            "name": "flag:hard",
                            "value": "1"
                        },
                        {
                            "type": "setValue",
                            "name": "flag:antimul",
                            "value": "2"
                        },
                        "当前福利：反物质转化正物质比例x2"
                    ]
                },
                {
                    "text": "普通",
                    "action": [
                        {
                            "type": "setValue",
                            "name": "flag:hard",
                            "value": "2"
                        }
                    ]
                }
            ]
        },
        {
            "type": "function",
            "function": "function(){\nalert(\"这是一个由22222制作的反物质魔塔mod，该mod融合了很多著名增量游戏的玩法，并以魔塔的方式呈现出来，建议先到地图上方的水晶处看一下新的游戏机制哦~\")\n}"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,3": [
            {
                "type": "choices",
                "text": "\t[光暗,T903]第一世界 - 光暗\n最大维度提升：15",
                "choices": [
                    {
                        "text": "进入",
                        "color": [
                            117,
                            244,
                            82,
                            1
                        ],
                        "need": "item:greenKey>0",
                        "action": [
                            {
                                "type": "changeFloor",
                                "floorId": "W11",
                                "loc": [
                                    6,
                                    2
                                ],
                                "direction": "down"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:world",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I599",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "item:greenKey",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z1"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z2"
                            }
                        ]
                    },
                    {
                        "text": "离开",
                        "color": [
                            117,
                            240,
                            236,
                            1
                        ],
                        "action": []
                    }
                ]
            }
        ],
        "10,3": [
            {
                "type": "choices",
                "text": "\t[水火,A663]第二世界 - 水火\n最大维度提升：20",
                "choices": [
                    {
                        "text": "解锁【条件：获得10里程碑】",
                        "color": [
                            240,
                            221,
                            117,
                            1
                        ],
                        "need": "flag:m10==1",
                        "condition": "flag:q2==0&&flag:lvyaoshi>0",
                        "action": [
                            "解锁成功！",
                            {
                                "type": "setValue",
                                "name": "flag:q2",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "text": "进入",
                        "color": [
                            117,
                            244,
                            82,
                            1
                        ],
                        "need": "item:greenKey>0",
                        "condition": "flag:q2>0",
                        "action": [
                            {
                                "type": "changeFloor",
                                "floorId": "W21",
                                "loc": [
                                    5,
                                    1
                                ],
                                "direction": "down"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:world",
                                "value": "2"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I599",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "item:greenKey",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z1"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z2"
                            }
                        ]
                    },
                    {
                        "text": "离开",
                        "color": [
                            117,
                            240,
                            236,
                            1
                        ],
                        "action": []
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "choices",
                "choices": [
                    {
                        "text": "游戏介绍",
                        "color": [
                            123,
                            150,
                            229,
                            1
                        ],
                        "action": [
                            {
                                "type": "choices",
                                "choices": [
                                    {
                                        "text": "游戏简介",
                                        "action": [
                                            "这是一个反物质维度（Antimatter Dimensions）的魔塔同人作品！\n采用了一种类似原作高速膨胀的玩法，但——它是固定数值游戏！\n那么……你能够获得多少反物质呢？"
                                        ]
                                    },
                                    {
                                        "text": "维度提升",
                                        "action": [
                                            "每次打败世界内所有的BOSS，都会自动进行维度提升。\n维度提升之后，你拥有的反物质数量翻倍！\n并且你的宝石、血瓶效力提升40%！",
                                            "每次维度提升后，怪物都会变得更强大，\n如果感到难以支撑，可以打开背包，选择【离开世界】。"
                                        ]
                                    },
                                    {
                                        "text": "离开世界",
                                        "action": [
                                            "当你离开世界时，你剩余的反物质将按1:1转化为正物质。\n正物质可以购置你需要的各种资源，\n以让你在下一次重返世界时走得更远。\n你在这个世界中获得的加成也不复存在。"
                                        ]
                                    },
                                    {
                                        "text": "反物质星系",
                                        "action": [
                                            "你的维度提升是不能带出世界的，\n它将会转化为反物质星系储存。\n每个世界提供的星系数有一定限制。",
                                            "限制为：你在该世界获得的最大维度提升数。\n也就是说，你需要在获得尽可能多次维度提升的基础上，\n努力探索更多世界。",
                                            "在初始层【夕儿】处，可以查看反物质星系里程碑。\n每当你的星系数量达到要求时，都能领取奖励。\n奖励内容非常丰厚，甚至是能否继续游戏的关键所在！"
                                        ]
                                    },
                                    {
                                        "text": "大坍缩",
                                        "action": [
                                            "当你在世界之中获得了超过\n\r[yellow]9223372036854775807个\r反物质，\n并选择离开世界，此时你的宇宙将因为无法承受过多的反物质而崩溃。",
                                            "大坍缩之后，你得到一个无限点数，\n并前往一个新的宇宙，迎接崭新的挑战。"
                                        ]
                                    },
                                    {
                                        "text": "我按错啦",
                                        "action": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "回放录像",
                        "color": [
                            211,
                            103,
                            139,
                            1
                        ],
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.control.checkBgm()\n}"
                            },
                            {
                                "type": "if",
                                "condition": "(!core.isReplaying())",
                                "true": [
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.chooseReplayFile()\n}"
                                    }
                                ],
                                "false": []
                            }
                        ]
                    },
                    {
                        "text": "跳关选项",
                        "color": [
                            211,
                            198,
                            103,
                            1
                        ],
                        "action": [
                            {
                                "type": "choices",
                                "choices": [
                                    {
                                        "text": "第2幕",
                                        "color": [
                                            58,
                                            255,
                                            0,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:m14",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "changeFloor",
                                                "floorId": "boss",
                                                "loc": [
                                                    6,
                                                    12
                                                ],
                                                "time": 500
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:zdqg",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I588",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I590",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I729",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I848",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:lcb",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:greenKey",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:coin",
                                                "value": "0"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,5": [
            {
                "type": "choices",
                "text": "\t[日夜,A907]第三世界 - 日夜\n最大维度提升：25",
                "choices": [
                    {
                        "text": "解锁【条件：咕咕咕】",
                        "color": [
                            240,
                            221,
                            117,
                            1
                        ],
                        "need": "item:greenKey<4995",
                        "condition": "flag:q3==0&&flag:lvyaoshi>0",
                        "action": [
                            "解锁成功！",
                            {
                                "type": "setValue",
                                "name": "flag:q3",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "text": "进入",
                        "color": [
                            117,
                            244,
                            82,
                            1
                        ],
                        "need": "item:greenKey>0",
                        "condition": "flag:q3>0",
                        "action": [
                            {
                                "type": "changeFloor",
                                "floorId": "W31",
                                "loc": [
                                    6,
                                    12
                                ],
                                "direction": "down"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:world",
                                "value": "3"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I599",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "item:greenKey",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z1"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z2"
                            }
                        ]
                    },
                    {
                        "text": "离开",
                        "color": [
                            117,
                            240,
                            236,
                            1
                        ],
                        "action": []
                    }
                ]
            }
        ],
        "10,5": [
            {
                "type": "choices",
                "text": "\t[时空,A908]第四世界 - 时空\n最大维度提升：40",
                "choices": [
                    {
                        "text": "进入",
                        "color": [
                            117,
                            244,
                            82,
                            1
                        ],
                        "need": "flag:q4==1",
                        "action": [
                            {
                                "type": "changeFloor",
                                "floorId": "W41",
                                "loc": [
                                    6,
                                    8
                                ],
                                "direction": "up"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:world",
                                "value": "4"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I599",
                                "value": "0"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z1"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z2"
                            }
                        ]
                    },
                    {
                        "text": "离开",
                        "color": [
                            117,
                            240,
                            236,
                            1
                        ],
                        "action": []
                    }
                ]
            }
        ],
        "2,7": [
            {
                "type": "choices",
                "text": "\t[正邪,A909]第五世界 - 正邪\n最大维度提升：无限",
                "choices": [
                    {
                        "text": "解锁【条件：咕】",
                        "color": [
                            240,
                            221,
                            117,
                            1
                        ],
                        "need": "status:exp>=5e120",
                        "condition": "flag:q5==0&&flag:lvyaoshi>0",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:exp",
                                "operator": "-=",
                                "value": "5e12"
                            },
                            "解锁成功！",
                            {
                                "type": "setValue",
                                "name": "flag:q5",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "text": "进入",
                        "color": [
                            117,
                            244,
                            82,
                            1
                        ],
                        "need": "item:greenKey>0",
                        "condition": "flag:q5>0",
                        "action": [
                            {
                                "type": "changeFloor",
                                "floorId": "W51",
                                "loc": [
                                    6,
                                    12
                                ],
                                "direction": "down"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:world",
                                "value": "5"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I599",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "item:greenKey",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z1"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z2"
                            }
                        ]
                    },
                    {
                        "text": "离开",
                        "color": [
                            117,
                            240,
                            236,
                            1
                        ],
                        "action": []
                    }
                ]
            }
        ],
        "10,7": [
            {
                "type": "choices",
                "text": "\t[生死,A910]第六世界 - 生死\n最大维度提升：无限",
                "choices": [
                    {
                        "text": "解锁【条件：达到第三块反物质星系里程碑】",
                        "color": [
                            240,
                            221,
                            117,
                            1
                        ],
                        "need": "flag:lcb>=9999",
                        "condition": "flag:q6==0&&flag:lvyaoshi>0",
                        "action": [
                            "解锁成功！",
                            {
                                "type": "setValue",
                                "name": "flag:q6",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "text": "进入",
                        "color": [
                            117,
                            244,
                            82,
                            1
                        ],
                        "need": "item:greenKey>0",
                        "condition": "flag:q6>0",
                        "action": [
                            {
                                "type": "changeFloor",
                                "floorId": "W61",
                                "loc": [
                                    6,
                                    5
                                ],
                                "direction": "down"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:world",
                                "value": "6"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I599",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "item:greenKey",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z1"
                            },
                            {
                                "type": "disableShop",
                                "id": "Z2"
                            }
                        ]
                    },
                    {
                        "text": "离开",
                        "color": [
                            117,
                            240,
                            236,
                            1
                        ],
                        "action": []
                    }
                ]
            }
        ],
        "6,12": [
            {
                "type": "choices",
                "text": "\t[千夜,E716]如果你喜欢本作，\n可以关注我的B站账号：\r[yellow]幼年猫妖\r，以第一时间获取更新信息。\n和MOD作者的个人主页：\r[yellow]https://github.com/qwqe198\r，以第一时间获取更新信息。\n也可以加入讨论群\r[yellow]947190984\r，与作者和其他玩家交流讨论。\n每一份这样的支持都可以为作者提供更多的精神动力。",
                "choices": [
                    {
                        "text": "作者的个人主页",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\nwindow.open(\"https://space.bilibili.com/13853635?spm_id_from=333.1007.0.0\")\n}"
                            }
                        ]
                    },
                    {
                        "text": "MOD作者的GitHub个人主页",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\nwindow.open(\"https://github.com/qwqe198/\")\n}"
                            }
                        ]
                    },
                    {
                        "text": "作者的更多作品",
                        "action": [
                            {
                                "type": "choices",
                                "text": "\t[千夜,E716]B站账号：\r[yellow]幼年猫妖\r\n讨论群：\r[yellow]947190984\r",
                                "choices": [
                                    {
                                        "text": "星之葬",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Star/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "花之伤",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Flower/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "时盘乐园",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Time/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "完美生命",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Perfect/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "不死少女",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Alive/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "殉道者",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Martyr/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "空白",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Blank/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "纯黑",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Black/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "纸船效应",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Boat/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "下一页",
                                        "action": [
                                            {
                                                "type": "choices",
                                                "text": "\t[千夜,E716]B站账号：\r[yellow]幼年猫妖\r\n讨论群：\r[yellow]947190984\r",
                                                "choices": [
                                                    {
                                                        "text": "夜花吟",
                                                        "action": [
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Night/\")\n}"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "潮汐之囚",
                                                        "action": [
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Sea/\")\n}"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "光风霁月 ~ 晴之章",
                                                        "action": [
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/ToWish/\")\n}"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "花与泪的瞬间",
                                                        "action": [
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Forever/\")\n}"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "萤之盲",
                                                        "action": [
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Blind/\")\n}"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "夕之降",
                                                        "action": [
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/Decline/\")\n}"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "吃小雨",
                                                        "action": [
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/xiaoyu/\")\n}"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "返回上一页",
                                                        "action": [
                                                            {
                                                                "type": "insert",
                                                                "loc": [
                                                                    6,
                                                                    10
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "退出选项",
                                                        "action": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "MOD作者的更多作品",
                        "action": [
                            {
                                "type": "choices",
                                "text": "\t[22222,E716]",
                                "choices": [
                                    {
                                        "text": "怨种树",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://qwqe198.github.io/a-yuanzhongtree/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "春节树",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://qwqe198.github.io//the-Spring-Festival-tree/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "融合维度",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://shequ.codemao.cn/work/163216714/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "软上限增量",
                                        "action": [
                                            {
                                                "type": "function",
                                                "function": "function(){\nwindow.open(\"https://shequ.codemao.cn/work/163323492/\")\n}"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "退出选项",
                                        "action": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "退出选项",
                        "action": []
                    }
                ]
            }
        ],
        "6,6": [],
        "6,5": [],
        "5,2": [
            {
                "type": "switch",
                "condition": "flag:lcb",
                "caseList": [
                    {
                        "case": "0",
                        "action": [
                            "受到ng-1诅咒，已失效\n诅咒效果\n星系及其加成失效\n本宇宙怪属性倍增x1.3\n所有的自动化默认处于关闭状态\n正物质潮汐被削弱了"
                        ]
                    },
                    {
                        "case": "199999",
                        "action": [
                            {
                                "type": "choices",
                                "text": "\t[夕儿,N884]这里是反物质星系里程碑，\n记录着你最高获得的反物质星系数量。\n每当你的星系数量达到要求时，都能来到这里领取奖励。",
                                "choices": [
                                    {
                                        "text": "1  初始攻击+1",
                                        "icon": "I848",
                                        "need": "item:I848>=1",
                                        "condition": "flag:l1==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "status:atk",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:atk",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l1",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "2  初始防御+1",
                                        "icon": "I848",
                                        "need": "item:I848>=2",
                                        "condition": "flag:l2==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "status:def",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:def",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l2",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "3  杀怪获得反物质的速率+1倍",
                                        "icon": "I848",
                                        "need": "item:I848>=3",
                                        "condition": "flag:l3==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "item:coin",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l3",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "5  初始生命+800，能力的效力增加基础的20%",
                                        "icon": "I848",
                                        "need": "item:I848>=5",
                                        "condition": "flag:l4==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "status:hp",
                                                "operator": "+=",
                                                "value": "800"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:hp",
                                                "operator": "+=",
                                                "value": "800"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I731",
                                                "operator": "+=",
                                                "value": "0.2"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l4",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "8  初始反物质+1000",
                                        "icon": "I848",
                                        "need": "item:I848>=8",
                                        "condition": "flag:l5==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "1000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:anti",
                                                "operator": "+=",
                                                "value": "1000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l5",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "11  初始生命+1万，永久宝石效力+30%",
                                        "icon": "I848",
                                        "need": "item:I848>=11",
                                        "condition": "flag:l6==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "item:I606",
                                                "operator": "+=",
                                                "value": "0.3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:hp",
                                                "operator": "+=",
                                                "value": "10000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:hp",
                                                "operator": "+=",
                                                "value": "10000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l6",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "15  你开始于3个维度提升，并解锁下一里程碑",
                                        "icon": "I848",
                                        "need": "item:I848>=15",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "item:I729",
                                                "operator": "+=",
                                                "value": "3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:wdts",
                                                "operator": "+=",
                                                "value": "3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:lcb",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l1",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l2",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l3",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l4",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l5",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l6",
                                                "value": "0"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "离开",
                                        "action": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "case": "299999",
                        "action": [
                            {
                                "type": "choices",
                                "text": "\t[夕儿,N884]当前为第二块里程碑。",
                                "choices": [
                                    {
                                        "text": "15  初始反物质+1万，本宇宙怪属性倍增削弱1/8",
                                        "icon": "I848",
                                        "need": "item:I848>=15",
                                        "condition": "flag:l1==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "10000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:anti",
                                                "operator": "+=",
                                                "value": "10000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:un1",
                                                "operator": "*=",
                                                "value": "0.875"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l1",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "18  杀怪获得反物质的速率+25倍",
                                        "icon": "I848",
                                        "need": "item:I848>=18",
                                        "condition": "flag:l7==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "item:coin",
                                                "operator": "+=",
                                                "value": "25"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l7",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "24  正物质商店价格下降为90%，升级后失效",
                                        "icon": "I848",
                                        "need": "item:I848>=24",
                                        "condition": "flag:l2==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh1",
                                                "operator": "*=",
                                                "value": "0.9"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh2",
                                                "operator": "*=",
                                                "value": "0.9"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh3",
                                                "operator": "*=",
                                                "value": "0.9"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh4",
                                                "operator": "*=",
                                                "value": "0.9"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh5",
                                                "operator": "*=",
                                                "value": "0.9"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh6",
                                                "operator": "*=",
                                                "value": "0.9"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh7",
                                                "operator": "*=",
                                                "value": "0.9"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh8",
                                                "operator": "*=",
                                                "value": "0.9"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l2",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "32  角色受到的伤害在基础伤害上减少20%",
                                        "icon": "I848",
                                        "need": "item:I848>=32",
                                        "condition": "flag:l8==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "item:I730",
                                                "operator": "+=",
                                                "value": "0.2"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l8",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "36  初始生命+2万，攻击、防御+50",
                                        "icon": "I848",
                                        "need": "item:I848>=36",
                                        "condition": "flag:l4==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "status:hp",
                                                "operator": "+=",
                                                "value": "20000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:hp",
                                                "operator": "+=",
                                                "value": "20000"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:atk",
                                                "operator": "+=",
                                                "value": "50"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:atk",
                                                "operator": "+=",
                                                "value": "50"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:def",
                                                "operator": "+=",
                                                "value": "50"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:def",
                                                "operator": "+=",
                                                "value": "50"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l4",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "44  杀怪获得反物质的速率*2",
                                        "icon": "I848",
                                        "need": "item:I848>=44",
                                        "condition": "flag:l3==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "item:coin",
                                                "operator": "*=",
                                                "value": "2"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l3",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "50  永久宝石效力+30%",
                                        "icon": "I848",
                                        "need": "item:I848>=50",
                                        "condition": "flag:l5==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "item:I606",
                                                "operator": "+=",
                                                "value": "0.3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l5",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "60  你开始于6个维度提升，并解锁下一里程碑",
                                        "icon": "I848",
                                        "need": "item:I848>=60",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "item:I729",
                                                "operator": "+=",
                                                "value": "3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:wdts",
                                                "operator": "+=",
                                                "value": "3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:lcb",
                                                "value": "2"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l1",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l2",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l3",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l4",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l5",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l6",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l7",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l8",
                                                "value": "0"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "离开",
                                        "action": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "case": "399999",
                        "action": [
                            {
                                "type": "choices",
                                "text": "\t[夕儿,N884]当前为第三块里程碑。",
                                "choices": [
                                    {
                                        "text": "60  下一局游戏初始反物质+1000万",
                                        "icon": "I848",
                                        "need": "item:I848>=60",
                                        "condition": "flag:l6==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "1e7"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l6",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "64  本宇宙怪物属性倍增削弱1/10",
                                        "icon": "I848",
                                        "need": "item:I848>=64",
                                        "condition": "flag:l1==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:un1",
                                                "operator": "*=",
                                                "value": "0.9"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l1",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "72  初始攻防+200",
                                        "icon": "I848",
                                        "need": "item:I848>=72",
                                        "condition": "flag:l2==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "status:atk",
                                                "operator": "+=",
                                                "value": "200"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:atk",
                                                "operator": "+=",
                                                "value": "200"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:def",
                                                "operator": "+=",
                                                "value": "200"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:def",
                                                "operator": "+=",
                                                "value": "200"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l2",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "80  每把蓝钥匙提供0.6%防御效力，上限30把",
                                        "icon": "I848",
                                        "need": "item:I848>=80",
                                        "condition": "flag:l3==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "item:I595",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l3",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "90  维度提升时，反物质倍增+25%",
                                        "icon": "I848",
                                        "need": "item:I848>=90",
                                        "condition": "flag:l4==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:fwz2",
                                                "operator": "+=",
                                                "value": "0.25"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l4",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "100  击败怪物获得反物质的速率+500倍",
                                        "icon": "I848",
                                        "need": "item:I848>=100",
                                        "condition": "flag:l5==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "item:coin",
                                                "operator": "+=",
                                                "value": "500"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l5",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "115  能力的效力增加基础的100%",
                                        "icon": "I848",
                                        "need": "item:I848>=115",
                                        "condition": "flag:l6==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "item:I731",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l6",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "130  当前正物质数量翻五倍",
                                        "icon": "I848",
                                        "need": "item:I848>=130",
                                        "condition": "flag:l7==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "status:exp",
                                                "operator": "*=",
                                                "value": "5"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:l7",
                                                "value": "1"
                                            },
                                            {
                                                "type": "insert",
                                                "loc": [
                                                    4,
                                                    2
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "离开",
                                        "action": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,2": [
            {
                "type": "if",
                "condition": "(flag:jiaocheng2==0)",
                "true": [
                    "\t[零,N761]进行一局游戏后，正物质潮汐将会开启。"
                ],
                "false": [
                    {
                        "type": "switch",
                        "condition": "flag:zwz",
                        "caseList": [
                            {
                                "case": "0",
                                "action": [
                                    {
                                        "type": "comment",
                                        "text": "当判别值是值的场合执行此事件"
                                    },
                                    {
                                        "type": "openShop",
                                        "id": "Z",
                                        "open": true
                                    }
                                ]
                            },
                            {
                                "case": "1",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:z101==0)",
                                        "true": [
                                            {
                                                "type": "disableShop",
                                                "id": "Z"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh1",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh2",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh3",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh4",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh5",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh6",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh7",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh8",
                                                "value": "1"
                                            },
                                            {
                                                "type": "openShop",
                                                "id": "Z1",
                                                "open": true
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:z101",
                                                "value": "1"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "comment",
                                                "text": "当没有符合的值的场合执行default事件"
                                            },
                                            {
                                                "type": "openShop",
                                                "id": "Z1",
                                                "open": true
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "case": "2",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:z102==0)",
                                        "true": [
                                            {
                                                "type": "disableShop",
                                                "id": "Z1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh1",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh2",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh3",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh4",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh5",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh6",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh7",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:zh8",
                                                "value": "1"
                                            },
                                            {
                                                "type": "openShop",
                                                "id": "Z2",
                                                "open": true
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:z102",
                                                "value": "1"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "comment",
                                                "text": "当没有符合的值的场合执行default事件"
                                            },
                                            {
                                                "type": "openShop",
                                                "id": "Z2",
                                                "open": true
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,1": [
            {
                "type": "choices",
                "text": "这里可以获得里程碑",
                "choices": [
                    {
                        "text": "获得下一个里程碑，需要：${flag:lcbjg}正物质",
                        "icon": "lcb",
                        "condition": "EvalString_default",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:exp>=flag:lcbjg)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "item:lcb",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:lcbjg",
                                        "operator": "*=",
                                        "value": "3"
                                    }
                                ],
                                "false": [
                                    "当前正物质不够哦"
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,9": [],
        "2,1": [
            {
                "type": "switch",
                "condition": "flag:lcb",
                "caseList": [
                    {
                        "case": "0",
                        "action": [
                            {
                                "type": "choices",
                                "text": "\t[花叶,N707]这里可以根据里程碑数量获得一些加成",
                                "_collapsed": true,
                                "choices": [
                                    {
                                        "text": "离开",
                                        "condition": "EvalString_default",
                                        "action": []
                                    },
                                    {
                                        "text": "1 初始攻击+1",
                                        "icon": "lcb",
                                        "need": "item:lcb>=1",
                                        "condition": "flag:m1==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "status:atk",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:atk",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:m1",
                                                "operator": "+=",
                                                "value": "1"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "2 获得反物质速率+1",
                                        "icon": "lcb",
                                        "need": "item:lcb>=2",
                                        "condition": "flag:m2==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "item:coin",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:m2",
                                                "operator": "+=",
                                                "value": "1"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "3 初始反物质+50",
                                        "icon": "lcb",
                                        "need": "item:lcb>=3",
                                        "condition": "flag:m3==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "+=",
                                                "value": "50"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:anti",
                                                "operator": "+=",
                                                "value": "50"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:m3",
                                                "operator": "+=",
                                                "value": "1"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "4 初始攻防+3",
                                        "icon": "lcb",
                                        "need": "item:lcb>=4",
                                        "condition": "flag:m4==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "status:atk",
                                                "operator": "+=",
                                                "value": "3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "status:def",
                                                "operator": "+=",
                                                "value": "3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:atk",
                                                "operator": "+=",
                                                "value": "3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:def",
                                                "operator": "+=",
                                                "value": "3"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:m4",
                                                "operator": "+=",
                                                "value": "1"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "5 解锁声望",
                                        "icon": "lcb",
                                        "need": "item:lcb>=5",
                                        "condition": "flag:m5==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:lwjg",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:m5",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "openDoor",
                                                "loc": [
                                                    3,
                                                    9
                                                ]
                                            },
                                            {
                                                "type": "openDoor",
                                                "loc": [
                                                    9,
                                                    9
                                                ]
                                            },
                                            "这是大重置吗？"
                                        ]
                                    },
                                    {
                                        "text": "6 初始护盾+200",
                                        "icon": "lcb",
                                        "need": "item:lcb>=6",
                                        "condition": "flag:m6==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "status:mdef",
                                                "operator": "+=",
                                                "value": "200"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:mdef",
                                                "operator": "+=",
                                                "value": "200"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:m6",
                                                "operator": "+=",
                                                "value": "1"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "7 解锁下一列里程碑，初始维度提升+1",
                                        "icon": "lcb",
                                        "need": "item:lcb>=7",
                                        "condition": "flag:m7==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:lcb",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:m7",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:wdts",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I729",
                                                "operator": "+=",
                                                "value": "1"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "choices",
                                "text": "\t[花叶,N707]这里可以根据里程碑数量获得一些加成",
                                "choices": [
                                    {
                                        "text": "离开",
                                        "condition": "EvalString_default",
                                        "action": []
                                    },
                                    {
                                        "text": "8 本宇宙怪属性倍增指数1.3→1.2",
                                        "icon": "lcb",
                                        "need": "item:lcb>=8",
                                        "condition": "flag:m8==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:un1",
                                                "operator": "-=",
                                                "value": "0.1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:m8",
                                                "operator": "+=",
                                                "value": "1"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "9 领悟+1",
                                        "icon": "lcb",
                                        "need": "item:lcb>=9",
                                        "condition": "flag:m9==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:lw",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:m9",
                                                "operator": "+=",
                                                "value": "1"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "10 解锁[水火] 移除反物质潮汐1、3、5的价格底数",
                                        "icon": "lcb",
                                        "need": "item:lcb>=10",
                                        "condition": "flag:m10==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:q2",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:m10",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:sh1",
                                                "operator": "/=",
                                                "value": "10"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:sh3",
                                                "operator": "/=",
                                                "value": "10"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:sh5",
                                                "operator": "/=",
                                                "value": "15"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "11 永久宝石效力+20%",
                                        "icon": "lcb",
                                        "need": "item:lcb>=11",
                                        "condition": "flag:m11==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "item:I605",
                                                "operator": "+=",
                                                "value": "0.2"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:m11",
                                                "operator": "+=",
                                                "value": "1"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "12 这个魔塔开始变得不稳定了",
                                        "icon": "lcb",
                                        "need": "item:lcb>=12",
                                        "condition": "flag:m12==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:m12",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            "反物质转化正物质x（0~3），影响绿钥匙的效果"
                                        ]
                                    },
                                    {
                                        "text": "13 越来越不稳定了",
                                        "icon": "lcb",
                                        "need": "item:lcb>=13",
                                        "condition": "flag:m13==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:m13",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            "反物质转化正物质x（0~10）"
                                        ]
                                    },
                                    {
                                        "text": "14 进入第二幕",
                                        "icon": "lcb",
                                        "need": "item:lcb>=14",
                                        "condition": "flag:m14==0",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "flag:m14",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "changeFloor",
                                                "floorId": "boss",
                                                "loc": [
                                                    6,
                                                    12
                                                ],
                                                "time": 500
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:zdqg",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I588",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I590",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I729",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:I848",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:lcb",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:greenKey",
                                                "value": "0"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:coin",
                                                "value": "0"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,9": [
            {
                "type": "if",
                "condition": "(flag:plswd===1)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:swdhq",
                        "value": "(Math.max((Math.floor(((status:exp/3000)-1))),0))"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:pantijg===0)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:pantijg",
                        "value": "1"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:plcbjg===0)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:plcbjg",
                        "value": "10"
                    }
                ]
            },
            {
                "type": "choices",
                "text": "\t[夜芊,N874]这里可以进行声望重置\n需要3000正物质\n只会重置正物质数量\n当前拥有${flag:swd}声望点",
                "choices": [
                    {
                        "text": "获得 ${flag:swdhq+1}声望点",
                        "condition": "EvalString_default",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:exp>=3000)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:exp",
                                        "value": "0"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:swd",
                                        "operator": "+=",
                                        "value": "(flag:swdhq+1)"
                                    }
                                ],
                                "false": [
                                    "当前正物质不够哦"
                                ]
                            }
                        ]
                    },
                    {
                        "text": "获得1领悟 ${flag:lwjg+1}",
                        "condition": "EvalString_default",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(flag:swd>=(flag:lwjg+1))",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:swd",
                                        "operator": "-=",
                                        "value": "(flag:lwjg+1)"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:lw",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:lwjg",
                                        "operator": "*=",
                                        "value": "7"
                                    }
                                ],
                                "false": [
                                    "当前声望点不够哦"
                                ]
                            }
                        ]
                    },
                    {
                        "text": "反物质转化比例x2 ${flag:pantijg}",
                        "condition": "EvalString_default",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(flag:swd>=(flag:pantijg))",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:swd",
                                        "operator": "-=",
                                        "value": "(flag:pantijg)"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:antimul",
                                        "operator": "*=",
                                        "value": "2"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:pantijg",
                                        "operator": "*=",
                                        "value": "4"
                                    }
                                ],
                                "false": [
                                    "当前声望点不够哦"
                                ]
                            }
                        ]
                    },
                    {
                        "text": "获得1个里程碑 ${flag:plcbjg}",
                        "icon": "lcb",
                        "condition": "EvalString_default",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(flag:swd>=(flag:plcbjg))",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:swd",
                                        "operator": "-=",
                                        "value": "(flag:plcbjg)"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:lcb",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:plcbjg",
                                        "operator": "*=",
                                        "value": "10"
                                    }
                                ],
                                "false": [
                                    "当前声望点不够哦"
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,9": [
            {
                "type": "choices",
                "text": "\t[芊叶,npc1]这里可以用领悟兑换一些东西\n当前拥有${flag:lw}领悟\n同一价格的兑换顺序影响不大",
                "choices": [
                    {
                        "text": "极品黄宝石 1",
                        "icon": "I587",
                        "condition": "flag:lw1==0",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(flag:lw>=1)",
                                "true": [
                                    "攻防+4，护盾+20，生命+1000",
                                    {
                                        "type": "setValue",
                                        "name": "item:I587",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:atk",
                                        "operator": "+=",
                                        "value": "4"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:def",
                                        "operator": "+=",
                                        "value": "4"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:mdef",
                                        "operator": "+=",
                                        "value": "20"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:hp",
                                        "operator": "+=",
                                        "value": "1000"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:lw1",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:lw",
                                        "operator": "-=",
                                        "value": "1"
                                    }
                                ],
                                "false": [
                                    "当前领悟不够哦"
                                ]
                            }
                        ]
                    },
                    {
                        "text": "血雨I 1",
                        "icon": "I590",
                        "condition": "flag:lw2==0",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(flag:lw>=1)",
                                "true": [
                                    "战斗前6回合主角造成伤害x6，受到伤害÷6",
                                    {
                                        "type": "setValue",
                                        "name": "item:I590",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:lw2",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:lw",
                                        "operator": "-=",
                                        "value": "1"
                                    }
                                ],
                                "false": [
                                    "当前领悟不够哦"
                                ]
                            }
                        ]
                    },
                    {
                        "text": "清灵I 1",
                        "icon": "I591",
                        "condition": "flag:lw3==0",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(flag:lw>=1)",
                                "true": [
                                    "造成伤害的100%可以恢复自身生命\n（不允许负伤）",
                                    {
                                        "type": "setValue",
                                        "name": "item:I588",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:lw3",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:lw",
                                        "operator": "-=",
                                        "value": "1"
                                    }
                                ],
                                "false": [
                                    "当前领悟不够哦"
                                ]
                            }
                        ]
                    },
                    {
                        "text": "离开",
                        "condition": "EvalString_default",
                        "action": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {
        "6,6": [
            "你获得了5个里程碑 这表明你是个勇士 但现在游戏结束了 我将在这里亲手杀死你"
        ]
    },
    "afterBattle": {
        "6,6": [
            "你以为你已非常强大了吗 嘿嘿 错了只是我今天状态不佳而已 我走了  有本事到[水火]与我再打一次",
            {
                "type": "setValue",
                "name": "flag:autoqg",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "item:zdqg",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {
        "6,5": [
            {
                "type": "setValue",
                "name": "item:greenKey",
                "value": "5000"
            },
            {
                "type": "setValue",
                "name": "flag:lvyaoshi",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:un1",
                "value": "1.3"
            },
            "你获得了5000把【永恒之匙】。\n每一把永恒之匙，都能开启一次关卡。\n想要研究的玩家，请以保留尽可能多永恒之匙为目标努力吧。"
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {
        "2,9": {
            "0": null,
            "1": null,
            "2": null
        },
        "10,9": {
            "0": null,
            "1": null,
            "2": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [159,159,159,159,159,159,159,159,159,159,159,159,159],
    [159,159,709,  0,  0,159,102,159,  0,  0,713,159,159],
    [159,159,159,159,  0,884,  0,761,  0,159,159,159,159],
    [159,159,893,  0,  0,  0,600,  0,  0,  0,894,159,159],
    [159,159,159,159,  0,  0,  0,  0,  0,159,159,159,159],
    [159,159,895,  0,  0,  0,604,  0,  0,  0,896,159,159],
    [159,159,159,159,  0,  0,264,  0,  0,159,159,159,159],
    [159,159,897,  0,  0,  0,  0,  0,  0,  0,898,159,159],
    [159,159,159,159,  0,  0,  0,  0,  0,159,159,159,159],
    [159,159,874, 85,  0,  0,  0,  0,  0, 85,134,159,159],
    [159,159,159,159,159,159, 86,159,159,159,159,159,159],
    [159,159,159,159,159,159, 86,159,159,159,159,159,159],
    [159,159,159,159,159,159,891,159,159,159,159,159,159]
],
    "bgmap": [
    [892,892,892,892,892,892,892,892,892,892,892,892,892],
    [892,892,892,892,892,892,892,892,892,892,892,892,892],
    [892,892,892,892,892,892,892,892,892,892,892,892,892],
    [892,892,892,892,892,892,892,892,892,892,892,892,892],
    [892,892,892,892,892,892,892,892,892,892,892,892,892],
    [892,892,892,892,892,892,892,892,892,892,892,892,892],
    [892,892,892,892,892,892,892,892,892,892,892,892,892],
    [892,892,892,892,892,892,892,892,892,892,892,892,892],
    [892,892,892,892,892,892,892,892,892,892,892,892,892],
    [892,892,892,892,892,892,892,892,892,892,892,892,892],
    [892,892,892,892,892,892,892,892,892,892,892,892,892],
    [892,892,892,892,892,892,892,892,892,892,892,892,892],
    [892,892,892,892,892,892,892,892,892,892,892,892,892]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,101,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,10186,  0,  0,  0,  0,  0,10187,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,10188,  0,  0,  0,  0,  0,10189,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,10193,  0,  0,  0,  0,  0,10194,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "bgm": "bgm.mp3"
}