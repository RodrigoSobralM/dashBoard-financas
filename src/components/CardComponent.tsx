import { CardComponentProps } from '@/types/cardComponent'
import { pxToRem } from '@/utils'
import styled from 'styled-components'

export const CardComponent = styled.div<CardComponentProps>`
  background-color: ${(props) => props.theme.card.background};
  border: none;
  width: 100%;
  border-radius: ${pxToRem(12)};
  box-sizing: border-box;
  height: ${(props) => props.heightlg};

  @media (max-width: 600px) {
    height: ${(props) => props.heightsm};
  }

  @media (max-width: 500px) {
    height: ${(props) => props.heightxs};
  }

  &.cardBlack {
    background-color: ${(props) => props.theme.card.backgroundTerciario};
  }

  &.cardBeige {
    background-color: ${(props) => props.theme.card.backgroundSecundario};
  }

  &.cardRecurringBills {
    width: 100%;
    height: ${pxToRem(61)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: ${pxToRem(16)};
    padding-right: ${pxToRem(16)};
  }

  &.cardPotsRecents {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${pxToRem(16)};
  }
`
