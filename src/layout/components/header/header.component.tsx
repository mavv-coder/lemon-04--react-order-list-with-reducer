import React from "react";
import classComponents from "./header.styles";
import { FormData } from "../../../core/context";

import { InputInfoState } from "./header.reducer";

interface Props {
  InputInfoState: InputInfoState;
  formData: FormData;
  totalCost: number;
  orderState: number;
  handleSubmit: (e: React.MouseEvent<HTMLElement>) => void;
  handleNumberInputStyle: (value: string, type: string) => void;
  handleProviderInputStyle: (value: string, type: string) => void;
  handleDateInputStyle: (value: string, type: string) => void;
}

export const HeaderComponent: React.FC<Props> = (props) => {
  const {
    totalCost,
    formData,
    orderState,
    handleSubmit,
    handleNumberInputStyle,
    handleProviderInputStyle,
    handleDateInputStyle,
    InputInfoState,
  } = props;

  const {
    stateInputSuccess,
    orderNumInputSuccess,
    providerInputSuccess,
    dateInputSuccess,
  } = InputInfoState;

  const {
    Container,
    FlexContainer,
    InputField,
    InputReadOnly,
    Input,
    Label,
    Button,
    InputSuccess,
    InputStateSuccess,
  } = classComponents;

  return (
    <Container>
      <form>
        <FlexContainer>
          <InputField>
            <Label>Número</Label>
            {orderNumInputSuccess ? (
              <InputSuccess
                type="text"
                id="orderNum"
                defaultValue={formData.orderNum}
                onBlur={(e) =>
                  handleNumberInputStyle(e.target.value, e.target.id)
                }
              />
            ) : (
              <Input
                type="text"
                id="orderNum"
                onBlur={(e) =>
                  handleNumberInputStyle(e.target.value, e.target.id)
                }
              />
            )}
          </InputField>
          <InputField>
            <Label>Proveedor</Label>
            {providerInputSuccess ? (
              <InputSuccess
                type="text"
                id="provider"
                defaultValue={formData.provider}
                onBlur={(e) =>
                  handleProviderInputStyle(e.target.value, e.target.id)
                }
              />
            ) : (
              <Input
                type="text"
                id="provider"
                onBlur={(e) =>
                  handleProviderInputStyle(e.target.value, e.target.id)
                }
              />
            )}
          </InputField>
          <InputField>
            <Label>Fecha</Label>
            {dateInputSuccess ? (
              <InputSuccess
                type="date"
                id="date"
                defaultValue={formData.date}
                onBlur={(e) =>
                  handleDateInputStyle(e.target.value, e.target.id)
                }
              />
            ) : (
              <Input
                type="date"
                id="date"
                onBlur={(e) =>
                  handleDateInputStyle(e.target.value, e.target.id)
                }
              />
            )}
          </InputField>
        </FlexContainer>
        <FlexContainer>
          <InputField>
            <Label>Importe total</Label>
            <InputReadOnly
              type="text"
              value={`${totalCost.toFixed(2)} €`}
              readOnly
            />
          </InputField>
          <InputField>
            <Label>Estado</Label>
            {stateInputSuccess ? (
              <InputStateSuccess
                type="text"
                value={`${orderState}%`}
                readOnly
              />
            ) : (
              <InputReadOnly type="text" value={`${orderState}%`} readOnly />
            )}
          </InputField>
          <InputField>
            <Button type="submit" onClick={(e) => handleSubmit(e)}>
              Enviar
            </Button>
          </InputField>
        </FlexContainer>
      </form>
    </Container>
  );
};
