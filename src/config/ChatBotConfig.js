import { createChatBotMessage } from "react-chatbot-kit";
import CustomMessage from "../components/chatbot/setups/CustomMessage";
import UserMessage from "../components/chatbot/setups/UserChatMessage";
import Options3 from "./Options3";
import MainContractsOptions from "./mainOption/MainContractsOptions";
import MainPaymentOptions from "./mainOption/MainPaymentOptions";
import MainTerminateOptions from "./mainOption/MainTerminateOptions";
import MainPersonalOptions from "./mainOption/MainPersonalOptions";
import SideContractsOptions from "./sideOption/SideContractsOptions";
import DefalutOptions from "./mainOption/DefalutOptions";
import AfterOptions from "./mainOption/AfterOptions";
import ErrorOptios from "./mainOption/ErrorOptions";
import "../components/chatbot/setups/MyChatBot.css";

const ChatBotConfig = (menuItem) => {
  const botAvatar = process.env.PUBLIC_URL + "/assets/avatar.png";
  const config = {
    lang: "ko",
    botName: "전문적인 상담사 똑디",
    initialMessages: [],
    customMessages: {
      custom: (props) => <CustomMessage {...props} />,
    },
    customComponents: {
      botChatMessage: (props) => <CustomMessage {...props} />,
      botAvatar: (props) => (
        <img src={botAvatar} alt="Bot Avatar" className="chatbot-avatar" />
      ),
      botMessageBox: (props) => (
        <CustomMessage {...props}>{props.children}</CustomMessage>
      ),
      userChatMessage: (props) => (
        <UserMessage {...props}>{props.children}</UserMessage>
      ),
    },
    widgets: [
      // 카테고리
      {
        widgetName: "optionsWidget",
        widgetFunc: (props) => (
          <>
            <div class="h-[100px] w-full ">
              {" "}
              <DefalutOptions
                {...props}
                options={[
                  {
                    text: "보험 계약 및 가입 관련",
                    handler: "InsuranceContracts",
                  },
                  {
                    text: "보험료 및 납입 관리",
                    handler: "InsurancePayment",
                  },
                  {
                    text: "보험료 지급 및 해지 처리",
                    handler: "InsuranceTerminate",
                  },
                  {
                    text: "개인정보 및 증명 서류",
                    handler: "PersonalInformation",
                  },
                ]}
              />
            </div>
            {props.state.currentWidget === "InsuranceContractsWidget" && (
              <MainContractsOptions
                {...props}
                options={[
                  {
                    text: "보험가입",
                    handler: "SideContracts",
                  },
                  {
                    text: "보험증권",
                    handler: "SidePolicy",
                  },
                  {
                    text: "계약사항",
                    handler: "SideContractDetails",
                  },
                  {
                    text: "보험수익자",
                    handler: "SideInsuranceBeneficiary",
                  },
                  {
                    text: "수익자",
                    handler: "SideBeneficiary",
                  },
                  {
                    text: "마케팅 동의",
                    handler: "MarketingConsent",
                  },
                ]}
              />
            )}
            {props.state.currentWidget === "InsurancePaymentWidget" && (
              <MainPaymentOptions
                {...props}
                options={[
                  {
                    text: "보험료 납입",
                    handler: "InsurancePremiumPayment",
                  },
                  {
                    text: "자동이체",
                    handler: "AutomaticWithdrawal",
                  },
                  {
                    text: "적립금",
                    handler: "ReserveFund",
                  },
                ]}
              />
            )}
            {props.state.currentWidget === "InsuranceTerminateWidget" && (
              <MainTerminateOptions
                {...props}
                options={[
                  {
                    text: "보험금 청구",
                    handler: "InsuranceClaims",
                  },
                  {
                    text: "지급금 우편접수",
                    handler: "PaymentReceivedMail",
                  },
                  {
                    text: "만기보험금",
                    handler: "MaturityInsuranceMoney",
                  },
                  {
                    text: "해약환급금",
                    handler: "CancellationRefund",
                  },
                  {
                    text: "해약",
                    handler: "Cancellation",
                  },
                  {
                    text: "중도인출",
                    handler: "IntermediateWithdrawal",
                  },
                  {
                    text: "청약철회",
                    handler: "WithdrawalSubscription",
                  },
                ]}
              />
            )}
            {props.state.currentWidget === "PersonalInformationWidget" && (
              <MainPersonalOptions
                {...props}
                options={[
                  {
                    text: "개인정보",
                    handler: "PersonalInformations",
                  },
                  {
                    text: "증명서",
                    handler: "Certificate",
                  },
                ]}
              />
            )}
          </>
        ),
      },
      // 키워드1
      {
        widgetName: "InsuranceContractsWidget",
        widgetFunc: (props) => (
          <div class=" h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class="w-full">
              <MainContractsOptions
                {...props}
                options={[
                  {
                    text: "보험가입",
                    handler: "SideContracts",
                  },
                  {
                    text: "보험증권",
                    handler: "SidePolicy",
                  },
                  {
                    text: "계약사항",
                    handler: "SideContractDetails",
                  },
                  {
                    text: "보험수익자",
                    handler: "SideInsuranceBeneficiary",
                  },
                  {
                    text: "수익자",
                    handler: "SideBeneficiary",
                  },
                  {
                    text: "마케팅 동의",
                    handler: "MarketingConsent",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      // 키워드2
      {
        widgetName: "InsurancePaymentWidget",
        widgetFunc: (props) => (
          <div class="  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <MainPaymentOptions
                {...props}
                options={[
                  {
                    text: "보험료 납입",
                    handler: "InsurancePremiumPayment",
                  },
                  {
                    text: "자동이체",
                    handler: "AutomaticWithdrawal",
                  },
                  {
                    text: "적립금",
                    handler: "ReserveFund",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "InsuranceTerminateWidget",
        widgetFunc: (props) => (
          <div class=" h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <MainTerminateOptions
                {...props}
                options={[
                  {
                    text: "보험금 청구",
                    handler: "InsuranceClaims",
                  },
                  {
                    text: "지급금 우편접수",
                    handler: "PaymentReceivedMail",
                  },
                  {
                    text: "만기보험금",
                    handler: "MaturityInsuranceMoney",
                  },
                  {
                    text: "해약환급금",
                    handler: "CancellationRefund",
                  },
                  {
                    text: "해약",
                    handler: "Cancellation",
                  },
                  {
                    text: "중도인출",
                    handler: "IntermediateWithdrawal",
                  },
                  {
                    text: "청약철회",
                    handler: "WithdrawalSubscription",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "PersonalInformationWidget",
        widgetFunc: (props) => (
          <div class="  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <MainPersonalOptions
                {...props}
                options={[
                  {
                    text: "개인정보",
                    handler: "PersonalInformations",
                  },
                  {
                    text: "증명서",
                    handler: "Certificate",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "SideContractsWidget",
        widgetFunc: (props) => (
          <div class=" -mt-[15px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="SideContracts" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험가입 시 준비해야 할 것이 무엇인가요?",
                    handler: "InsurancePreparations",
                  },
                  {
                    text: "제가 아닌 다른 사람을 피보험자로 할 수 없나요?",
                    handler: "InsureAnotherPerson",
                  },
                  {
                    text: "보험가입 후 보험증권은 언제 받아볼 수 있나요?",
                    handler: "InsurancePolicy",
                  },
                  {
                    text: "보험가입 후 언제부터 보장이 되나요?",
                    handler: "InsurancePolicyAfterPurchase",
                  },
                  {
                    text: "수익자 지정은 어떻게 하나요?",
                    handler: "SpecifyingBeneficiaries",
                  },
                  {
                    text: "보험가입금액이 무엇인가요?",
                    handler: "AmountInsurance",
                  },
                  {
                    text: "보험가입이 되지 않을 경우도 있나요?",
                    handler: "Uninsured",
                  },
                  {
                    text: "보험 가입은 언제든 가능 한건가요?",
                    handler: "WhenPurchaseInsurance",
                  },
                  {
                    text: "보험가입 시 한도초과로 나오는 것은 왜그렇죠?",
                    handler: "LimitInsurance",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "SidePolicyWidget",
        widgetFunc: (props) => (
          <div class=" -mt-[15px] w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="SidePolicy" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험증권을 다시 받고 싶은데 어떻게 신청하면 되나요?",
                    handler: "ReApplicationInsurancePolicy",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "SidePolicyParWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px]  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험증권을 다시 받고 싶은데 어떻게 신청하면 되나요?",
                    handler: "ReApplicationInsurancePolicy",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "SideContractDetailsWidget",
        widgetFunc: (props) => (
          <div class=" -mt-[15px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="SideContractDetails" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험가입 후 가입한 보험의 계약사항은 어디서 확인 할 수 있나요?",
                    handler: "AfterSideContractDetails",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "SideContractDetailsParWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px]  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험가입 후 가입한 보험의 계약사항은 어디서 확인 할 수 있나요?",
                    handler: "AfterSideContractDetails",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "SideInsuranceBeneficiaryWidget",
        widgetFunc: (props) => (
          <div class="-mt-[15px]  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage
                {...props}
                messageType="SideInsuranceBeneficiary"
              />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험수익자 지정,변경 약정 동의가 무엇인가요?",
                    handler: "SideInsuranceBeneficiaryConsent",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "SideInsuranceBeneficiaryParWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px]  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험수익자 지정,변경 약정 동의가 무엇인가요?",
                    handler: "SideInsuranceBeneficiaryConsent",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "SideBeneficiaryWidget",
        widgetFunc: (props) => (
          <div class="-mt-[15px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="SideBeneficiary" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "수익자를 법정상속인으로 지정할 경우 상속 순위는 어떻게 되나요?",
                    handler: "LegalBeneficiary",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "SideBeneficiaryParWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px]  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "수익자를 법정상속인으로 지정할 경우 상속 순위는 어떻게 되나요?",
                    handler: "LegalBeneficiary",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "MarketingConsentWidget",
        widgetFunc: (props) => (
          <div class=" -mt-[15px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="MarketingConsent" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "마케팅 동의에 대한 철회는 어떻게 하나요?",
                    handler: "MarketingConsentCancel",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "MarketingConsentParWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px]  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "마케팅 동의에 대한 철회는 어떻게 하나요?",
                    handler: "MarketingConsentCancel",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "InsurancePremiumPaymentWidget",
        widgetFunc: (props) => (
          <div class="-mt-[15px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="InsurancePremiumPayment" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험료가 통잔잔고 부족으로 미인출되었습니다. 언제 다시 청구되나요?",
                    handler: "WhenInsurancePremiumPayment",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "InsurancePremiumPaymentWidget",
        widgetFunc: (props) => (
          <div class="-mt-[15px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="InsurancePremiumPayment" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험료가 통잔잔고 부족으로 미인출되었습니다. 언제 다시 청구되나요?",
                    handler: "WhenInsurancePremiumPayment",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "InsurancePremiumPaymentParWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험료가 통잔잔고 부족으로 미인출되었습니다. 언제 다시 청구되나요?",
                    handler: "WhenInsurancePremiumPayment",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "AutomaticTransferWidget",
        widgetFunc: (props) => (
          <div class=" -mt-[15px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="AutomaticTransfer" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "자동이체 신청/변경/해지는 어떻게 하나요?",
                    handler: "ChangeAutomaticTransfer",
                  },
                  {
                    text: "자동 이체를 해지하면 어떻게 보험료 납입하나요?",
                    handler: "TerminationAutomaticTransfer",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "ReserveFundWidget",
        widgetFunc: (props) => (
          <div class="-mt-[15px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="ReserveFund" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "적립금과 해약환급금의 차이는 무엇인가요?",
                    handler: "ReserveCancellationRefund",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "ReserveFundParWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "적립금과 해약환급금의 차이는 무엇인가요?",
                    handler: "ReserveCancellationRefund",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "InsuranceClaimsWidget",
        widgetFunc: (props) => (
          <div class=" -mt-[15px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="InsuranceClaims" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험금 청구를 위한 신청서류는 어디서 확인 할 수 있나요?",
                    handler: "DocumentsInsuranceClaim",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "InsuranceClaimsParWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px]  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험금 청구를 위한 신청서류는 어디서 확인 할 수 있나요?",
                    handler: "DocumentsInsuranceClaim",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "PaymentReceivedMailWidget",
        widgetFunc: (props) => (
          <div class=" -mt-[15px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="PaymentReceivedMail" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "제지급 우편 접수는 어떻게 하나요?",
                    handler: "MailAcceptance",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "PaymentReceivedMailParWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px]  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "제지급 우편 접수는 어떻게 하나요?",
                    handler: "MailAcceptance",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "MaturityInsuranceMoneyWidget",
        widgetFunc: (props) => (
          <div class="-mt-[15px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class="w-full">
              <CustomMessage {...props} messageType="MaturityInsuranceMoney" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "만기보험금 신청은 어떻게 하나요?",
                    handler: "ApplicationMaturityInsurance",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "MaturityInsuranceMoneyParWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class="w-full">
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "만기보험금 신청은 어떻게 하나요?",
                    handler: "ApplicationMaturityInsurance",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "CancellationRefundWidget",
        widgetFunc: (props) => (
          <div class=" -mt-[15px]  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="CancellationRefund" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "(해약)해지환급금은 어디서 확인할 수 있나요?",
                    handler: "WhereCancellationRefund",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "CancellationRefundParWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px]  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "(해약)해지환급금은 어디서 확인할 수 있나요?",
                    handler: "WhereCancellationRefund",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "CancellationWidget",
        widgetFunc: (props) => (
          <div class="-mt-[15px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="Cancellation" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "해약은 어떻게 하나요?",
                    handler: "HowCancellation",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "CancellationParWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px]  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "해약은 어떻게 하나요?",
                    handler: "HowCancellation",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "IntermediateWithdrawalWidget",
        widgetFunc: (props) => (
          <div class=" -mt-[15px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="IntermediateWithdrawal" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "중도인출금 신청은 어떻게 하나요?",
                    handler: "HowIntermediateWithdrawal",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "IntermediateWithdrawalParWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px]  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "중도인출금 신청은 어떻게 하나요?",
                    handler: "HowIntermediateWithdrawal",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "WithdrawalSubscriptionWidget",
        widgetFunc: (props) => (
          <div class=" -mt-[15px]  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="WithdrawalSubscription" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "청약철회 가능기간 및 신청절차를 알려주세요?",
                    handler: "PossibleWithdrawalSubscription",
                  },
                  {
                    text: "청약철회가 불가능한 경우는 무엇인가요?",
                    handler: "ImPossibleWithdrawalSubscription",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "WithdrawalSubscriptionParWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px]  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "청약철회 가능기간 및 신청절차를 알려주세요?",
                    handler: "PossibleWithdrawalSubscription",
                  },
                  {
                    text: "청약철회가 불가능한 경우는 무엇인가요?",
                    handler: "ImPossibleWithdrawalSubscription",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "PersonalInformationsWidget",
        widgetFunc: (props) => (
          <div class="-mt-[15px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="PersonalInformations" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "개인정보 변경은 어디서 할 수 있나요?",
                    handler: "WherePersonalInformation",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "PersonalInformationsParWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "개인정보 변경은 어디서 할 수 있나요?",
                    handler: "WherePersonalInformation",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "CertificateWidget",
        widgetFunc: (props) => (
          <div class="-mt-[15px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="Certificate" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "각종 증명서 발급은 어디서 할 수 있나요?",
                    handler: "WhereCertificate",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "CertificateParWidget",
        widgetFunc: (props) => (
          <div class=" mt-[20px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "각종 증명서 발급은 어디서 할 수 있나요?",
                    handler: "WhereCertificate",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "InsurancePreparations1Widget",
        widgetFunc: (props) => (
          <div class=" mt-[20px]  h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험가입 시 준비해야 할 것이 무엇인가요? ",
                    handler: "InsurancePreparations12",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "InsureAnotherPerson1Widget",
        widgetFunc: (props) => (
          <div class=" mb-[15px] mt-[20px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "제가 아닌 다른 사람을 피보험자로 할 수 없나요? (피보험자를 본인이 아닌 사람으로 변경할 수 있나요?) ",
                    handler: "InsureAnotherPerson12",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "InsurancePolicy1Widget",
        widgetFunc: (props) => (
          <div class=" mb-[15px] mt-[20px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class="w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험가입 후 보험증권은 언제 받아볼 수 있나요?",
                    handler: "InsurancePolicy12",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },

      {
        widgetName: "InsurancePolicyAfterPurchase1Widget",
        widgetFunc: (props) => (
          <div class=" mt-[20px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class="w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험가입 후 언제부터 보장이 되나요?",
                    handler: "InsurancePolicyAfterPurchase12",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },

      {
        widgetName: "SpecifyingBeneficiaries1Widget",
        widgetFunc: (props) => (
          <div class=" mb-[15px] mt-[20px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "수익자 지정은 어떻게 하나요?",
                    handler: "SpecifyingBeneficiaries12",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },

      {
        widgetName: "AmountInsurance1Widget",
        widgetFunc: (props) => (
          <div class=" mb-[15px] mt-[20px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험가입금액이 무엇인가요?",
                    handler: "AmountInsurance12",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "Uninsured1Widget",
        widgetFunc: (props) => (
          <div class=" mb-[15px] mt-[20px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험가입이 되지 않을 경우도 있나요?",
                    handler: "Uninsured12",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },

      {
        widgetName: "WhenPurchaseInsurance1Widget",
        widgetFunc: (props) => (
          <div class=" mb-[15px] mt-[20px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험 가입은 언제든 가능한가요?",
                    handler: "WhenPurchaseInsurance12",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "LimitInsurance1Widget",
        widgetFunc: (props) => (
          <div class=" mb-[15px] mt-[20px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "보험가입 시 한도초과로 나오는 것은 왜 그렇죠?",
                    handler: "LimitInsurance12",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },

      {
        widgetName: "ChangeAutomaticTransfer1Widget",
        widgetFunc: (props) => (
          <div class=" mb-[15px]  mt-[20px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "자동이체 신청/변경/해지는 어떻게 하나요?",
                    handler: "ChangeAutomaticTransfer12",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },

      {
        widgetName: "TerminationAutomaticTransfer1Widget",
        widgetFunc: (props) => (
          <div class=" mb-[15px]  mt-[20px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <CustomMessage {...props} messageType="quickGuide" />
              <SideContractsOptions
                {...props}
                options={[
                  {
                    text: "자동이체를 해지하면 어떻게 보험료를 납입하나요?",
                    handler: "TerminationAutomaticTransfer12",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "InsurancePreparationsWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="InsurancePreparations" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "AfterInsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "AfterInsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "AfterInsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "AfterPersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "InsurancePreparations12Widget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="InsurancePreparations12" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "InsureAnotherPerson12Widget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="InsureAnotherPerson12" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "InsurancePolicy12Widget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="InsurancePolicy12" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "InsurancePolicyAfterPurchase12Widget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage
              {...props}
              messageType="InsurancePolicyAfterPurchase12"
            />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "SpecifyingBeneficiaries12Widget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="SpecifyingBeneficiaries12" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "AmountInsurance12Widget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="AmountInsurance12" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "Uninsured12Widget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="Uninsured12" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "WhenPurchaseInsurance12Widget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="WhenPurchaseInsurance12" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "LimitInsurance12Widget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="LimitInsurance12" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "ChangeAutomaticTransfer12Widget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="ChangeAutomaticTransfer12" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "TerminationAutomaticTransfer12Widget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage
              {...props}
              messageType="TerminationAutomaticTransfer12"
            />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "ReApplicationInsurancePolicyWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage
              {...props}
              messageType="ReApplicationInsurancePolicy"
            />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "InsureAnotherPersonWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="InsureAnotherPerson" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "InsurancePolicyWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="InsurancePolicy" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "InsurancePolicyAfterPurchaseWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage
              {...props}
              messageType="InsurancePolicyAfterPurchase"
            />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "SpecifyingBeneficiariesWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="SpecifyingBeneficiaries" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "AmountInsuranceWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="AmountInsurance" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "UninsuredWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="Uninsured" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "WhenPurchaseInsuranceWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="WhenPurchaseInsurance" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "LimitInsuranceWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="LimitInsurance" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "SideInsuranceBeneficiaryConsentWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage
              {...props}
              messageType="SideInsuranceBeneficiaryConsent"
            />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "LegalBeneficiaryWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="LegalBeneficiary" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "MarketingConsentCancelWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="MarketingConsentCancel" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "AfterSideContractDetailsWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="AfterSideContractDetails" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "WhenInsurancePremiumPaymentWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage
              {...props}
              messageType="WhenInsurancePremiumPayment"
            />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "ChangeAutomaticTransferWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="ChangeAutomaticTransfer" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "TerminationAutomaticTransferWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage
              {...props}
              messageType="TerminationAutomaticTransfer"
            />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "ReserveCancellationRefundWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="ReserveCancellationRefund" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "DocumentsInsuranceClaimWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="DocumentsInsuranceClaim" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "MailAcceptanceWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="MailAcceptance" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "ApplicationMaturityInsuranceWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage
              {...props}
              messageType="ApplicationMaturityInsurance"
            />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "WhereCancellationRefundWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="WhereCancellationRefund" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "HowCancellationWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="HowCancellation" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "HowIntermediateWithdrawalWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="HowIntermediateWithdrawal" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "PossibleWithdrawalSubscriptionWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage
              {...props}
              messageType="PossibleWithdrawalSubscription"
            />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "ImPossibleWithdrawalSubscriptionWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage
              {...props}
              messageType="ImPossibleWithdrawalSubscription"
            />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "WherePersonalInformationWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="WherePersonalInformation" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },
      {
        widgetName: "WhereCertificateWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <CustomMessage {...props} messageType="WhereCertificate" />
            <AfterOptions
              {...props}
              options={[
                {
                  text: "보험 계약 및 가입 관련",
                  handler: "InsuranceContracts",
                },
                {
                  text: "보험료 및 납입 관리",
                  handler: "InsurancePayment",
                },
                {
                  text: "보험료 지급 및 해지 처리",
                  handler: "InsuranceTerminate",
                },
                {
                  text: "개인정보 및 증명 서류",
                  handler: "PersonalInformation",
                },
              ]}
            />
          </div>
        ),
      },

      {
        widgetName: "quickGuide",
        widgetFunc: (props) => (
          <div class="mt-[220px] h-auto w-full">
            <CustomMessage {...props} messageType="quickGuide" />
            <div class=" w-full">
              <Options3
                {...props}
                options={[
                  { text: "마케팅 동의 철회", handler: "handleOption1" },
                  {
                    text: "중도인출금 신청",
                    handler: "handleOption1",
                  },
                  { text: "만기보험금 신청 방법", handler: "handleOption1" },
                  {
                    text: "해약 방법",
                    handler: "handleOption2",
                  },
                  {
                    text: "보험료가 통장잔고 미인출 문의",
                    handler: "handleOption3",
                  },
                  {
                    text: "자동이체 신청/변경/해지",
                    handler: "handleOption1",
                  },
                  {
                    text: "자동이체 해지시 보험료 납입",
                    handler: "handleOption2",
                  },
                  {
                    text: "적립금과 해약환급금의 차이",
                    handler: "handleOption8",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        widgetName: "afterOptionsWidget",
        widgetFunc: (props) => (
          <div class="flex flex-col">
            <div class="mb-10 h-[100px] w-full ">
              {" "}
              <AfterOptions
                {...props}
                options={[
                  {
                    text: "보험 계약 및 가입 관련",
                    handler: "InsuranceContracts",
                  },
                  {
                    text: "보험료 및 납입 관리",
                    handler: "InsurancePayment",
                  },
                  {
                    text: "보험료 지급 및 해지 처리",
                    handler: "InsuranceTerminate",
                  },
                  {
                    text: "개인정보 및 증명 서류",
                    handler: "PersonalInformation",
                  },
                ]}
              />
            </div>
            {/* Dynamically render the selected widget */}
            {props.state.currentWidget === "InsuranceContractsWidget" && (
              <MainContractsOptions
                {...props}
                options={[
                  {
                    text: "보험가입",
                    handler: "SideContracts",
                  },
                  {
                    text: "보험증권",
                    handler: "SidePolicy",
                  },
                  {
                    text: "계약사항",
                    handler: "SideContractDetails",
                  },
                  {
                    text: "보험수익자",
                    handler: "SideInsuranceBeneficiary",
                  },
                  {
                    text: "수익자",
                    handler: "SideBeneficiary",
                  },
                  {
                    text: "마케팅 동의",
                    handler: "MarketingConsent",
                  },
                ]}
              />
            )}
            {props.state.currentWidget === "InsurancePaymentWidget" && (
              <MainPaymentOptions
                {...props}
                options={[
                  {
                    text: "보험료 납입",
                    handler: "InsuranceContracts",
                  },
                  {
                    text: "자동이체",
                    handler: "InsurancePayment",
                  },
                  {
                    text: "적립금",
                    handler: "InsuranceTerminate",
                  },
                ]}
              />
            )}
            {props.state.currentWidget === "InsuranceTerminateWidget" && (
              <MainTerminateOptions
                {...props}
                options={[
                  {
                    text: "보험금 청구",
                    handler: "InsuranceContracts",
                  },
                  {
                    text: "지급금 우편접수",
                    handler: "InsurancePayment",
                  },
                  {
                    text: "만기보험금",
                    handler: "InsuranceTerminate",
                  },
                  {
                    text: "해약환급금",
                    handler: "InsuranceTerminate",
                  },
                  {
                    text: "해약",
                    handler: "InsuranceTerminate",
                  },
                  {
                    text: "중도인출",
                    handler: "InsuranceTerminate",
                  },
                  {
                    text: "청약철회",
                    handler: "InsuranceTerminate",
                  },
                ]}
              />
            )}
            {props.state.currentWidget === "PersonalInformationWidget" && (
              <MainPersonalOptions
                {...props}
                options={[
                  {
                    text: "개인정보",
                    handler: "InsuranceContracts",
                  },
                  {
                    text: "증명서",
                    handler: "InsurancePayment",
                  },
                ]}
              />
            )}
          </div>
        ),
      },

      {
        widgetName: "productIntroWidget",
        widgetFunc: (props) => (
          <>
            <CustomMessage {...props} messageType="productIntro" />
            <div class="h-[120px] w-full">
              <DefalutOptions
                {...props}
                options={[
                  { text: "iM 암보험 무배당 2404", handler: "handleOption1" },
                  {
                    text: "iM 간편정기보험 무배당 2404",
                    handler: "handleOption2",
                  },
                  { text: "iM 저축보험 무배당 2404", handler: "handleOption3" },
                  {
                    text: "iM 교통상해보험 무배당 2404",
                    handler: "handleOption4",
                  },
                ]}
              />
            </div>
          </>
        ),
      },
      {
        widgetName: "simulationWidget",
        widgetFunc: (props) => (
          <CustomMessage {...props} messageType="simulation" />
        ),
      },
      {
        widgetName: "pdfViewer",
        widgetFunc: (props) => (
          <CustomMessage {...props} messageType="pdfViewer" />
        ),
      },
      {
        widgetName: "cancellationRefundWidget",
        widgetFunc: (props) => (
          <CustomMessage {...props} messageType="cancellationRefund" />
        ),
      },
      {
        widgetName: "Error1Widget",
        widgetFunc: (props) => (
          <div class=" mt-[20px] h-auto w-full">
            {/* <CustomMessage {...props} messageType="quickGuide" /> */}
            <div class=" w-full">
              <ErrorOptios
                {...props}
                options={[
                  {
                    text: "보험 계약 및 가입 관련",
                    handler: "InsuranceContracts",
                  },
                  {
                    text: "보험료 및 납입 관리",
                    handler: "InsurancePayment",
                  },
                  {
                    text: "보험료 지급 및 해지 처리",
                    handler: "InsuranceTerminate",
                  },
                  {
                    text: "개인정보 및 증명 서류",
                    handler: "PersonalInformation",
                  },
                ]}
              />
            </div>
          </div>
        ),
      },
    ],
  };

  switch (menuItem) {
    case "quickGuide":
      config.initialMessages = [
        createChatBotMessage("", {
          widget: "quickGuide",
          withAvatar: false,
        }),
      ];
      break;
    case "productIntro":
      config.initialMessages = [
        createChatBotMessage("", {
          widget: "productIntroWidget",
          withAvatar: false,
        }),
      ];
      break;
    case "simulation":
      config.initialMessages = [
        createChatBotMessage("시뮬레이션에 대한 내용을 안내해드리겠습니다.", {
          widget: "simulationWidget",
        }),
      ];
      break;
    default:
      config.initialMessages = [
        createChatBotMessage(
          "안녕하세요! 전문적인 상담사 똑디입니다. 저희가 도와드릴 부분이 있을까요?",
          {
            widget: "optionsWidget",
          },
        ),
      ];
      break;
  }

  return config;
};

export { ChatBotConfig };
