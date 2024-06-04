import React, { useEffect, useRef, useState } from 'react';
import { Calendar as Cal } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import { useTranslation } from 'next-i18next';

import { NormalLabel } from "@/components";

export const DateTime = (props) => {
    const { t } = useTranslation('translation');
    const {
        dateTimeParentClassName,
        dateTimeParentStyle,
        labelProps,
        dateTimeClass,
        value,
        onChange,
        float,
        floatLabelProps,
        ...restProps
    } = props && props.dateTimeProps;

    const [date, setDate] = useState(props.dateTimeProps.date);
    const calendarRef = useRef(null);

    addLocale('en', {
        firstDayOfWeek: 0,
        dayNames: [t('sunday'), t('monday'), t('tuesday'), t('wednesday'), t('thursday'), t('friday'), t('saturday')],
        dayNamesShort: [t('su'), t('mo'), t('tu'), t('we'), t('th'), t('fr'), t('sa')],
        dayNamesMin: [t('su'), t('mo'), t('tu'), t('we'), t('th'), t('fr'), t('sa')],
        monthNames: [t('jan'), t('feb'), t('mar'), t('apr'), t('may'), t('jun'), t('jul'), t('aug'), t('sep'), t('oct'), t('nov'), t('dec')],
        monthNamesShort: [t('jan'), t('feb'), t('mar'), t('apr'), t('may'), t('jun'), t('jul'), t('aug'), t('sep'), t('oct'), t('nov'), t('dec')],
        today: t('today'),
        clear: t('clear')
    });

    return (
        <div className={`custom_input ${dateTimeParentClassName} ${float ? 'p-float-label' : ''}`} style={dateTimeParentStyle}>
            {labelProps?.text && (
                <div className={`${labelProps.labelMainClassName || 'pb-1'}`}>
                    <NormalLabel
                        labelClass={labelProps.inputLabelClassName}
                        text={labelProps.text}
                        spanText={labelProps.spanText}
                        spanClass={labelProps.inputLabelSpanClassName}
                        htmlFor={labelProps.htmlFor}
                    />
                </div>
            )}
            <Cal className={`${dateTimeClass}`}
                showTime
                ref={calendarRef}
                value={date || value}
                onChange={(e) => {
                    setDate(e.value);
                    if (onChange) {
                        onChange(e);
                    }
                }
                }
                dateFormat={t('dateFormat')}
                panelClassName="custom-panel"
                {...restProps}
            />
            {floatLabelProps?.text && (
                <label className={`custom-label ${floatLabelProps.inputLabelClassName}`} htmlFor={floatLabelProps.id}>{floatLabelProps.text}<span className={floatLabelProps.inputLabelSpanClassName}>{floatLabelProps.spanText}</span></label>
            )}
        </div>
    );
}


export const Calendar = (props) => {
    const {
        calendarParentClassName,
        calendarParentStyle,
        labelProps,
        calendarClassName,
        value,
        onChange,
        float,
        floatLabelProps,
        ...restProps
    } = props && props.calendarProps;

    const [date, setDate] = useState(props.calendarProps.date);

    useEffect(() => {
        setDate(props.calendarProps.date)
    }, [props.calendarProps.date])

    addLocale('en', {
        firstDayOfWeek: 0,
        dayNames: [t('sunday'), t('monday'), t('tuesday'), t('wednesday'), t('thursday'), t('friday'), t('saturday')],
        dayNamesShort: [t('su'), t('mo'), t('tu'), t('we'), t('th'), t('fr'), t('sa')],
        dayNamesMin: [t('su'), t('mo'), t('tu'), t('we'), t('th'), t('fr'), t('sa')],
        monthNames: [t('jan'), t('feb'), t('mar'), t('apr'), t('may'), t('jun'), t('jul'), t('aug'), t('sep'), t('oct'), t('nov'), t('dec')],
        monthNamesShort: [t('jan'), t('feb'), t('mar'), t('apr'), t('may'), t('jun'), t('jul'), t('aug'), t('sep'), t('oct'), t('nov'), t('dec')],
        today: t('today'),
        clear: t('clear')
    });

    return (
        <div className={`custom_input ${calendarParentClassName} ${float ? 'p-float-label' : ''}`} style={calendarParentStyle}>
            {labelProps?.text && (
                <div className={`${labelProps.labelMainClassName || 'pb-1'}`}>
                    <NormalLabel
                        labelClass={labelProps.calendarLabelClassName}
                        text={labelProps.text}
                        spanText={labelProps.spanText}
                        spanClass={labelProps.calendarLabelSpanClassName}
                        htmlFor={labelProps.htmlFor}
                    />
                </div>
            )}
            <Cal className={`${calendarClassName}`}
                value={date || value}

                onChange={(e) => {
                    setDate(e.value);
                    if (onChange) {
                        onChange(e);
                    }
                }}
                dateFormat={t('dateFormat')}
                panelClassName="custom-panel"
                {...restProps}
            />
            {floatLabelProps?.text && (
                <label className={`custom-label ${floatLabelProps.calendarLabelClassName}`} htmlFor={floatLabelProps.id}>{floatLabelProps.text}<span className={floatLabelProps.calendarLabelSpanClassName}>{floatLabelProps.spanText}</span></label>
            )}
        </div>
    );
}


export const DateTimeDisplay = (props) => {
    const { i18n } = useTranslation();
    const {
        fontsize,
        bgColor,
        fontWeight,
        parentClass,
        id,
        parentStyle,
    } = props;

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 60000); // Update every minute

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const options = {
        year: 'numeric',
        month: i18n.language == "ja" ? 'long' : '2-digit',
        day: i18n.language == "ja" ? 'numeric' : '2-digit',
        hour: '2-digit',
        hour12: false,
        minute: '2-digit',
        timeZone: 'Asia/Tokyo'
    };

    const formattedDateTime = currentDateTime.toLocaleString(i18n.language === 'ja' ? 'ja-JP' : 'en-US', options);
    const displayDateTime = formattedDateTime.replace(/(\d+)\/(\d+)\/(\d+), (\d+):(\d+)/, '$3-$1-$2 $4:$5');

    const formattedDateTime1 = currentDateTime.toLocaleString('ja-JP', options);
    const displayDateTime1 = formattedDateTime1.replace(/(\d+)年(\d+)月(\d+)日,/, '$1年$2月$3日 ');

    return (
        <div className={`${fontsize} ${bgColor} ${fontWeight} ${parentClass}`} id={id} style={parentStyle}>
            {i18n.language == "ja" ? displayDateTime1 : displayDateTime}
        </div>
    );
};