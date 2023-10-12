
import CloseIcon from 'components/icons/CloseIcon'
import ErrorIcon from 'components/icons/ErrorIcon'
import InfoIcon from 'components/icons/InfoIcon'
import SuccessIcon from 'components/icons/SuccessIcon'
import WarningIcon from 'components/icons/WarningIcon'
import { Card, CardContent, CardHeader } from 'components/molecules/cards'
import { NotificationType } from 'datatypes/NotificationType'
import { useCallback, useEffect, useState } from 'react'
import { styled } from 'styled-components'

interface Props {
    title: string
    description?: string
    type?: NotificationType
    showMore?: boolean
    showClose?: boolean
}

const Notification = ({ title, description, type = 'info', showMore = false, showClose = false}: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isRemove, setIsRemove] = useState<boolean>(false)

    const handleHover = useCallback((isOpen: boolean) => {
        setIsOpen(isOpen)
    }, [showMore])

     const handleRemove= useCallback((isRemove: boolean) => {
        setIsRemove(!isRemove)
    }, [showClose])

    useEffect(() => {
        if (showClose) setIsRemove(false)
    }, [showClose])
    
    return (
        <NoticationCard
            $type={type}
            $isRemove={showClose ?isRemove : undefined}
            onMouseEnter={showMore ? () => handleHover(true) : undefined}
            onMouseLeave={showMore ? () => handleHover(false) : undefined}
        >
            <NotificationHeader
                onClick={showClose ? () => handleRemove(isRemove) : undefined}
                isOpen={showMore ? isOpen : true}
                isRemove
            >
                {!['warning', 'success', 'error'].includes(type) && <InfoIcon />}
                {type === 'warning' && <WarningIcon />}
                {type === 'success' && <SuccessIcon />}
                {type === 'error' && <ErrorIcon />}
                <h3>{title}</h3>
            </NotificationHeader>
            {description && description !== '' ? <NotificationContent isOpen={showMore ? isOpen : true}>
                {description}
            </NotificationContent> : null}
        </NoticationCard>
   )
}

const NoticationCard = styled(Card) <{$type: NotificationType, $isRemove?: boolean}>`
    background-color: ${({ theme, $type }) => $type === 'error' ? theme.style.notificationErrorColorBg : $type === 'warning' ? theme.style.notificationWarningColorBg : $type === 'success' ? theme.style.notificationSuccessColorBg : theme.style.notificationInfoColorBg};
    color: ${({ theme, $type }) => $type === 'error' ? theme.style.notificationErrorColor : $type === 'warning' ? theme.style.notificationWarningColor : $type === 'success' ? theme.style.notificationSuccessColor : theme.style.notificationInfoColor};

    opacity: 1;
    transform: scale(${({ $isRemove }) => ($isRemove? 0 : 1)});
	transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;

    ${({ $isRemove }) => $isRemove && `
        opacity: 0;
    `}
`
const NotificationHeader = styled(CardHeader)`
    padding-top: 1em;
    padding-bottom: 1em;

    > div {
        display: flex;
        gap: 0.5em;
        align-items: center;
    }
`
const NotificationContent = styled(CardContent) <{isOpen: boolean}>`
    ${({ isOpen }) => isOpen && `
        padding-top: 1em;
        padding-bottom: 1em;
    `}
`
export default Notification