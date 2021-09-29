export const commandsList = [
    {
        title: "Bot Utilities",
        body:   [
            {
                cmd: ".ping",
                desc: "Check the bot's latency in the server",
                usages: null,
            },
            {
                cmd: ".invite",
                desc: "Get the link to invite PullMoon to your server",
                usages: null,
            },
            {
                cmd: ".clean",
                desc: "Delete recent messages of PullMoon chats",
                usages: null,
            },
            {
                cmd: ".help",
                desc: "Give a link to this website",
                usages: null,
            },
            {
                cmd: ".feedback",
                desc: "Delete recent messages of PullMoon commands",
                usages: [
                    {
                        usage: ".feedback",
                        param: "[your message]",
                        usageDesc: null,
                    }
                ],
            }
        ]
    },
    {
        title: "Random Utilities",
        body:   [
            {
                cmd: ".weather",
                desc: "Get the real-time weather of the given city",
                usages: [
                    {
                        usage: ".weather",
                        param: "[city name]",
                        usageDesc: null,
                    }
                ],
            },
            {
                cmd: ".romanize",
                desc: "Convert the given text to latin from Japanese or Korean",
                usages: [
                    {
                        usage: ".romanize",
                        param: "[text]",
                        usageDesc: null,
                    }
                ],
            },
            {
                cmd: ".redirect",
                desc: "See where a link will redirect you to if you open it",
                usages: [
                    {
                        usage: ".redirect",
                        param: "[url]",
                        usageDesc: null,
                    }
                ],
            },
            {
                cmd: ".dice",
                desc: "Roll a dice or some dices",
                usages: [
                    {
                        usage: ".dice",
                        param: "[n]",
                        usageDesc: "Roll a dice with n eyes"
                    },
                    {
                        usage: ".dice",
                        param: "[n] [m]",
                        usageDesc: "Roll n dices with m eyes"
                    }
                ],
            },
            {
                cmd: ".rps",
                desc: "Play rock paper scissors with a friend",
                usages: [
                    {
                        usage: ".rps",
                        param: "[@user]",
                        usageDesc: null
                    }
                ],
            },
            {
                cmd: ".jod",
                desc: "Get the joke of the day",
                usages: null
            },
            {
                cmd: ".qod",
                desc: "Get the quote of the day",
                usages: null
            },
            {
                cmd: ".avatar",
                desc: "See the tagged user's avatar",
                usages: [
                    {
                        usage: ".avatar",
                        param: null,
                        usageDesc: "The server's icon"
                    },
                    {
                        usage: ".avatar",
                        param: "[@user]",
                        usageDesc: "The user's icon"
                    }
                ],
            },
            {
                cmd: ".banner",
                desc: "See the tagged user's banner",
                usages: [
                    {
                        usage: ".banner",
                        param: "[@user]",
                        usageDesc: null
                    }
                ],
            },
            {
                cmd: ".user",
                desc: "See a simple profile of a user of the given id",
                usages: [
                    {
                        usage: ".user",
                        param: "[@user]",
                        usageDesc: null
                    },
                    {
                        usage: ".user",
                        param: "[user_id]",
                        usageDesc: null
                    }
                ],
            },
            {
                cmd: ".pickupline",
                desc: "Get a random pickupline",
                usages: null
            },
            {
                cmd: ".apakah",
                desc: "The bot will answer with \"Ya\" or \"Tidak\" randomly (means \"Yes\" or \"No\")",
                usages: [
                    {
                        usage: ".apakah",
                        param: "[some statement]",
                        usageDesc: null
                    }
                ],
            },
        ]
    },
    {
        title: "Productivity",
        body:   [
            {
                cmd: ".stackoverflow",
                desc: "Get questions related to your query from Stackoverflow (alternative command: .so)",
                usages: [
                    {
                        usage: ".stackoverflow",
                        param: "[your question]",
                        usageDesc: null
                    },
                    {
                        usage: ".so",
                        param: "[your question]",
                        usageDesc: null
                    }
                ],
            },
            {
                cmd: ".alarm",
                desc: "Set an alarm for PullMoon to remind you",
                usages: [
                    {
                        usage: ".alarm",
                        param: "[HH]:[MM] [alarm name]",
                        usageDesc: "Alarm for [HH:MM] today (or tomorrow if already past that hour)"
                    },
                    {
                        usage: ".alarm",
                        param: "[how_many_days_from_today] [HH]:[MM] [alarm name]",
                        usageDesc: "Alarm for [HH:MM] on after [n] days"
                    },
                    {
                        usage: ".alarm",
                        param: "[DD]/[MM] [HH]:[MM] [alarm name]",
                        usageDesc: "Alarm for day [DD] of month [MM] at [HH:MM]"
                    },
                    {
                        usage: ".alarm list",
                        param: null,
                        usageDesc: "See active alarms for that server or DM"
                    },
                    // {
                    //     usage: ".alarm delete",
                    //     param: null,
                    //     usageDesc: "Delete some active alarms"
                    // },
                ],
            },
            {
                cmd: ".vote",
                desc: "Make a voting poll (can be anonymous if with duration)",
                usages: [
                    {
                        usage: ".vote",
                        param: "[choice1], [choice2], [choice3], [etc]",
                        usageDesc: "Transparent vote",
                    },
                    {
                        usage: ".vote",
                        param: "[minute_duration]  [choice1], [choice2], [choice3], [etc]",
                        usageDesc: "Anonymous vote with duration",
                    },
                    {
                        usage: ".vote",
                        param: "\"[voting title]\"  [choice1], [choice2], [choice3], [etc]",
                        usageDesc: "Transparent vote with voting title",
                    },
                    {
                        usage: ".vote",
                        param: "[minute_duration]  \"[voting title]\"  [choice1], [choice2], [choice3], [etc]",
                        usageDesc: "Anonymous vote with duration and voting title",
                    },
                ],
            },
            {
                cmd: ".tugas",
                desc: "See list of assignments for CSUI 2020 students",
                usages: [
                    {
                        usage: ".tugas",
                        param: null,
                        usageDesc: null,
                    },
                    {
                        usage: ".tugas reminder",
                        param: null,
                        usageDesc: "Toggle the daily reminder of assignments",
                    },
                ],
            },
        ]
    },
    {
        title: "Website Searching",
        body:   [
            {
                cmd: ".ig (Deprecated, banned from Instagram of accessing it too much)",
                desc: "See the instagram profile of the given id",
                usages: [
                    {
                        usage: ".ig",
                        param: "[profile_id]",
                        usageDesc: null,
                    },
                ],
            },
            {
                cmd: ".9gag",
                desc: "See recent posts in Hot section",
                usages: null
            },
            {
                cmd: ".mangahere",
                desc: "Search for a manga in mangahere",
                usages: [
                    {
                        usage: ".mangahere",
                        param: "[manga title]",
                        usageDesc: null,
                    },
                ],
            },
            {
                cmd: ".valorant",
                desc: "See the user stats in each map",
                usages: [
                    {
                        usage: ".valorant",
                        param: "[user]#[id]",
                        usageDesc: null,
                    },
                ],
            },
        ]
    },
    {
        title: "Games",
        body:   [
            {
                cmd: ".uno",
                desc: "Play UNO with your friends",
                usages: null
            },
            {
                cmd: ".tictactoe",
                desc: "Challenge someone to play tictactoe with you",
                usages: [
                    {
                        usage: ".tictactoe",
                        param: "[@user]",
                        usageDesc: null
                    }
                ]
            },
            {
                cmd: ".connect4",
                desc: "Challenge someone to play connect 4 with you",
                usages: [
                    {
                        usage: ".connect4",
                        param: "[@user]",
                        usageDesc: null
                    }
                ]
            },
            {
                cmd: ".nonogram",
                desc: "Play nonogram (picross) puzzle",
                usages: [
                    {
                        usage: ".nonogram",
                        param: null,
                        usageDesc: "Play nonogram with 6x6 size",
                    },
                    {
                        usage: ".nonogram",
                        param: "[size]",
                        usageDesc: "Play nonogram with customized size",
                    },
                ]
            },
            {
                cmd: ".csn",
                desc: "Play in casino to satisfy your gambling addiction",
                usages: [
                    {
                        usage: ".csn coin",
                        usageDesc: "See how many coins you have",
                    },
                    {
                        usage: ".csn daily",
                        usageDesc: "Claim daily reward of coins. Daily streak gives more bonus!",
                    },
                    {
                        usage: ".csn hourly",
                        usageDesc: "Claim hourly reward of coins",
                    },
                    {
                        usage: ".csn slot",
                        param: "[bet_amount]",
                        usageDesc: "Bet some coins in slot game",
                    },
                    {
                        usage: ".csn dice",
                        param: "[bet_amount]",
                        usageDesc: "Bet some coins in dice game",
                    },
                    {
                        usage: ".csn cf",
                        param: "[bet_amount]",
                        usageDesc: "Bet some coins in coin flip",
                    },
                ],
            },
        ]
    },
    {
        title: "NSFW",
        body:   [
            {
                cmd: ".pornhub",
                desc: "Get 5 hot videos in pornhub homepage",
                usages: null
            },
            {
                cmd: ".nhentai",
                desc: "Search (AND READ) hentai in chat",
                usages: [
                    {
                        usage: ".nhentai read",
                        param: "[digit_code]",
                        usageDesc: "Read the hentai in chat"
                    },
                    {
                        usage: ".nhentai",
                        param: "[digit_code]",
                        usageDesc: "Get the preview of the hentai"
                    },
                    {
                        usage: ".nhentai search",
                        param: "[hentai title]",
                        usageDesc: "Search nhentai for the requested title"
                    },
                    {
                        usage: ".nhentai tag",
                        param: "[tag]",
                        usageDesc: "Get 1 random hentai with the given tag (maximum of 1 tag)"
                    },
                    {
                        usage: ".nhentai random",
                        param: null,
                        usageDesc: "Get a random hentai"
                    },
                    {
                        usage: ".nhentai popular",
                        param: null,
                        usageDesc: "Get 5 popular hentais right now"
                    }
                ]
            },
        ]
    }
]