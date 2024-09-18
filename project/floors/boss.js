main.floors.boss=
{
    "floorId": "boss",
    "title": "里程碑层级",
    "name": "M",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": 902,
    "bgm": "1.mp3",
    "firstArrive": [
        {
            "type": "previewUI",
            "action": [
                {
                    "type": "clearMap"
                },
                {
                    "type": "drawImage",
                    "image": "2.png",
                    "x": 0,
                    "y": 0,
                    "w": 50,
                    "h": 40
                }
            ]
        },
        "一些东西消失了",
        "解锁了新的商店",
        "当前复杂度：1\n下一次复杂度提升将于5里程碑\n效果：\n单怪转换\n道具无需周转，想用即用",
        "最上面机关门于4里程碑开启",
        {
            "type": "if",
            "condition": "(flag:hard===1)",
            "true": [
                "简单难度开启前4个机关门",
                {
                    "type": "openDoor",
                    "loc": [
                        1,
                        10
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        11,
                        10
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        2,
                        3
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        10,
                        4
                    ]
                }
            ]
        },
        {
            "type": "openShop",
            "id": "b1"
        },
        {
            "type": "disableShop",
            "id": "S"
        },
        {
            "type": "disableShop",
            "id": "Z"
        },
        {
            "type": "setValue",
            "name": "flag:point",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:bossup",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "status:hp",
            "value": "100"
        },
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "10"
        },
        {
            "type": "setValue",
            "name": "status:def",
            "value": "10"
        },
        {
            "type": "setValue",
            "name": "status:mdef",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "status:money",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "status:exp",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:atkmul",
            "value": "1.2"
        },
        {
            "type": "setValue",
            "name": "flag:defmul",
            "value": "1.2"
        },
        {
            "type": "setValue",
            "name": "flag:hpmul",
            "value": "1.5"
        },
        {
            "type": "setEnemyOnPoint",
            "loc": [
                [
                    2,
                    11
                ]
            ],
            "name": "hp",
            "value": "100"
        },
        {
            "type": "setEnemyOnPoint",
            "loc": [
                [
                    2,
                    11
                ]
            ],
            "name": "atk",
            "value": "15"
        },
        {
            "type": "setEnemyOnPoint",
            "loc": [
                [
                    2,
                    11
                ]
            ],
            "name": "def",
            "value": "5"
        },
        {
            "type": "setEnemy",
            "id": "loader",
            "name": "special",
            "value": "null"
        },
        {
            "type": "if",
            "condition": "(flag:hard===2)",
            "true": [
                {
                    "type": "choices",
                    "text": "需要小幅降低难度吗",
                    "choices": [
                        {
                            "text": "我菜",
                            "action": [
                                "攻防+2，黄钥匙+1，分数/100",
                                {
                                    "type": "setValue",
                                    "name": "status:atk",
                                    "value": "12"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:def",
                                    "value": "12"
                                },
                                {
                                    "type": "setValue",
                                    "name": "item:yellowKey",
                                    "value": "1"
                                },
                                {
                                    "type": "setValue",
                                    "name": "flag:point",
                                    "operator": "*=",
                                    "value": "100"
                                }
                            ]
                        },
                        {
                            "text": "不需要哦",
                            "action": []
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,6": [],
        "6,0": []
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "2,11": [
            {
                "type": "setBlock",
                "number": "loader",
                "loc": [
                    [
                        10,
                        11
                    ]
                ]
            },
            {
                "type": "setEnemyOnPoint",
                "loc": [
                    [
                        10,
                        11
                    ]
                ],
                "name": "hp",
                "value": "200"
            },
            {
                "type": "setEnemyOnPoint",
                "loc": [
                    [
                        10,
                        11
                    ]
                ],
                "name": "atk",
                "value": "30"
            },
            {
                "type": "setEnemyOnPoint",
                "loc": [
                    [
                        10,
                        11
                    ]
                ],
                "name": "def",
                "value": "10"
            }
        ],
        "10,11": [
            {
                "type": "setBlock",
                "number": "loader",
                "loc": [
                    [
                        1,
                        4
                    ]
                ]
            },
            {
                "type": "setEnemyOnPoint",
                "loc": [
                    [
                        1,
                        4
                    ]
                ],
                "name": "hp",
                "value": "1000"
            },
            {
                "type": "setEnemyOnPoint",
                "loc": [
                    [
                        1,
                        4
                    ]
                ],
                "name": "atk",
                "value": "50"
            },
            {
                "type": "setEnemyOnPoint",
                "loc": [
                    [
                        1,
                        4
                    ]
                ],
                "name": "def",
                "value": "0"
            }
        ],
        "1,4": [
            {
                "type": "setBlock",
                "number": "loader",
                "loc": [
                    [
                        9,
                        6
                    ]
                ]
            },
            {
                "type": "setEnemyOnPoint",
                "loc": [
                    [
                        9,
                        6
                    ]
                ],
                "name": "hp",
                "value": "3000"
            },
            {
                "type": "setEnemyOnPoint",
                "loc": [
                    [
                        9,
                        6
                    ]
                ],
                "name": "atk",
                "value": "100"
            }
        ],
        "9,6": [
            {
                "type": "setBlock",
                "number": "loader",
                "loc": [
                    [
                        6,
                        0
                    ]
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    2
                ]
            },
            "loader获得反物质维度NG-4R之力",
            "击败特定里程碑时获得维度提升，且禁用其对宝石效果",
            "当前怪物属性增长指数：1.3",
            {
                "type": "setEnemy",
                "id": "loader",
                "name": "hp",
                "value": "10000"
            },
            {
                "type": "setEnemy",
                "id": "loader",
                "name": "atk",
                "value": "200"
            },
            {
                "type": "setEnemy",
                "id": "loader",
                "name": "def",
                "value": "100"
            },
            {
                "type": "setEnemy",
                "id": "loader",
                "name": "special",
                "value": "[37,43]"
            },
            {
                "type": "setValue",
                "name": "item:I729",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:un1",
                "value": "1.3"
            }
        ],
        "6,0": [
            {
                "type": "choices",
                "choices": [
                    {
                        "text": "生命计分",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "operator": "/=",
                                "value": "flag:point"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:hard===2)",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "2幕1区生命计分（普通）"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "win",
                                        "reason": "2幕1区生命计分（简单）"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "攻防和计分",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "value": "((status:atk+status:def)/flag:point)"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:hard===2)",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "2幕1区攻防和计分（普通）"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "win",
                                        "reason": "2幕1区攻防和计分（简单）"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "反物质x100计分",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "value": "((status:money*100)/flag:point)"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:hard===2)",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "2幕1区反物质计分（普通）"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "win",
                                        "reason": "2幕1区反物质计分（简单）"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "向前探索",
                        "action": [
                            {
                                "type": "changeFloor",
                                "floorId": "boss2",
                                "loc": [
                                    6,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 83,636, 81, 58, 82, 23,  0,638,250,579, 82, 82,572],
    [ 60, 83,251,635,251,  0,  0,  0, 81,579,255,587, 82],
    [  4,  4,  4,  4,  4, 22, 85, 21,  4,  4,  4,  4,  4],
    [  4,587, 85, 33,255, 90,  0, 90, 59, 82,251,635,  4],
    [  4,  0,  0,255,  0, 90,  0,  0,251,  0, 85,251,  4],
    [  4,255,  0,  0,255,  0,  0, 90, 82,  0,  0,251,  4],
    [  4,584, 82, 22,585, 90,  0, 90,585,  0,  0, 30,  4],
    [  4,  4,  4,  4,  4,  0,  0,  0,  4,  4,  4,  4,  4],
    [  4,576, 81,  0,  0,  0,  0, 90,  0,  0,250,  0,  4],
    [  4, 31, 81,  0,  0,  0,  0, 90, 34,250,  0, 21,  4],
    [  4, 85,  0,  0,  0,  0,  0, 90,  0,  0,250, 85,  4],
    [ 90, 31,264,  0,  0,  0,  0,  0,250,250,  0,579, 90],
    [  0, 90,  4,  4,  4,  0,  0,  0,  4,  4,  4, 90,  4]
],
    "bgmap": [
    [20135,20135,20135,20135,20135,20135,20135,20135,20135,20135,20135,20135,20135],
    [20135,20135,20135,20135,20135,20135,20135,20135,20135,20135,20135,20135,20135],
    [20135,20135,20135,20135,20135,20135,20135,20135,20135,20135,20135,20135,20135],
    [20135,  0,  0,  0,  0,20135,20135,20135,  0,  0,  0,  0,20135],
    [20135,  0,  0,  0,  0,20135,20135,20135,  0,  0,  0,  0,20135],
    [20135,  0,  0,  0,  0,20135,20135,20135,  0,  0,  0,  0,20135],
    [20135,  0,  0,  0,  0,20135,20135,20135,  0,  0,  0,  0,20135],
    [20135,20135,20135,20135,20135,20135,20135,20135,20135,20135,20135,20135,20135],
    [20135,  0,  0,  0,  0,20135,20135,20135,  0,  0,  0,  0,20135],
    [20135,  0,  0,  0,  0,20135,20135,20135,  0,  0,  0,  0,20135],
    [20135,  0,  0,  0,  0,20135,20135,20135,  0,  0,  0,  0,20135],
    [  0,  0,  0,  0,  0,20135,20135,20135,  0,  0,  0,  0,  0],
    [902,  0,20135,20135,20135,20135,20135,20135,20135,20135,20135,  0,902]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}