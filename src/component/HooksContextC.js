import React from "react";
import { UserContext, ChannelContext } from '../App'

function HooksContextC() {

    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return (
                                            <div><h1>User context value {user}, Channel context value {channel}</h1></div>
                                        )

                                    }
                                }
                            </ChannelContext.Consumer>
                        )

                    }
                }
            </UserContext.Consumer>


        </div>
    )
}
export default HooksContextC;