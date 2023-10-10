import styled from "styled-components";
import CheveronLeft  from "../../../public/svg/Chevronleft.svg";
import ChevronRight  from "../../../public/svg/ChevronRight.svg";
import CancelIcon  from "../../../public/svg/CancelIcon.svg";
import { HEADER_HEIGHT } from "../../Constants/constant";
import LionProfile from "../../../public/svg/LionProfile.svg";
import LocationFrom from "../../../public/svg/LocationFrom.svg";
import LocationMarker from "../../../public/svg/LocationMarker.svg";
import Divider from "../../../public/svg/Divider.svg";
import Calendar from "../../../public/svg/Calendar.svg";
import Clock from "../../../public/svg/Clock.svg";
import Dollar from "../../../public/svg/Dollar.svg";

function DetailPage() {
    const goBack = () => {
        window.history.back();
    }
// eslint-disable-next-line react-hooks/exhaustive-deps



  return (
    <Container>
      <Header>
        <Icon style={{alignSelf:'center'}}onClick={goBack}>
        <CheveronLeft width='24' height='24'/>
        </Icon>
        <Icon style={{alignSelf:'center'}} onClick={goBack}>
        <CancelIcon width='24' height='24'/>
        </Icon>
      </Header>
      <Body>
        <Profile>
        <LionProfile width='86px' height='86px'/>
        </Profile>
        <Content>
            <Explanation>
            <ContentTitle>
                <Title>세빈 님의 </Title>
                <Title>'공덕팟'은 어때요?</Title>
            </ContentTitle>
            <ContentDetail>
                여자/2시간전/7명 조회
            </ContentDetail>
            </Explanation>
            <MapSample src='../../../public/png/MapSample.png' width='100%' height='100%'/>
            <Route>
                <From>
                    <div style ={{display:'flex', flexDirection:'row' }}>
                    <LocationFrom width='24' height='64'/>
                    <Text>
                    <StartPointLocation>공덕역 5호선</StartPointLocation>
                    <StartPoint>출발지</StartPoint>
                    </Text>
                    </div>
                    <Icon  style={{paddingTop:'3px'}}>
                    <ChevronRight/>
                    </Icon>
                </From>
                <From>
                    <div style ={{display:'flex', flexDirection:'row' }}>
                        <Icon style={{height:'100%', alignItems:'flex-start',display: 'flex'}}>
                            <LocationMarker width='24' height='24'/>
                        </Icon>
                        <Text>
                            <StartPointLocation >판교역 신분당선</StartPointLocation>
                            <StartPoint>도착지</StartPoint>
                        </Text>
                    </div>
                    <Icon style={{paddingTop:'3px'}}>
                        <ChevronRight/>
                    </Icon>
                </From>
            </Route>
        </Content>
      </Body>
         <Divider width='100%' height='10'/>
    <Bottom>
        <DescriptionTag>
            <Staus>
                <Tags>
                <Tag>일반택시</Tag>
                <Tag>성별무관</Tag>
                <Tag>출퇴근</Tag>
                </Tags>
                <GateringTag>
                    모집중 1/4
                </GateringTag>
            </Staus>
        </DescriptionTag>
        <TextDescription>
            <div>일정 및 시간</div>
            <div style={{marginTop:'12px',fontSize: '14px', display:'flex', gap: '10px', flexDirection:'column' }}>
                <div style={{ flexDirection:'row', display:'flex', gap:'11px'}} >
                    <Calendar width='16' height='16'/>
                   <div>
                        <div>08월 15일 (화) 오전 11:30 출발</div>
                    </div>
                </div>
            <div style={{ flexDirection:'row', display:'flex', gap:'11px'}} >
                <Clock width='16' height='16'/>
                <div>1시간 10분 소요</div>
            </div>
            <div style={{ flexDirection:'row', display:'flex', gap:'11px'}} >
                <Dollar width='16' height='16'/>
                <div style={{ flexDirection:'row', display:'flex', gap: '5px'}}>
                    <div style={{color: '#7E7E7E' }}>예상 금액</div>
                     총 29,700원 - 1인당 7,425원 (4인)
                     </div>
                </div> 
            </div>
        </TextDescription>
    </Bottom>
    <Divider width='100%' height='10'/>
    <Party>
        <Leader>
            팟장
        </Leader>
        <div style={{flexDirection:'row', display:'flex', alignItems:'center'}}>
            <Icon style={{marginLeft:'24px', marginRight:'13px'}}>
                <LionProfile width='46px' height='46px'/>
            </Icon>
            <Name>세빈</Name>
            <Tags style={{}}>
                <Tag style={{marginRight: '7px'}}>여자</Tag>
                <Tag>20대</Tag>
            </Tags>
        </div>
        <Description>
        공덕역 근처 사는 숙대 학생입니다 ㅎㅎ <br/>
        판교역 근처로 인턴하고 있어서 같이 타고 <br/>
        가실 분 구합니다! 정기적이여도 좋아요~! <br/>
        만나는 장소는 채팅으로 정합시다 !!<br/>
        </Description>
        <PartyOne>
            <div style={{flexDirection:'row', display:'flex'}}> 
                <Leader>
                    파티원
                </Leader>
                <div style={{flexDirection:'row', marginLeft:'11px', marginTop:'16px',display:'flex', alignItems:'center'}}>
                    <Tags style={{}}>
                        <Tag style={{marginRight: '7px'}}>0명</Tag>
                    </Tags>
                </div>
            </div>
            <PartyoneText>
            아직 매칭된 파티원이 없어요!
            </PartyoneText>
        </PartyOne>
    </Party>
    </Container>
  )
};
const PartyoneText = styled.div`
     color: var(--Gray-Text-1, #9A9A9A);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 157%; /* 21.98px */
    align-items: center;
    justify-content: center;
    margin-top: 47px;
`;
const PartyOne = styled.div`  
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* height: 569px; */
`;

const Description = styled.div`
    width: 335px;
    height: 133px;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--Gray-Icon-Solid, #F5F6F8);
    margin-left: 25px;
    margin-top: 13px;
    justify-content: center;
    display: flex;
    align-items: center;
    font-family: pretendard;
`;
const Name = styled.div`
    color: var(--Gray-Text-3, #343434);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 157%; /* 25.12px */
    margin-right: 7px;
`;
const Leader = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 157%; /* 28.26px */
    margin-top: 32px;
    margin-left: 28px;
    margin-bottom: 13px;
`;
const Party = styled.div`
    height: 696px;
    display: flex;
    flex-direction: column;
`;
const TextDescription = styled.div`
color: #000;
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 700;
margin-top: 28px;
`;
const GateringTag = styled.div`
border-radius: 4px;
border: 1px solid #EBEBEB;
background-color: #ffffff;
width: 74px;
height: 25px;
flex-shrink: 0;
color: var(--Green-Text, #139B59);
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 157%; /* 18.84px */
display: flex;
align-items: center;
justify-content: center;

`;
const Staus = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;
const Tag = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: #7e7e7e;
  display: flex;
  margin-right: 9px;
  border-radius: 4px;
  background-color: #f5f6f8;
  padding: 2px 4px;
`;
const DescriptionTag = styled.div`
`;
const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    bottom: 0;
    
    /* width: 100vw; */
    padding: 37px 25px 28px 25px;
    /* border-top : 1px soild #fbfbfb; */
`;
const Text = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 3px;
    padding-left: 7px;

`;
const StartPoint = styled.div`
    color: var(--Gray-Text-1, #9A9A9A);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`;
const StartPointLocation = styled.div`
    color: var(--Gray-Text-3, #343434);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    flex-direction: column;
`;

const From = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-right: 10px;
    justify-content: space-between;

`;
const Route = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding-bottom: 18px;
`;
const Explanation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const MapSample = styled.img`
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: scroll;
`;

const Content = styled.div`
    padding-top:17px;
    display: flex;
    flex-direction: column;
    gap: 47px;
`;
const ContentTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Title = styled.div`
    font-size: 22px;
    font-weight: 700;
`;
const ContentDetail = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--Gray-Text-1, #9A9A9A);
font-family: Pretendard;
font-size: 14px;
font-weight: 500;
`;
const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    height: ${HEADER_HEIGHT}px;
    justify-content: space-between;
    padding: 0 4%;
`;

const Icon = styled.div`
    cursor: pointer;
    align-self: flex-start;
`;

const Body = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 4px;
    margin: 0 25px;
    height: 603px;
`;
const Profile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 86px;
    width: 100%;
`;

export default DetailPage
