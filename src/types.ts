export interface Iuser{
    name: string;
    iconUrl: string;
}

export interface IMessage{
    id: string;
    teamId: string;
    channelId: string;
    userId: string;
    createdAt: string;
    user: Iuser;
    body: string;
}

export interface ITeam {
    iconUrl: string;
    name: string;
    id: string;
    channels: IChannel[];
}

export interface IChannel{
    teamID: string;
    name: string;
    description: string;
    id: string;
    messages: IMessage[];
}
