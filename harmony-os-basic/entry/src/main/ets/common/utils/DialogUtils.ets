import Context from '@ohos.app.ability.common';
import Logger from './Logger';
import CommonConstants from '../constant/CommonConstant';

export class DialogUtils {
  /**
   * alert dialog
   */
  alertDialog(context: Context.UIAbilityContext) {
    AlertDialog.show({
      message: '',
      alignment: DialogAlignment.Bottom,
      offset: {
        dx: 0,
        dy: -20
      },
      primaryButton: {
        value: 'Cancel',
        action: () => {
          Logger.info('cancel button clicked');
        }
      },
      secondaryButton: {
        value: 'Definite',
        action: () => {
          // Exiting the app.
          context.terminateSelf();
          Logger.info('Callback definite button is clicked');
        }
      }
    })
  }

  /**
   * Date dialog
   */
  datePickerDialog(dateCallback: Function) {
    DatePickerDialog.show({
      start: new Date(CommonConstants.START_TIME),
      end: new Date(),
      selected: new Date(CommonConstants.SELECT_TIME),
      lunar: false,
      onAccept: (value: DatePickerResult) => {
        let year: number = Number(value.year);
        let month: number = Number(value.month) + 1;
        let day: number = Number(value.day);
        let birthdate: string = this.getBirthDateValue(year, month, day);
        dateCallback(birthdate);
      }
    });
  }


  /**
   * Text dialog dialog
   */
  textPickerDialog(sexArray: Resource, sexCallback: Function) {
    if (this.isEmpty(sexArray)) {
      Logger.error('sex is null');
      return;
    }
    TextPickerDialog.show({
      range: sexArray,
      selected: 0,
      onAccept: (result: TextPickerResult) => {
        sexCallback(result.value);
      },
      onCancel: () => {
        Logger.info('TextPickerDialog onCancel');
      }
    });
  }

  /**
   * Get default birth date
   *
   * @param {number} year year
   * @param {number} month month
   * @param {number} day day
   * @returns {string} return birth date
   */
  getBirthDateValue(year: number, month: number, day: number): string {
    let birthdate: string = `${year}年${month}` +
    `月${day}日`;
    return birthdate;
  }

  isEmpty(obj: object | string): boolean {
    return obj === undefined || obj === null || obj === '';
  }
}

export default new DialogUtils();