main.floors.boss3=
{
    "floorId": "boss3",
    "title": "声望层级",
    "name": "P",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 100,
    "defaultGround": "ground",
    "bgm": "2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "3,7": [],
        "1,7": []
    },
    "changeFloor": {
        "7,7": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,9": [
            {
                "type": "setValue",
                "name": "flag:boss3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:boss3===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            10
                        ]
                    }
                ]
            }
        ],
        "4,11": [
            {
                "type": "setValue",
                "name": "flag:boss3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:boss3===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            10
                        ]
                    }
                ]
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:boss3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:boss3===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            6
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            2
                        ]
                    }
                ]
            }
        ],
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:boss3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:boss3===6)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            6
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            2
                        ]
                    }
                ]
            }
        ],
        "6,1": [
            {
                "type": "if",
                "condition": "(flag:cnhp<1000000)",
                "true": [
                    "省姐姐大神！"
                ]
            },
            {
                "type": "setValue",
                "name": "item:lcb",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "choices",
                "choices": [
                    {
                        "text": "生之门",
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
                                        "reason": "2幕2区生命计分（普通）"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "win",
                                        "reason": "2幕2区生命计分（简单）"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "匙之门",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "value": "((((item:yellowKey*100)+(item:blueKey*200))+(item:redKey*500))/flag:point)"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:hard===2)",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "2幕2区钥匙计分（普通）"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "win",
                                        "reason": "2幕2区钥匙计分（简单）"
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
                                        "reason": "2幕2区攻防和计分（普通）"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "win",
                                        "reason": "2幕2区攻防和计分（简单）"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "反物质计分",
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
                                        "reason": "2幕2区反物质计分（普通）"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "win",
                                        "reason": "2幕2区反物质计分（简单）"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "前往boss战",
                        "action": [
                            {
                                "type": "changeFloor",
                                "floorId": "boss4",
                                "loc": [
                                    6,
                                    9
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,9": [
            {
                "type": "setValue",
                "name": "flag:boss3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:boss3===2)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "item:lcb",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "(flag:boss3===4)",
                        "true": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    10
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,11": [
            {
                "type": "setValue",
                "name": "flag:boss3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:boss3===2)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "item:lcb",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:boss3===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            10
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
    [170017,170017,170017,170017,170017,170098,171283,170096,170017,170017,170017,170017,170017],
    [170017,170017,170017,170017,170017,170098,1017,170096,170017,170017,170017,170017,170017],
    [170017,170017,170017,170017,170017,170098, 85,170096,170017,170017,170017,170017,170017],
    [173, 28, 58, 30, 28,576, 30,576, 28, 30, 58, 28,173],
    [173,173, 59, 58,579, 28,585, 28,579, 58, 59,173,173],
    [173,173, 58, 30, 28,576, 30,576, 28, 30, 58,173,173],
    [173,173, 85,173,173,173,173,173,173,173,173,173,173],
    [173,1015,  0,1015,173,  0,173, 88,  0,587,  0, 31,173],
    [173,173,646,173,173,173,173,173,173,173,173, 86,173],
    [173,173,  0,173,1004,173,173,995,173,173,990,  0,173],
    [173,173,644, 85,  0, 60,998,  0, 33,994,  0, 27,173],
    [173,173,173,173,1004,173,173,995,173,173,990,173,173],
    [173,173,173,173,173,173,173,579,173,173,173,173,173]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,170379,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,170387,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,170371,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,170379,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,170387,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

]
}