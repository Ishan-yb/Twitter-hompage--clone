import { Avatar,Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Tweetbox.css';
import db from "./Firebase";
function Tweetbox() {
    const [tweetMessage,setTweetMessage]=useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = (e) => {
        e.preventDefault();
    
        db.collection("posts").add({
          displayName: "Ishan Pathak",
          username: "ishan667",
          verified: true,
          text: tweetMessage,
          image: tweetImage,
          avatar:
          "https://cdn.mos.cms.futurecdn.net/2NBcYamXxLpvA77ciPfKZW-1200-80.jpg",
        });
    
        setTweetMessage("");
        setTweetImage("");
      };
    
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox_input">
                    <Avatar src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGRgaHBwaGBocGBgaGhoaGBwaIR4aHBohIS4lHh4rIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EADgQAAICAAQEAwcCBgICAwAAAAECABEDEiExBEFRYQVxgQYTIpGhscEy8BRCUmLR4ZLxI3IHM8L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQEBAQEBAAIDAQADAQAAAAAAARECIRIxA0FRYRMycQT/2gAMAwEAAhEDEQA/AF3WvftzmvDTX8dJnGGen0m/hcDUE3zG/X77fu50V5pfHuMPCfEoWqNlPfXKPnU+Yok+h+2r5OHVBu7jzyr8X3yzwvu9JXMPcJVBDryjETttGJhk62KG4sc/vHfCm2+Aw8MUbNUNN9T0/fSJJIe0pdRVkHUV2111m/QJVa5iSbNkUKHYCifWK4fh9MNiN8Rq717vX5kzLuzPXT+Hm/KZf90nxl82M5zVt377+sHCT4R5XfnNPieGtqw/U4Zm57O6gHpog+cNU0r9iP8AHmTE/wD0W3u7/dc7GGoBBPrX72jSnwKco1JNHlWkZi4BzaDYDUmh1/MZjrSoLXa9dd+kuxlOvDOAwzRJrehXYD/Md4jg5kA1ux8qM0+GEFBZDa7jSV4tlAXTntty7SLPWvPWRysDDCq98wv3j+CQBjtdHvG4WCMjfCBqpom71EdwILOqULYhVrqzKPzLY2+xWN+k+RnLwQcy6HfrPVv7P4zJiYxX3WFbZS5ykpmIVlXciqNziBcPBJDupzoxRhZBZCrV2/TWv9UXy5xfx63GB01Y2Nz57zSEveCyWSQBRsgnvNQw5WM/tyuKTXYn5ykwSwFAaXvym7i8E2PL/MHCXLrVnXQxYq3wjERgFVstC6oDS97NWYpkubXOY7Dblr0inQVCTCvW0p+GCiwDLTCWhoPOCSx/qP2lLhEk0IYNqBYeGwF7+khWtJf9vU6nnpy8owjOM1185TvfIQ3wgB94/hsNKbMDeX4d9Sdiew3ivgk24zPhBWpiNrNW1Gry8teW9CJbUbNp0N/SPdRdDXodgf8AEq6u9ISC9e+Ri930I9RCQMN/xHMBmsbS3A6R4q9BsS4NSQJ9VHBsG5V/1XpvNvDYB2nRThrANb0eh9ekavD1r9pnqfi+de2+Jmx1Tlhp9X1P0yzzjJNvHYpfEdy2YlzTHdlXRWPcqFPnMziaRNKyeUtANee3pvy+XykxDQHz+cvCQkff/uF+j5+yeKsLoWO93sBoAAfUwuE4piqIVULh5yGrU5zZv5QuJQ5GOmlXqLonkOfLaVicK2GXRgLUDbq1aHymXUl8rq4t5uwlC75cx0FCgNhZ0+834WETp+Yjha+HW2trAGgUAUb62T8p1OHwxufKVPGPW27XH4pAGa/3WkLjkXMo5hBNrFCSMpYm+fWaOIUFz8A0rU+QloI8LAyjsCavfUxHijl2AAJGux8p0n4akUjQ1yr1H1nOxz8KhTRrWKTadvhLO2Wqo2Ae+nWdr2PCni8MtWVbc1/YCdfUCcBEtctn9f4nV9nj7t8+XMQD8JNXptfIR36o5/7Rfi//AMgY3GA8MMFLfFAwWzH4QWoKQBqCDXaeK47jMTOysQCB7shdgF+EgdjWvWer4PjDi8RjnheG4bh8lkYrHEJwyTlFHMVLsx+EKl2aAnkn4Z7csfis3d2xvXXr57zmt/Wu/nmfeOz4LxOZMpAJXT05f49J30Xb0nkfZxj7wr1X7Ef5M9kiaDyE25u8xy/k5zqsXE4crCwb0OosfWa8ZLqUuHSmj3lb4yz0riOGC0QtTK+HpNY1I39TKdYDGPMKAJ84pDW98to1wNb9Il9hGEz3enlf3ir584QEhEZahcnn9ITEwBGNXKBKRdN/LfWTFawoyqKFaA22t2x5n/EsLFlTA5f0tcInbXoBvpqfkIuofv3RtDQZSuh/lagR6/mEi3zgd8hWWSN933kjTr0fB+P46YiOzu9HVWdiCOYo6f4nvuJ8bw34bFxMJ7KpR0IKs4pRR7n6T5m63qTr22+sZh0AbO+9Gtuo85nZpy4zNpM7vrtHu+kzBtRLhVWK9GGmJ8PPXfWvn6xTi41iDQEVHP8AjJxb7CQPaEkklmFkkkmDjOt63XbkOp7QnPwoN7s10va5FxtzLlp/ANqx7V8z/qdVWoHy/dzn8NhlUDUBmJAH/odb+c1o5og6Ql1Nln2HhsM5lvqLmrFRizEDTXp1g4NlgMwPl5RmEh3JP4lJbT+kA9JyOM4Vb3KiuW51M7GI91MuKQDsNOv4iir9OZ/BDIKus2/M6TRwq5CdK2+XnNT4tqPM8vxFol38Vx6UmV5/w3xPCwMXiE4hHOG42QgPnViUYMdtGbXynF4vjUYtkwUw1N5QCxKryBYn4j3PObfarh8uKGGzLd9xpX2+c4U5uplrv563mO37MIDiNZNhdPUi/wAT2aDQek8F4JxIw8TMf00QfI/7Anp39o8FQP1G+gFfebcXOWH5ObevHWZZappOdw/jAxAcqOcupAK38rm3gONTFBynUfqU6MPT8xsssqOsTjLOpiDTzEw4iwhdRzXwySaimwztN7JUzutmXKixnfDrWBU0Yj6aTNzqMjESWgoxdmERACdh2goL21kZL3EYUYLsQG56gGt/OoCf6TiqCCpEy8LiEXpp+RNoS5mKFWYfynX1O4/fWBy+Yr+L7SRbcOORv0P+JJPyaf8AHP46jYlcop8RoOK4XdgB3oTDj+Jqu1nodhHsjLnnrr6jeBe59OUtiADrsK+cyYHFBlB2J0rX6dR3kdBeY79eekY+OXKJDZ8pv8PouCdlV3565EYgepoTnpuTOhwHGKgxc4JLYL4aUNnYrv0FA6yPybebIv8AHk6lrlA9/pH8QoDAC9ABvz5xeClkAA9uc0cQ5di2VVIoEC9SBlvUnU1Z7yb9tJJOa6irlTDRiSAgYA/y+8Jeu+jKfWXigAddoKYZAWybyizR6Ch5AUITjYb6w5mF3ZR8Lr6XBTCckDPQvauXzmnhEq76VNGAuo7SrUSLbBKjcnuQJjxcO9zN2MTUyUpve7Gn4hDqe5AVb7xnAcKXcqnIjNQJy+YH7+8Zw3HIcZeFwgXxd8XEABGGo/Uqf37LmOgJ3019eeEdUsHDwEA/uax/cQUy+YJ8zJvX8V8c+3jPaTgcLh8XhyQzZmoZkRiCGS2Vby8wAGBNmX49h8LnLugc/pBpcrMP1ZSaDm9NLPwzy/tZ477ziFCsGXCb4WBchjY+IBiSNQOZuhH43tSiqCqZ8Zh/5MVgv/BF/kRdgBW1yfutZzZIy4+GhJK4BHT4QigctDqdOZE5HHqK1oEdNf8AErjPFncmzMBa9471MxXPN3abhPRBUkEc7mjD410xA6mmHyPUEcwZgBjgw56d+Xyil/S7zPt9D4DjVxkDDyYcww3Ec+Gd55j2Q4jLiMnJlsf+y9vIn5T1z1UpzdzOsZgik6gmgdBzr8TE6951GxgiFUGr6Ox3y/0DoOZ6+QnNdAeUfNT1IS+HppMyqSe81saUntSjv19Jz8AmzcueoszDwBe9y8YihAYdPKCym9qrSjAqcjCtTKZrqzdChZ2HQRaCEe8ZbVXFu17xqvWtD1FxbqsBkAvFMugqhtosuBUkn4z+L/5ev7QY3h6s2ZrPyGnIabxuDwijUKL5Hcj5zbjJEaqLAJPSPIm9dXzWfFW28vzJi8vKNVLGbmeUTi+RlErDkdqEmHNGAlsNuZ1/feKmVwuAGYMLUpzBI30rTfc+lzeiMdcve6qVi6rlBFc6+n3m3OtUCSaA51M891fy3mQSH/s/eRMAuw1qgfLlrCRDzqGqQgtN93V63tNPDKAYjDWakQUD5/f/AHERrjScjxziDgYDOoGZmoHmDqT9AZ1VBPWed9rcMthLyXNbHoADy6mC59x5XwfxLEwnZ1amIs9WFgmu/P0mzxHx/ieLYISWs0qg0PXlX0nn3Nm57D2V4IJhnGoHExMyYQIsKo0fEI6D6mhzmct+nTZJ65+D7PG0946qWU4jDcqgIC3569qEzcXw+CS3ujYBIBs6gE60ddRR1nUxXCYxClnYinYbviZx8N7WBWg0Fzj8Xjk2GGUjYHe/MffvNJJiNtrnYmGVMXGu55wLk2T9NYGbuC4dW/UTvXa+/aYpp4dj+nkTHzPS63PHYwiMPFRhVqw2rY6H6Ez2ZbSeK4nwXEwlDMuXN+kEnNrzrl69Z63wps+EjHcij5rofqJpf65up/on1EArUdl/1BqJLm4uH3mdxU38QutzBiiVGdCyEAWCL1B60eXrKLQS0CMW/wAMUyi5MXrfaEIEsoSCeQFnX9/KLVobwWUVuPIXpAZ4DMOskr3S9JIH47XEAxBojoZpc3MbLy7fsQKl+4qjuKI+l/iZ2WdFCuXQ6Vz5VFOg2oxisyJGV2jVSMw8w2iGKw8P7zWmARRO0DXQ85owhJtOQYWMwsIHUkCRUhBYlHIovU6TQlXpe3OZlG0fhiSDitUb/M43j/CHECZqGGHtxdZqViFvuRXrO4lTx/tT4xlbIpIyK3Wi7jL65Vzf8oVfEtvjxfEtmZiAALNAbAcgJ7zw3iicP4SUDKMMHQNh4Cauw6M1gDuV6T57PYYeEhDHEd0QnMEUKGo18Jv9PlI59tb/AJPJGLiuOHvgFAXDRaRRsqg36sTqTuSZxXdmJoFhd7E1OtjY2ArOVUkaZQzXdf1ddZz+I8TdtLyr0XQfSVb+i5n7xlOG1WQauvXpKA6iaFDULNAGxf19TcB1vW45GmkhZ1/Z3DLY6BVDtmGRSLGbqR0Gp9JkbhwMNW1ssQdRXoK0+c6nstjOmOvu6Dt8Ck/ygkZmvlQBlSI6uy49J4zw+In/ANjZ3UM7Gwfi5DTkNNPOYPZnHYl1JJGjV0J0P2E6/tC+VShObKtMx3JArNfckzyvh/FMjkoMxIqqJvnpXlKnsYY9mWmd26TLwPEO6Z3AWyQBroBprfPeGcSRiVYhuc7GQk1+6nQLf7mfia3lRNYHSoEdirMwlELLLQ1DQawXMYCTFs9C5HaZuIxsug3ip8zTf4gdRKmP+HYySfWnx5/r1qNE4m/rDZ4oNZ0MpkU+GQa/lOvkenrpHotw2FyYeHACyQ0XSRhGIB5+XaSasnKaMFag35R67SaaLCyyXLBiAo7Di1EYggZxcAWTQG5J0nzf2udGxmbDbMpJ1u9ec9v40ye7cOxVQtkg0dTp9jPluM1sSOuknq+Nvxc+614BVcVK2BXUkVelk6aCyZ6rjPDg6BnxVRVGa6Lu6u7BaQbszbC9jrU8U2pvlpc9Bi8fhOuUlg6ogBJpXya1Z/SdbB2+cXNxp1NwnA/hsyj3LvmNKWxwpOtXlVNNeVnzmTE4lacKioLAA3P812xsnYTMMcDLlGqkkNVGzsTqdRpXlMwEcVjVhKD+pqrYak+gmniBhisiuQRu1DXt++UXhcGaBsXd0e3Wa2dmzLl2q6I0vzmvPP8AWd6m+Mgxfhy61YI7dZ0PCGGGwxiCcv6BXwsw5segPIc5nwsHVaUFidFaq05kXtN/ifEK4TLlsigqKQFA0q+d6nnuZWJt/iuO8VfEYlqs6GhXO/vEoSK1rvZBEzZKhC9o0WPXhQoCjYAD5QMSVhYnwKew+0U7SWdGXgObEWMW4sv0hhaRjvM6v5x2JM5NRk0Z9Ilngl4svfl1gci2MFaJsCzJDTGKghdCdL5gcwDyv5xVfMm+gz+UuBJA8jtM8PCPLnvMwaHhMQZTBvURiTOritTCGKOslUMcwkikxaMsNcDaFmhDMS4keH0k0ziYSNM5eQNA2wPG4bzGrRXiHGe7w2NkEgqpo1mO1mtNYsE98c32045BhZKt3e99lQaWPMmeCm3xHig5FBqHNjbE9T056TDMbdrs45+Mb+FwAyH+osqqPIHMT2AImnxBVqgBuFHpK4I5Vv8At1PmboegHzmPiMckg8gdO9TWZOWfvXX/AI6eLiYSr8KjN1qclntgRKLk7y1SVbv0fPOfbZg4tkbj5x+Yqw/uFH9/KRMOwKIBGouBjA6XXpc0ZbLfB4mKdtBuCaFm+V+krDrn/wBQMQm6O8tYFnhrLppIolKYxTAq7fB4v/jX1HyMDGeZ+Cf4SOhlu8WMqFniw9SnMWWjGDdopjI7aROflEvnkZPWWGiQZTOIKw0tAzReaRSSYjwzPKgfvaSBuuoF3f1jVmdHG0cplOatabQTFh+kovENHmIIhjFmZmMpWget6Ytw2xq5znDEhh9oYNbxjXIMQc6Exh4RcbEWIsGujhYoO05PtXgs2GrKW+E2RmOXXQELtmvnH4TgaDaa0YHQ7Hl1EV51px1l187dydzdCh8yfuTFz1XtFwGAmGGVMrE0NW9bs6zysw6mV2c9TqbG3Falobnl2AA/EyNNGb4SPS+dRAWaWaJ4ix6GLVY1RK5hdHo5jHOoisOOO4mjG/aMdZYlNLMEjBhKYAMIQDVwz7jtCxGrvE8OdY/EWDKz0stpFqZZNRRxIlSDxGmYy2eLLRVpzBsYJaDcBjFqsETGZu0Rcsg3EMO9ZIGskNN1RCD1E4b9YRaXrlvPuNGeUzxNyB4y+JueUMSJZpQgfxPGJGqZkjFeAsaw0EvEe8lZoFh4easDEnPR5ownqAnjme1eNbYa3sC3/I1/+Z58TpePYmbGPYAfS/zOconL1707+JnMOB3EsCU41hKJrAsQ1EgEgMtFGhjhvECNUxp6g5Yg3KBgjDZAZQjAIASHURztMzGWz3BNm1bvElrkzXvKYxKkxGaJMt2icViBpcm1pzDgYLCAjEi+csG9Ki08QbxqwgmkuqjK0OWSHJBO1pwzX7OkLNFyXKZ2DzSFoFyZoxg88sPM5aUcSGn8das8rNB4bBZ85UWEUu5sAACvqSQAOZMYinIWrQEKWJoWf5QOZ5+kXyhfGrTWWRBXEh4WGzsFRSzHYDfr9rPpGjLq1IBjkaYxGK0Bjice2bEc9z9NIhRGYmpJ6kn5mComOeu6eQ3EXpBqofEHW4pASbO0dvqZ9G3IJZvlIpPSVqVwllSXGRgkUwA0ICPSw4GEpis0JXhqcG0pTKZpEgX6CyHe4LQ3MSWiXAkwTCJkTWJSqhKsLLpGY2HkNWDt+k2LIur6jY1zgWrWWYCmWxjSqpcC+0kR40XKzS5I0KBkJlyRgFyjJJEYxiEAqCaNWORra/mfnDLkgKScouhegJqyB3ofISSQCCMXHZbpiMwKtXNTVr5GpJIyAGhltDJJBLjBYQEkkzdVG4BlhZJI4irAlySSk0QgNJJFRC6jVMqSKKqGMBkkjTVkyK1SSQC3iTJJCjlKgpp85JILh4lmSSNAsJCxCqLJ2Gg2138opjLkk/01SSSQD//Z"/>
                    <input 
                    onChange={(e)=> setTweetMessage(e.target.value)} 
                    value={tweetMessage} placeholder="what's up??" type="text"/>
                </div>
                <input value={tweetImage}
                 onChange={(e) => setTweetImage(e.target.value)}
                className="tweetbox_imageinput"
                placeholder="optional : enter image url" type="text"/>
                <Button onClick={sendTweet}
                type="submit" 
                className="tweetbox_tweetbutton">Tweet</Button>



            </form>
            
        </div>
    )
}

export default Tweetbox
